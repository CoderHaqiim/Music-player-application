const playbtn = document.querySelector("#play-pause")
const playBtnOne = document.querySelector("#play-one")
const playbox = document.querySelector("#playbox")
const previousbtn = document.querySelector("#previous")
const nextbtn = document.querySelector("#next")
const repeat = document.querySelector("#repeat")
const shuffle = document.querySelector("#shuffle")
let repeatCounter = 0;
const songs = [
    {
        name: `doin' just fine`,
        author: `Boys to men`,
        file: `doin' just fine.mp3`,
        lenght:3
    },
    {
        name: `waters run dry`,
        author: `Boys to men`,
        file: `waters run dry.mp3`,
        length:3
    },
    {
        name: `7 years old`,
        author: `Lukas Graham`,
        file: `7 years old.mp3`,
        length:3
    },
    {
        name: `can you feel the love tonight`,
        author: `Elton John`,
        file: `can you feel the love tonight.mp3`,
        length:3,
    },
    {
        name: `goodbye to yesterday`,
        author: `Boys to men`,
        file: `goodbye to yesterday.mp3`,
        length:3,
    },
    {
        name: `I adore you`,
        author: `Miley Cyrus`,
        file: `I adore you.mp3`,
        length:3,
    },
    {
        name: `heaven`,
        author: `Bryan Adams`,
        file: `heaven.mp3`,
        length:3,
    }
    
]

const allSongs = songs.length - 1
let songIndex = 0
const playingSong = 'hello'




const musicPlayer = {
    playing: false,
    play:function(){
        playbox.play()
        this.playing = true
        playbtn.children[0].src = `assets/svgs/pause.svg`
        playBtnOne.children[0].src = `assets/svgs/pause.svg`
    },
    pause: function(){
        playbox.pause()
        this.playing = false
        playbtn.children[0].src = `assets/svgs/play.svg`
        playBtnOne.children[0].src = `assets/svgs/play.svg`
    },
    setRepeat: function(){
        switch(repeatCounter){
            case 0 : (() => {
                this.mode.repeat = "repeatAll"
                repeat.children[0].src = "assets/svgs/repeat-square2.svg"
            })();break;
            case 1 : (()=>{
                this.mode.repeat = "repeatOne"
                repeat.children[0].src = "assets/svgs/repeatone.svg"
            })();break;
            case 2 : (()=>{
                this.mode.repeat = "repeatOff"
                repeat.children[0].src = "assets/svgs/repeat-square.svg"
            })();break;
            default:(()=>{
                this.mode.repeat = "repeatAll"
                repeat.children[0].src = "assets/svgs/repeat-square2.svg"
            })()
        }
    },
    setShuffle: function(){
        !this.mode.shuffle ?
            (()=>{
                this.mode.shuffle = true
                shuffle.children[0].src = "assets/svgs/shuffle2.svg"
            })() : 
            (()=>{
                this.mode.shuffle = false
                shuffle.children[0].src = "assets/svgs/shuffle.svg"
            })()
    },
    next: function (){
        if(songIndex < allSongs){
            songIndex++
        }else{
            songIndex = 0
        }
        playbox.src = `assets/songs/${songs[songIndex].file}`
        if(this.playing){
            this.play()
        }
    },
    previous: function(){
        if(songIndex > 0 ){
            songIndex--
        }else{
            songIndex = 0
        }
        playbox.src = `assets/songs/${songs[songIndex].file}`
        if(!this.playing){
            this.play()
        }
    },
    volume:playbox.volume,
    song:{
        author:"",
        duration:"",
        image:"",
        title:""
    },
    mode:{
        repeat: null,
        shuffle:false
    }
}




nextbtn.onclick = () =>{
    musicPlayer.next()
}
previousbtn.onclick = () => musicPlayer.previous()

const setPlaying = () =>{
    musicPlayer.play()
}
const setPause = () =>{
    musicPlayer.pause()
}

playbtn.onclick = () => !musicPlayer.playing? setPlaying(): setPause()
playBtnOne.onclick = () => !musicPlayer.playing? setPlaying(): setPause()
previous.onclick = () => musicPlayer.previous()     
next.onclick = () => musicPlayer.next()

repeat.onclick = () => {
    repeatCounter < 2 ? (repeatCounter++): (repeatCounter = 0)
    musicPlayer.setRepeat()
}
shuffle.onclick = () => musicPlayer.setShuffle()


playbox.onended = () => {
    switch(musicPlayer.mode.repeat){
        case "repeatAll" : musicPlayer.next(); break;
        case "repeatOne" : musicPlayer.play();break;
        case "repeatOff" : musicPlayer.playing = false; break;
        default : musicPlayer.next()
    }
}