function openPopUp() {
    document.getElementById("closePopUp").style.marginBottom = "1000px"
}
function closePopUp() {
    document.getElementById("closePopUp").style.marginBottom = "-1000px"
}

var a; function openNav() {
    if(a==1){
    document.getElementById("closeNav").style.marginLeft = "-600px";
    return a=0;
    }
    else {
        document.getElementById("closeNav").style.marginLeft = "600px";
        return a=1;
    }
}
function openSkills() {
    document.getElementById("closeSkills").style.marginTop = "1000px"
}
function closeSkills() {
    document.getElementById("closeSkills").style.marginTop = "-1000px"
}
function openService() {
    document.getElementById("closeService").style.marginTop = "1000px"
}
function closeService() {
    document.getElementById("closeService").style.marginTop = "-1000px"
}
function openContact() {
    document.getElementById("closeContact").style.marginBottom = "1000px"
}
function send() {
    document.getElementById("closeContact").style.marginBottom = "-1000px"
}