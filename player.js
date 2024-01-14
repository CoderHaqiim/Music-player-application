const playingNow = document.querySelector("#playing")
const home = document.querySelector("#home")
const playerpage = document.querySelector("#player")

const changePage = (item,page,page2) =>{
    item.onclick =()=>{
        page.style.display = "flex";
        page2.style.display = "none";
    }
}
changePage(playingNow,playerpage,home)
