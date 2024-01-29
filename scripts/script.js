const homepage = document.querySelector("#home")
const settingspage = document.querySelector("#settings")
const notificationpage = document.querySelector("#notifications")
const playerpage = document.querySelector("#player")
const playlistpage = document.querySelector("#playlists")
const navigation = document.querySelector("#navigation")
const back = document.querySelector("#back")
const notebtn = document.querySelector("#notificationbtn")
const navbtn = document.querySelectorAll(".navbtn")
const playingNow = document.querySelector("#playing")
const pages = document.querySelectorAll(".page")
const allicons = document.querySelectorAll(".allicon")
const logo = document.querySelector("#logo")
const pointer = document.querySelector("#pointer")
const searchbtn = document.getElementById("searchbtn")
const searchdropdown = document.getElementById("searchdropdown")
const itemsearch = document.getElementById("itemsearch")
const addsongs = document.getElementById('addsongs')
let icon;
let searchdown = false;

console.log(addsongs)

itemsearch.onfocus = () =>{
    console.log(this)
    itemsearch.style.outlineColor = "var(--accent)"
    itemsearch.style.outline = "solid"
    itemsearch.style.caretColor= "var(--accent)"
    itemsearch.style.border= "none"
}
playingNow.onclick = () =>{
    home.style.display="none"
    playerpage.style.display="flex"
    navigation.style.display="none"
}
const slidesearchbar = () =>{
    !searchdown ? showdropdown() : hidedropdown()
}

const showdropdown = () => {
    searchdropdown.style.display = "flex"
    searchdown = true
}
const hidedropdown = () =>{
    searchdropdown.style.display = "none"
    searchdown = false
}
searchbtn.onclick = () => slidesearchbar();
logo.onclick=()=>{
    hidePages()
    home.style.display="flex"
    playerpage.style.display="none"
    navigation.style.display="flex"
    removeAllIconColor()
    allicons[0].src="assets/svgs/home_bold2.svg"
}

const removePointer=()=>{
    pointer.style.display ="none"
}
function showPage(page){
    page.style.display = "flex"
}
function changeIconColor(path){
    icon.src =`assets/svgs/${path}.svg`
}
function removeAllIconColor(){
    for (let i = 0; i < allicons.length; i++) {
        const setIcon = (path)=>{
            allicons[i].src = `assets/svgs/${path}.svg`
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
                case "notificationbtn":{showPage(notificationpage);changeIconColor("notification_bold2");removePointer()}; break;
                case "addbtn":{showPage(addsongs);changeIconColor("add_bold2")}; break;
                case "playlistbtn":{showPage(playlistpage);changeIconColor("playlist_bold2")}; break;
                case "settingsbtn": {showPage(settingspage);changeIconColor("setting_bold2")}; break;
                default: showPage(homepage); break;
            }
        }
    })
}
changePage()