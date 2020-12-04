let messages_list_element;
let message_container_template;

window.onload=function(){
    init_ui();
    init_autoresize();
}

function init_ui(){
    messages_list_element=document.querySelector('#messages');
    message_container_template = document.querySelector('.message_template');
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