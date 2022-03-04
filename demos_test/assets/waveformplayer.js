

var playPause1 = document.querySelector("#playPause1");
var playPause2 = document.querySelector("#playPause2");
var playPause3 = document.querySelector("#playPause3");
var playPause4 = document.querySelector("#playPause4");

//Player 1
var wavesurfer = WaveSurfer.create({
    container: "#wave-1",
    responsive: true,
    waveColor: "#39AAB2",
    progressColor: "#141414",
    normalize: true,
    height: 50,
    scrollParent: false,
    autoCenter: true,
    cursorWidth: 0,
    fillParent: true,
    hideScrollbar: true
    //backend: 'MediaElement'
});

var wavesurfer2 = WaveSurfer.create({
    container: "#wave-2",
    responsive: true,
    waveColor: "#39AAB2",
    progressColor: "#141414",
    normalize: true,
    height: 50,
    scrollParent: false,
    cursorWidth: 0,
    autoCenter: true,
    fillParent: true,
    hideScrollbar: true
    //backend: 'MediaElement'
});

var wavesurfer3 = WaveSurfer.create({
    container: "#wave-3",
    responsive: true,
    waveColor: "violet",
    progressColor: "#141414",
    normalize: true,
    height: 50,
    scrollParent: false,
    cursorWidth: 0,
    autoCenter: true,
    fillParent: true,
    hideScrollbar: true
    //backend: 'MediaElement'
});

var wavesurfer4 = WaveSurfer.create({
    container: "#wave-4",
    responsive: true,
    waveColor: "violet",
    progressColor: "#141414",
    cursorWidth: 0,
    normalize: true,
    height: 50,
    scrollParent: false,
    autoCenter: true,
    fillParent: true,
    hideScrollbar: true
    //backend: 'MediaElement'
});


//load audio file
wavesurfer.load("./assets/audios/chilltrap.wav");
wavesurfer2.load("./assets/audios/pop.wav");
wavesurfer3.load("./assets/audios/hiphop.mp3");
wavesurfer4.load("./assets/audios/cinematic.mp3");




//play pause player
playPause1.addEventListener("click", function (e) {
    wavesurfer.playPause();
});
playPause2.addEventListener("click", function (e) {
    wavesurfer2.playPause();
});
playPause3.addEventListener("click", function (e) {
    wavesurfer3.playPause();
});
playPause4.addEventListener("click", function (e) {
    wavesurfer4.playPause();
});


//change play to pause button 1
wavesurfer.on("play", function (e) {

    playPause1.classList.remove("fi-sr-play");
    playPause1.classList.add("fi-sr-pause");


});


//change pause to play button 1
wavesurfer.on("pause", function (e) {

    playPause1.classList.add("fi-sr-play");
    playPause1.classList.remove("fi-sr-pause");


});

//change play to pause button 2
wavesurfer2.on("play", function (e) {

    playPause2.classList.remove("fi-sr-play");
    playPause2.classList.add("fi-sr-pause");


});


//change pause to play button 2
wavesurfer2.on("pause", function (e) {

    playPause2.classList.add("fi-sr-play");
    playPause2.classList.remove("fi-sr-pause");


});

//change play to pause button 3
wavesurfer3.on("play", function (e) {

    playPause3.classList.remove("fi-sr-play");
    playPause3.classList.add("fi-sr-pause");


});


//change pause to play button 3
wavesurfer3.on("pause", function (e) {

    playPause3.classList.add("fi-sr-play");
    playPause3.classList.remove("fi-sr-pause");


});

//change play to pause button 4
wavesurfer4.on("play", function (e) {

    playPause4.classList.remove("fi-sr-play");
    playPause4.classList.add("fi-sr-pause");


});


//change pause to play button 4
wavesurfer4.on("pause", function (e) {

    playPause4.classList.add("fi-sr-play");
    playPause4.classList.remove("fi-sr-pause");


});





