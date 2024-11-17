let existingMessages = JSON.parse(localStorage.getItem('cult::chat::messages'));

if(existingMessages == null) {
    existingMessages = [];
}

const chatMessagesDiv = document.getElementById('chat-messages');

existingMessages.forEach(function(item, index) {
    addMessage(item.message, item.type);
});

const btn = document.getElementById('send-button');

btn.addEventListener('click', sendMessage);

function sendMessage(){
    const msg = document.getElementById("chat-input").value;
    addMessage(msg, 'sent');
    saveToStore(msg, 'sent');
}


function addMessage(message, type) {
    const newMessageDiv = document.createElement('div');
    newMessageDiv.classList.add('message', type);
    newMessageDiv.textContent = message;
    chatMessagesDiv.appendChild(newMessageDiv); 
}

function saveToStore(msg, type){
    const message = {message: msg, type: type, time: new Date()};
    existingMessages.push(message)
    localStorage.setItem('cult::chat::messages', JSON.stringify(existingMessages))
}

