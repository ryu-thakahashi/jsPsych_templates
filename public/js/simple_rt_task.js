// source: https://www.jspsych.org/v7/tutorials/rt-task/

// initial setup
const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData();
    },
});
const timeline = [];

// define the task
const preload = {
    type: jsPsychPreload,
    images: ["../img/blue.png", "../img/orange.png"],
};
// add the task to the timeline
timeline.push(preload);

// define the task
const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Welcome to the experiment. Press any key to begin.",
};
// add the task to the timeline
timeline.push(welcome);

// define the task
const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        <p>この実験では，画面の中央に円が表示されます。円が<strong>青色</strong>の場合は，
        キーボードのFキーをできるだけ速く押してください。</p>
        <p>円が<strong>オレンジ色</strong>の場合は，キーボードのJキーをできるだけ速く押してください。</p>
        <div style='width: 700px;'>
            <div style='float: left;'>
                <img src='../img/blue.png'></img>
                <p class='small'><strong>Fキーを押してください</strong></p></div>
                <div style='float: right;'><img src='../img/orange.png'></img>
                <p class='small'><strong>Jキーを押してください</strong></p>
            </div>
        </div>
        <p>実験を開始するには，任意のキーを押してください。</p>
    `,
    post_trial_gap: 2000,
};
// add the task to the timeline
timeline.push(instructions);

// define the task
// 青の●が出たらFキーを押す、オレンジの●が出たらJキーを押す
const blue_trial = {
    type: jsPsychImageKeyboardResponse,
    stimulus: "../img/blue.png",
    choices: ["f", "j"],
};
const orange_trial = {
    type: jsPsychImageKeyboardResponse,
    stimulus: "../img/orange.png",
    choices: ["f", "j"],
};
// add the task to the timeline
timeline.push(blue_trial, orange_trial);

// run the experiment
jsPsych.run(timeline);
