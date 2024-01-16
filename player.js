const playbtn = document.querySelector("#play-pause")
const playbox = document.querySelector("#playbox")

const musicPlayer = {
    play:()=>playbox.play(),
    pause:()=>playbox.pause(),
    volume:playbox.volume,
    next:false,
    previous:false,
    playing:false,
    song:{
        author:"",
        duration:"",
        image:"",
        title:""
    },
    mode:{
        repeat:false,
        suffle:false,
        repeatOne:false
    }
}


const setPlaying = () =>{
    musicPlayer.play()
    musicPlayer.playing = true
}
const setPause = () =>{
    musicPlayer.pause()
    musicPlayer.playing = false
}

playbtn.onclick=()=> {
    !musicPlayer.playing? setPlaying(): setPause()
}