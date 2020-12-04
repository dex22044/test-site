function autoResize() {
    this.style.height = 'auto';
    if(this.scrollHeight<150)
        this.style.height = (this.scrollHeight+5) + 'px';
    else
        this.style.height = '150px';
    
    sendMessageButton.style.height=this.style.height;
}

let sendMessageButton;

function init_autoresize(){
    textarea = document.querySelector("#msgSendingTextInput");
    sendMessageButton=document.querySelector('#sendMsgBtn');
    textarea.addEventListener('input', autoResize, false);
}