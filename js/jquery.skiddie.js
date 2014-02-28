/* ------------------------------------------------------------------------
 Class: jquery.skiddie.js
 Use: **
 Author: Akın Soytürk
 Version: 1.0.0
 ------------------------------------------------------------------------- */
$(document).ready(function(){
    var variable_list = new Array();
    variable_list.push({name : 'current_client_id', val : 1337});
    variable_list.push({name : 'member_uniq_id', val : 3371});
    variable_list.push({name : 'session_identity', val : 7133});
    var form_list = $('.skiddie');
    $.each(form_list, function(index, item){
        var temp = variable_list[Math.floor(Math.random() * variable_list.length)];
        $(item).append('<input value="' + temp.val + '" name="' + temp.name + '" type="hidden"/>');
    });
});
