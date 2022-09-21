if (document.getElementById) {
var qp = document.getElementById('bbcpage_quest_para');
if (document.getElementById('bbcpage_quest_no').innerHTML == "NAGOES") {var isCymru = 1;} else {var isCymru = 0;}
var addjs = qp.innerHTML.toString();
while (addjs.indexOf("js=no") != -1) {addjs = addjs.replace("js=no","js=yes");}
qp.innerHTML = addjs;
var addx = qp.innerHTML.toString();
addx = addx.substring(addx.lastIndexOf("> <") + 2);
if (isCymru == 1) {addx = addx.replace(">NAGOES<",">x<");} else {addx = addx.replace(">NO<",">x<");}
addx = addx.replace("bbcpage_quest_no","bbcpage_quest_close");
qp.innerHTML += addx;
document.getElementById('bbcpage_quest_yes').onclick = function() {window.open(this.href,"bbcsurveywin","status=no,scrollbars=yes,resizable=yes,width=600,height=440");return false;}
var q = document.getElementById('bbcpage_quest').style;
var qq = document.getElementById('bbcpage_quest_question').style;
var qy = document.getElementById('bbcpage_quest_yes').style;
var qn = document.getElementById('bbcpage_quest_no').style;
var qc = document.getElementById('bbcpage_quest_close').style;
q.position = "absolute";
q.top = "200px";
q.left = "250px";
q.border = "3px solid black";
q.width = "275px";
q.height = "120px";
q.zIndex = "1000";
qp.style.textAlign = "center";
qp.style.paddingTop = "25px";
qq.display = "block";
qq.fontWeight = "bold";
qy.position = "absolute";
qy.top = "4px";
qy.background = "white";
qy.border = "1px solid black";
qy.textDecoration = "none";
qy.display = "block";
qy.width = "35px";
qy.height = "";
qy.padding = "2px 0px";
qy.textAlign = "center";
qy.right = "140px";
if (isCymru == 1) {qy.right = "150px";} else {qy.right = "140px";}
qy.top = "85px";
qn.position = "absolute";
qn.top = "4px";
qn.background = "white";
qn.border = "1px solid black";
qn.textDecoration = "none";
qn.display = "block";
if (isCymru == 1) {qn.width = "65px";} else {qn.width = "35px";}
qn.height = "";
qn.padding = "2px 0px";
qn.textAlign = "center";
if (isCymru == 1) {qn.right = "75px";} else {qn.right = "95px";}
qn.top = "85px";
qc.position = "absolute";
qc.top = "2px";
qc.right = "2px";
qc.width = "15px";
qc.height = "";
qc.fontSize = "12px";
qc.lineHeight = "12px";
qc.padding = "0 0px 2px 0px";
qc.color = "009";
qc.background = "white";
qc.border = "1px solid black";
qc.textDecoration = "none";
qc.textAlign = "center";
qc.display = "block";
document.getElementById('bbcpage_quest_sep').style.display = "none";
document.getElementById('bbcpage_quest_font').style.fontFamily = "arial,helvetica,sans-serif";
}