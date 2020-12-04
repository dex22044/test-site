let messages_list_element;
let messages_div_element;
let message_container_template;
let webrtcStatusDisplay;

window.onload=function(){
    init_ui();
    init_autoresize();
}

function init_ui(){
    messages_list_element=document.querySelector('#messages');
    message_container_template = document.querySelector('.message_template');
    webrtcStatusDisplay=document.querySelector('.webrtcConnectionDisplay');
    messages_div_element=document.querySelector('.messages');
}

function add_message(author, content, isNewGroup){
    var clone=message_container_template.cloneNode(true);

    if(!isNewGroup){
        clone.querySelector('.message_thumbnail_img').style.display='none';
        clone.querySelector('.message_author').style.display='none';
        clone.querySelector('.message_content').style.margin='0 0 0 32px ';
    }else{
        clone.style.margin='30px 0 0 0';
    }
    clone.querySelector('.message_content').innerHTML=content;
    clone.querySelector('.message_author').innerHTML=author;
    messages_list_element.appendChild(clone);
}

function disconnectBtn_click(){
    webrtcStatusDisplay.style.display='none';
    messages_div_element.style.top='0px';
}

function showConnectionDisplay(){
    messages_div_element.style.top='250px';
    webrtcStatusDisplay.style.display='block';
}