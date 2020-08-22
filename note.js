$('main').innerHTML=unescape('当前线路故障, 请使用线路3或4进入网站, 只需将网址中的数字1改成3或4即可');function $(id){if(document.getElementById){return document.getElementById(id);}else if(document.all){return document.all(id);}return document.layers[id];}
function check_main(){var m=$('main');if(m.style.display=='none'){ m.style.display='';}}
check_main();