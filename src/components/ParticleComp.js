import React, { Component } from 'react';
import Particles from "react-tsparticles";


export default function ParticleComp() {
    return (
        
            <div style={{width: "100%",height: "100%", backgroundColor: "blue"}}>
                <Particles style={{height: "100%", backgroundColor: "blue"}}
                height={ 1200 }
                id="tsparticles"
                options={{
                  background: {
                    color: {
                      value: "#3088ace6",
                    },
                  },
                  fpsLimit: 60,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "respond",
                      },
                      resize: true,
                    },
                  },
                  particles: {
                    color: {
                      value: "#ffffff",
                    },
                    links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 7,
                    },
                  },
                    detectRetina: true,
                }}
                  />
                
            </div>
        
    )
}
