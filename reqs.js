$('main').innerHTML=unescape('请求过于频繁, 请稍后再试');function $(id){if(document.getElementById){return document.getElementById(id);}else if(document.all){return document.all(id);}return document.layers[id];}
function check_main(){var m=$('main');if(m.style.display=='none'){ m.style.display='';}}
check_main();