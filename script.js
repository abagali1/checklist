'use strict';
console.log('started');
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<AUTH_DOMAIN",
    databaseURL: "<DB_URL>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_ID>"
};
firebase.initializeApp(config);



var mes;
var database = firebase.database();
var ref = database.ref('masterSheet');
var events;

ref.on('value', function (snapshot) {
    events = snapshot.val();
    document.querySelector('.todo').innerHTML = ' ';


    for(let i=0;i<=events.length-1;i++){
        if(!events[i][2]){
            todoCard(events[i]);
        }
    }
});


function isFinished(message){
    return message[2];
}



function todoCard(message) {
    console.log('todo');
    console.log(message[3]);

    let bar = document.getElementById('bar');
    let template = document.querySelector('.todo-template').innerText;
    let html = template.replace('TODO_TITLE', message[0]);

    html = html.replace('TODO_CONTENT', message[1]);

    Array.from(document.getElementsByClassName("prog-bar")).forEach(
        function(element, index, array) {
            if(index = events.indexOf(message)){
                element.id = ""+message[3];
                element.style.width = message[3]+"%";
                console.log(message[0] + ": " + element.style.width);
            }else{
                console.log('err');
            }
        }
    );

    html = html.replace('PROG_BAR',bar.innerHTML);


    let elem = document.createElement('div');
    elem.innerHTML = html;
    document.querySelector('.todo').append(elem);

}

function finishedCard(message) {
    console.log('finished');
    let template = document.querySelector('.finished-template').innerText;
    let html = template.replace('FINISHED_TITLE', message[0]);
    html = html.replace('FINISHED_CONTENT', message[1]);
    console.log(html);
    let elem = document.createElement('div');
    elem.innerHTML = html;
    elem.classList.add('finished');
    document.querySelector('.list').replaceWith(elem);

}

function toString(message){
    mes = message;
    return mes;
}
