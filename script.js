const homepage = document.querySelector("#home")
const settingspage = document.querySelector("#settings")
const navigationpage = document.querySelector("#navigation")
const playerpage = document.querySelector("#player")
const playlistpage = document.querySelector("#playlist")
const back = document.querySelector("#back")
const notifications = document.querySelector("#notifications")
const notebtn = document.querySelector("#notificationbtn")
const navbtn = document.querySelectorAll(".navbtn")
const playingNow = document.querySelector("#playing")

playingNow.onclick=()=>{
    home.style.display="none"
    playerpage.style.display="flex"
    navigation.style.display="none"
}
back.onclick=()=>{
    home.style.display="flex"
    playerpage.style.display="none"
    navigation.style.display="flex"
}

function changePage(){
    navbtn.forEach(btn=>{
        btn.onclick=()=>{
            
        }
    })
}
