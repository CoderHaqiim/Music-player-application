const homepage = document.querySelector("#home")
const settingspage = document.querySelector("#settings")
const notificationpage = document.querySelector("#notifications")
const playerpage = document.querySelector("#player")
const playlistpage = document.querySelector("#playlist")
const navigation = document.querySelector("#navigation")
const back = document.querySelector("#back")
const notebtn = document.querySelector("#notificationbtn")
const navbtn = document.querySelectorAll(".navbtn")
const playingNow = document.querySelector("#playing")
const pages = document.querySelectorAll(".page")
const allicons = document.querySelectorAll(".allicon")
const logo = document.querySelector("#logo")
let icon;

playingNow.onclick=()=>{
    home.style.display="none"
    playerpage.style.display="flex"
    navigation.style.display="none"
}
logo.onclick=()=>{
    hidePages()
    home.style.display="flex"
    playerpage.style.display="none"
    navigation.style.display="flex"
    removeAllIconColor()
    allicons[0].src="assets/home_bold2.svg"
}
function showPage(page){
    page.style.display = "flex"
}
function changeIconColor(path){
    icon.src =`assets/${path}.svg`
}
function removeAllIconColor(){
    for (let i = 0; i < allicons.length; i++) {
        const setIcon = (path)=>{
            allicons[i].src = `assets/${path}.svg`
        }
        switch(i){
            case 0: setIcon("home_bold");break;
            case 1: setIcon("playlist_bold");break;
            case 2: setIcon("add_bold");break;
            case 3: setIcon("notification_bold");break;
            case 4: setIcon("setting_bold");break;
            default: setIcon("home_bold");break;
        }
    }
}
function hidePages(){
    pages.forEach(page=>{
        page.style.display="none"
    })
}
function selectButtonIcon(btn){
    icon = btn.querySelector("img")
}
function changePage(){
    navbtn.forEach(btn=>{
        btn.onclick=(e)=>{
            removeAllIconColor()
            selectButtonIcon(btn)
            hidePages()
             const targetPage = e.target.id

            switch(targetPage){
                case "homebtn": {showPage(homepage);changeIconColor("home_bold2")}; break;
                case "notificationbtn":{showPage(notificationpage);changeIconColor("notification_bold2")}; break;
                case "addbtn":{showPage(homepage);changeIconColor("add_bold2")}; break;
                case "playlistbtn":{showPage(homepage);changeIconColor("playlist_bold2")}; break;
                case "settingsbtn": {showPage(settingspage);changeIconColor("setting_bold2")}; break;
                default: showPage(homepage); break;
            }
        }
    })
}
changePage()