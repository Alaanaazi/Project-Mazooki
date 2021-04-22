const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// single field & validations

const subSchemaQuestionsOptions = new Schema({
  id: {
    type: String,
  },
  options: [String]
});

const subSchemaQuestions = new Schema({
    question: {
      type: String,
    },
    type: {
      type: String,
    },
    answers: [subSchemaQuestionsOptions],
    questionAnswers: [String],
  });

const surveySchema = new Schema({
    surveyTitle: { type: String, required: true, trim: true },
    surveyDesc: { type: String, required: true, trim: true },
    questions: [subSchemaQuestions],
    
}, {
    //fields 
    timestamps: true,
});

//creates table
const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;