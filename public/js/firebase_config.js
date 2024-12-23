// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
    getDatabase,
    ref,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Your web app's Firebase configuration
// この部分は，自分のプロジェクトの設定に合わせて変更してください
const firebaseConfig = {
    apiKey: "ABCDEFGHIJKLMNOQRSTUVWXYZ1234567890",
    authDomain: "[your_project_id].firebaseapp.com",
    databaseURL: "https://[your_project_id].firebaseio.com",
    projectId: "[your_project_id]",
    storageBucket: "[your_project_id].firebasestorage.app",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:ABCDEFGHIJKLMNOQRSTUVWXYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const db_ref = ref(db, "data_key");

// save data to firebase
const jsPsych = initJsPsych({
    on_finish: function () {
        const data = jsPsych.data.get().json();
        push(db_ref, data);
        // jsPsych.data.displayData();

        // 送信後にthanks_page.htmlに遷移する場合
        // window.location.href = "./html/thanks_page.html";
    },
});
