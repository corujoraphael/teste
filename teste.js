var hash_smartzap = "NzRmZGZkNzk0Nzk5ZTBkNjM3ZDg0NWJmNGNmMzhiNWJhODdmZjY3OWEyZjNlNzFkOTE4MWE2N2I3NTQyMTIyYw"


window.onload = function(){

    if (hash_smartzap) {
        var url =  'https://cittatelecom.sz.chat';
        // Iframe Btn
        var iframeBtn = document.createElement("iframe");
        iframeBtn.src = url+'/webchannel/v2/btn.php?hash_smartzap='+hash_smartzap;
        iframeBtn.style = "z-index: 2147483000!important;position: fixed!important;bottom: 20px;right: 20px;width: 80px!important;height: 80px!important;border:0!important;";
        iframeBtn.id = "smartzap_chat_btn_iframe";
        // Iframe conversation
        var iframeConversation = document.createElement("iframe");
        
        if (screen == "true") {
            iframeConversation.style = "z-index: 2147483000!important;position: fixed!important;bottom: 0px;right: 0px;width: 100%!important;height: 100%!important;border: 0!important;display: none;";
        } else {
            iframeConversation.style = "z-index: 2147483000!important;position: fixed!important;bottom: 20px;right: 20px;width: 300px!important;height: 400px!important;border: 0!important;display: none;";
        }
        
        iframeConversation.id = "smartzap_chat_conversation_iframe";

        document.body.appendChild(iframeBtn);
        document.body.appendChild(iframeConversation);
        var iframe = document.querySelector("#smartzap_chat_conversation_iframe");

        
        if ((typeof name !== 'undefined' && typeof email !== 'undefined') && name !== "" && email !== "") {
            iframeConversation.src = url+'/webchannel/v2/conversation.php?hash_smartzap='+hash_smartzap+'&name='+name+'&email='+email+"&screen="+screen;
            iframe.style.display = 'block';
        } else {
            iframeConversation.src = url+'/webchannel/v2/conversation.php?hash_smartzap='+hash_smartzap+'&screen='+screen;
        }



        window.addEventListener("message",function(message){
            var action = message.data;
            
            var iframeBtn = document.querySelector("#smartzap_chat_btn_iframe");

            if (action) {
                if (action == "open_conversation") {
                    iframe.style.display = 'block';
                }
                if (action == "close_conversation") {
                    iframe.style.display = 'none';
                }
                if (action.indexOf("iframe_width") != -1) {
                    var width = parseInt(action.replace("iframe_width:",""));
                    iframeBtn.style.width = (width*1 + 84)+"px";
                }
            }
        });
    }

    

};

