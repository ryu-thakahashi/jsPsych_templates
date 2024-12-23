// source: https://www.jspsych.org/v7/tutorials/hello-world/

// initial setup
const jsPsych = initJsPsych();

// define the task
const hello_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Hello world!",
};

// run the experiment
jsPsych.run([hello_trial]);
