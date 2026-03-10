function openRecruiter(){

document.getElementById("recruiter").style.display="block";

window.scrollTo(0,document.body.scrollHeight);

}


function verify(){

document.getElementById("result").innerHTML="Scanning GitHub profile...";

setTimeout(function(){
document.getElementById("result").innerHTML="Analyzing repositories...";
},1500);

setTimeout(function(){
document.getElementById("result").innerHTML="Checking programming languages...";
},3000);

setTimeout(function(){
document.getElementById("result").innerHTML=
"Trust Score: 82% — Candidate likely genuine <br><br> \
Detected Projects:<br> \
• React Portfolio Website<br> \
• Node.js API Backend<br> \
• Machine Learning Resume Analyzer";
},4500);

}
function openDeveloper(){

document.getElementById("developer").style.display="block";

window.scrollTo(0,document.body.scrollHeight);

}


function showProjects(){

document.getElementById("projects").innerHTML="Fetching repositories...";

setTimeout(function(){

document.getElementById("projects").innerHTML=
"Repositories Found:<br><br>\
• React Portfolio Website<br>\
• Node.js API Backend<br>\
• Machine Learning Resume Analyzer<br>\
• Python Data Analysis Tool";

},2000);

}