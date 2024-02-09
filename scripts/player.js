const playbtn = document.querySelector("#play-pause")
const playBtnOne = document.querySelector("#play-one")
const playbox = document.querySelector("#playbox")
const previousbtn = document.querySelector("#previous")
const nextbtn = document.querySelector("#next")
const repeat = document.querySelector("#repeat")
const shuffle = document.querySelector("#shuffle")
const playRange = document.querySelector ("#range")
const disc = document.querySelector("#disc")
const unith = document.querySelector("#unith")
const unit = document.querySelector("#unit")
const tens = document.querySelector("#tens")
const tenth = document.querySelector("#tenth")
const endPlay = document.querySelector("#endplay")
const song = document.querySelectorAll(".song")
const author = document.querySelectorAll(".author")
let endPlayVal = endPlay.innerText

let unithCounter = 0
let tenthCounter = 0
let unitCounter = 0
let tensCounter = 0
let currenttime = 0
let timeInterval
let rangeInterval
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
let repeatCounter = 0;
let songIndex = 0
const playingSong = 'hello'


song.forEach((song)=>{
    song.innerHTML =`<strong>${songs[0].name}</strong>`
})
author.forEach((author)=>{
    author.innerText = `${songs[0].author}`
})


const musicPlayer = {
    playing: false,
    play:function(){

        disc.style.animationName = `spin`
        playbox.play()
        setTimeout(()=>{
            let playtime = Number(playbox.duration/60).toFixed(2)
            endPlay.innerText = playtime
            this.trackPlay(playtime)
        },200)
        this.playing = true
        this.countPlaytime()
        playbtn.children[0].src = `assets/svgs/pause.svg`
        playBtnOne.children[0].src = `assets/svgs/pause.svg`
    },
    pause: function(){
        disc.style.animationName = null
        playbox.pause()
        this.playing = false
        playbtn.children[0].src = `assets/svgs/play.svg`
        playBtnOne.children[0].src = `assets/svgs/play.svg`
        this.countPlaytime()
        clearInterval(rangeInterval)
    },
    next: function (){
        clearInterval(timeInterval)
        resetAll()
        if(songIndex < allSongs){
            songIndex++
        }else{
            songIndex = 0
        }
        playbox.src = `assets/songs/${songs[songIndex].file}`
        song.forEach(song => {
            song.innerHTML= `<strong>${songs[songIndex].name}</strong>`
        })
        author.forEach(author =>{
            author.innerHTML = `${songs[songIndex].author}`
        })
        if(this.playing){
            this.play()
        }
    },
    previous: function(){
        clearInterval(timeInterval)
        resetAll()
        if(songIndex > 0 ){
            songIndex--
        }else{
            songIndex = 0
        }
        playbox.src = `assets/songs/${songs[songIndex].file}`
        song.forEach(song => {
            song.innerHTML = `<strong>${songs[songIndex].name}</strong>`
        })
        author.forEach(author =>{
            author.innerHTML = `${songs[songIndex].author}`
        })
        if(this.playing){
            this.play()
        }
    },
    setRepeat: function(){
        repeatCounter < 2 ? (repeatCounter++): (repeatCounter = 0)
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
    countPlaytime: function(){
        if(this.playing){
            timeInterval = setInterval(()=>{
                if(unithCounter < 9){
                    unithCounter ++;
                }else{
                    unithCounter = 0
                    if(tenthCounter < 5){
                        tenthCounter++
                    }else{
                        tenthCounter = 0
                        if( unitCounter < 9){
                            unitCounter++
                        }else{
                            unitCounter = 0
                            tensCounter ++
                        }
                        unit.innerText = unitCounter
                    }
                    tenth.innerText = tenthCounter
                }
                unith.innerText = unithCounter
            },1000)
        }else{
            clearInterval(timeInterval)
        }
    },
    volume:playbox.volume,

    mode:{
        repeat: null,
        shuffle:false
    },
    trackPlay: function(playtime){
        playRange.max = playbox.duration
        if(this.playing){
            rangeInterval = setInterval(() => {
                currenttime = playbox.currentTime
                playRange.value = currenttime
            },3000);
        }else{
            playRange.value = currenttime
            clearInterval(rangeInterval)
        }
    } 
}




function resetAll(){
    unithCounter = -1
    tenth.innerText = 0
    unit.innerText = 0
    tens.innerText = 0
    tenthCounter = 0
    unitCounter = 0
    tensCounter = 0
}
playRange.onchange = () => {
    playbox.currentTime = playRange.value
    
}
playRange.onmousedown = ()=>{
    
}


nextbtn.onclick = () => musicPlayer.next()
previousbtn.onclick = () => musicPlayer.previous()
playbtn.onclick = () => !musicPlayer.playing? musicPlayer.play(): musicPlayer.pause()
playBtnOne.onclick = () => !musicPlayer.playing? musicPlayer.play(): musicPlayer.pause()
previous.onclick = () => musicPlayer.previous()     
next.onclick = () => musicPlayer.next()
repeat.onclick = () => musicPlayer.setRepeat()
shuffle.onclick = () => musicPlayer.setShuffle()


playbox.onended = () => {
    const randomSong = Math.round(Math.random() * allSongs + 1)
    if(musicPlayer.mode.shuffle){
        playbox.src = `assets/songs/${songs[randomSong].file}`
        musicPlayer.play()
    }else{
        switch(musicPlayer.mode.repeat){
            case "repeatAll" : musicPlayer.next(); break;
            case "repeatOne" : musicPlayer.play();break;
            case "repeatOff" : musicPlayer.playing = false; break;
            default : musicPlayer.next()
        }
    }
}