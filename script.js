
// variables assignin

let SongIndex = 0;
let SongPlay = new Audio("./songs/song1.mp3");
let MainPlay = document.getElementById('mainplay');
let PlayIcon = document.getElementById('palyicon');
let Sog = document.getElementById("sog");
let songItems = Array.from(document.getElementsByClassName("songItems"));
let ChangeSongName=document.getElementById("changeofsongname")

let song = [
    { SongName: "oh my baby - Thaman,Shilpa Rao", filePath: "./songs/song1.mp3", coverPath: "./covers/cover1.jpg"},
    { SongName: "Heeriye - feat. Arijit Singh", filePath: "./songs/song2.mp3", coverPath: "./covers/cover2.jpg" },
    { SongName: "Chitti Story - Anirudh Ravichander", filePath: "./songs/song3.mp3", coverPath: "./covers/cover3.jpg" },
    { SongName: "Hua Main - Raghav Chaitanya", filePath: "./songs/song4.mp3", coverPath: "./covers/cover4.webp" },
    { SongName: "Adiye - Kapil Kapilan", filePath: "./songs/song5.mp3", coverPath: "./covers/cover5.jpg" },
    { SongName: "Zara Zara - Bombay Jayashri", filePath: "./songs/song6.mp3", coverPath: "./covers/cover6.jpg" },
    { SongName: "Beliver - Jessy", filePath: "./songs/song7.mp3", coverPath: "./covers/cover7.jpeg" },
    { SongName: "Shape Of You - Ed Sheeran", filePath: "./songs/song8.mp3", coverPath: "./covers/cover8.jpg" },

]


songItems.forEach((element, i) => {
    element.getElementsByClassName("display")[0].src = song[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = song[i].SongName;
});





MainPlay.addEventListener("click", () => {
    if (SongPlay.paused || SongPlay.currentTime <= 0) {
        SongPlay.play();
        MainPlay.src = "./icons/play.png";
        MainPlay.style.cursor = "pointer";
        PlayIcon.style.opacity = "1"

    }
    else {
        SongPlay.pause();
        MainPlay.src = "https://clipart-library.com/images/6Tp5aga7c.png"
        MainPlay.style.cursor = "pointer";
        PlayIcon.style.opacity = "0";
    }

})
// listen to event
SongPlay.addEventListener("timeupdate", () => {
    console.log("timeupdate");
    //Update music bar

    calc = parseInt((SongPlay.currentTime / SongPlay.duration) * 100);
    Sog.value = calc;
})

Sog.addEventListener("change", () => {
    SongPlay.currentTime = Sog.value * SongPlay.duration / 100;
})


const changeAll = () => {
    Array.from(document.getElementsByClassName("my")).forEach((element) => {

        element.src = "./icons/pause black.jpg";
        element.src = "./icons/play black.svg";
        element.src = "https://w7.pngwing.com/pngs/9/907/png-transparent-video-sound-play-button-background-music-play-logo-angle-triangle-copyright.png";
        element.style.width = "40px";
        element.style.height = "40px";

    })
}

Array.from(document.getElementsByClassName("my")).forEach((element) => {
    element.addEventListener("click", (e) => {

        changeAll();
        SongIndex = parseInt(e.target.id);
        e.target.src = "./icons/play black.svg";
        e.target.src = "./icons/pause black.jpg";                                                                                                                 // changing of songs on play list
        SongPlay.src = `songs/song${SongIndex + 1}.mp3`;
        ChangeSongName.innerText=song[SongIndex].SongName;
        PlayIcon.style.opacity = "1"
        SongPlay.currentTime = 0;
        SongPlay.play();
        MainPlay.src = "./icons/play.png";

    })
})


document.getElementById("previous").addEventListener("click",()=>{
    if(SongIndex<=0){
        SongIndex=0;
    }
    else(
        SongIndex-=1
    )
    SongPlay.src = `songs/song${SongIndex + 1}.mp3`;
    ChangeSongName.innerText=song[SongIndex].SongName;
    PlayIcon.style.opacity = "1"
    SongPlay.currentTime = 0;
    SongPlay.play();
    MainPlay.src = "./icons/play.png";
})

document.getElementById("next").addEventListener("click",()=>{
    if(SongIndex>=8){
        SongIndex=0;
    }
    else(
        SongIndex+=1
    )
    SongPlay.src = `songs/song${SongIndex + 1}.mp3`;
    ChangeSongName.innerText=song[SongIndex].SongName;
    PlayIcon.style.opacity = "1"
    SongPlay.currentTime = 0;
    SongPlay.play();
    MainPlay.src = "./icons/play.png";
})




