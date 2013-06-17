// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  "info" : {
    "name" : "Pedi-Brain Quiz",
    "main" : "Take this quiz, and become one of the best Pediatric Neuroradiologist in the world.",
    "results" : "<strong>Credits</strong><p>This quiz is based on the amazing work of Daniel Haehn",
    "level1" : "Brain King!",
    "level2" : "Room for improvement...",
    "level3" : "Stay in school, kid...",
    "level4" : "Stay in school, kid...",
    "level5" : "Stay in school, kid..."// no comma here
  },
  "questions" : [
      { // Question 1
        "q" : "Which brain structure is actually folded cortex?",
        "c" : "q1_callback()",
        "a" : [ {
          "option" : "Pallidum",
          "correct" : false
        }, {
          "option" : "Hippocampus",
          "correct" : true
        }, {
          "option" : "Amygdala",
          "correct" : false
        }, {
          "option" : "Putamen",
          "correct" : false
        } // no comma here
        ],
        "correct" : "<p><span>That's right!</span> It's the <strong>Hippocampus</strong>!</p>",
        "incorrect" : "<p><span>Uhh no.</span> This was wrong - it is the <strong>Hippocampus</strong></p>" // no comma here
      },
      { // Question 2
        "q" : "Here is question number 2?",
        "c" : "q2_callback()",
        "a" : [ {
          "option" : "option 1",
          "correct" : false
        }, {
          "option" : "option 2",
          "correct" : true
        }, {
          "option" : "option 3",
          "correct" : false
        }, {
          "option" : "option 4",
          "correct" : false
        } // no comma here
        ],
        "correct" : "<p><span>That's right!</span> It's <strong>option 2</strong>!</p>",
        "incorrect" : "<p><span>Uhh no.</span> This was wrong - it is <strong>option 2</strong></p>" // no comma here
      },
      { // Question 3
        "q" : "Yet another well crafted question?",
        "c" : "q3_callback()",
        "a" : [ {
          "option" : "option 1",
          "correct" : false
        }, {
          "option" : "option 2",
          "correct" : true
        }, {
          "option" : "option 3",
          "correct" : false
        }, {
          "option" : "option 4",
          "correct" : false
        } // no comma here
        ],
        "correct" : "<p><span>That's right!</span> It's <strong>option 2</strong>!</p>",
        "incorrect" : "<p><span>Uhh no.</span> This was wrong - it is <strong>option 2</strong></p>" // no comma here
      }
  ]
};


function q1_callback() {
	//scene_picking();
}

function q2_callback() {
	//
}

function q3_callback() {
	//
}

$(function() {
	$('#slickQuiz').slickQuiz();
});