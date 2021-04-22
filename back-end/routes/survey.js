const router = require('express').Router();
let Survey = require('../models/survey.model');


router.route('/').get((req, res) => {
    Survey.find()
        .then(surveys => res.json(surveys))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const surveyTitle = req.body.surveyTitle;
    const surveyDesc = req.body.surveyDesc;
    const questions = [...req.body.questions];

    
    
    const newSurvey = new Survey({
        surveyTitle,
        surveyDesc,
        questions,
    });

    newSurvey.save()
        .then(() => res.json('Survey added'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').get((req, res) => {
    Survey.findById(req.params.id)
        .then(survey => res.json(survey))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Survey.findById(req.params.id)
        .then(survey => {
            survey.surveyTitle = req.body.surveyTitle;
            survey.surveyDesc = req.body.description;
            survey.questions = [...req.body.questions];

            survey.save()
                .then(() => res.json('Survey updated'))
                .catch(err => res.status(400).json('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Survey.findByIdAndDelete(req.params.id)
        .then(() => res.json('Survey deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;