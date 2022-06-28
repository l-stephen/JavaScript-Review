let song = {
    title: "Gorilla",
    author: "Eminem"
}
let songs = ["Gorilla","Without Me"]
function loopThroughSong(songs){
    for(let i = 0;i<songs.length;i++){
        console.log(songs[i])
    }
    for(let s of songs){
        console.log(s)
    }
}
loopThroughSong(song)

function loopthroughObj(song){
    for(let key in obj){
        console.log(key)
        console.log(obj[key])
    }
}