function autoResize() {
    sendMessageDiv.style.height = 'auto';
    this.style.height='100%';
    if(this.scrollHeight<150)
        sendMessageDiv.style.height = this.scrollHeight + 'px';
    else
        sendMessageDiv.style.height = '150px';
}

let sendMessageDiv;

function init_autoresize(){
    textarea = document.querySelector("#msgSendingTextInput");
    sendMessageDiv=document.querySelector('.messageSendingBox');
    textarea.addEventListener('input', autoResize, false);
}