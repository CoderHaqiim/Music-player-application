const homepage = document.querySelector("#home")
const next1 = document.querySelector("#next1")
const next2 = document.querySelector("#next2")
const scrollNext = document.querySelectorAll(".scrollnext")
const settingspage = document.querySelector("#settings")
const notificationpage = document.querySelector("#notifications")
const playerpage = document.querySelector("#player")
const playlistpage = document.querySelector("#playlists")
const navigation = document.querySelector("#navigation")
const back = document.querySelector("#back")
const notebtn = document.querySelector("#notificationbtn")
const navbtn = document.querySelectorAll(".navbtn")
const playingNow = document.querySelector("#playing")
const slider1 = document.querySelector("#firstSlides")
const slider2 = document.querySelector("#secondSlides")
const pages = document.querySelectorAll(".page")
const loading = document.querySelector("#loading")
const allicons = document.querySelectorAll(".allicon")
const logo = document.querySelector("#logo")
const activenav = document.querySelector(".navactive")
const logoImg = logo.children[0]
const aside = document.querySelector("#asidecontainer")
const aside2 = document.querySelector("#asidecontainer2")
const pointer = document.querySelector("#pointer")
const searchbtn = document.getElementById("searchbtn")
const searchdropdown = document.getElementById("searchdropdown")
const itemsearch = document.getElementById("itemsearch")
const addsongs = document.getElementById('addsongs')
const main = document.querySelector("#main")
let icon;
let searchdown = false;

scrollNext.forEach(btn =>{
    if(btn.id === "next1"){
        btn.onclick = () => slider2.scrollBy({left:145, top:0, behavior:"smooth"})
    }else{
        btn.onclick = () => slider1.scrollBy({left:145, top:0, behavior:"smooth"})
    }
})

window.addEventListener("load",()=>{
    loading.style.display = "none"
})

const slidesearchbar = () =>{
    if(innerWidth < 1000){
        !searchdown ? showdropdown() : hidedropdown()
    }else{
        return
    }
}

const showdropdown = () => {
    searchdropdown.style.display = "flex"
    searchdown = true
}
const hidedropdown = () =>{
    searchdropdown.style.display = "none"
    searchdown = false
}
itemsearch.onfocus = () =>{
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
    pages.forEach(page => {
        page.style.display="none"
    })
    if(innerWidth >= 1000){
        playerpage.style.display = "flex"
    }else{
        playerpage.style.display = 'none'
    }
}
function selectButtonIcon(btn){
    icon = btn.querySelector("img")
}
function changePage(){
    navbtn.forEach(btn=>{
        btn.onclick = (e) => {
            btn.append(activenav)
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

// window.onresize = () =>{
//     if(innerWidth >= 1000){
//             navbtn.forEach(btn=>{
//             aside.append(btn)
//         })
//         playerpage.style.display = 'flex'
//         aside2.append(playerpage)
//         navigation.style.display="none"
//     }else{
//         playerpage.style.display = "none"
//         main.append(playerpage)
//     }
// }



// if(innerWidth >= 1000){
//     navbtn.forEach(btn=>{
//         aside.append(btn)
//     })
//     playerpage.style.display = 'flex'
//     aside2.append(playerpage)
// }else{
//     main.append(playerpage)
// }

changePage()