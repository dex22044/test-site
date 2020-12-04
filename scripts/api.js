let channel_id = 0;
let messages=[]

function send_message(){
    let contentNode=document.querySelector('#msgSendingTextInput');
    let content=contentNode.value;
    contentNode.value='';
    add_message('dex22044',content,true);
}

function get_messages(){

}