const buttonPlayPause = document.getElementById("play-pause");
const buttonNext = document.getElementById("next");
const buttonBefore = document.getElementById("before");
const trackName = document.getElementById("section");
const audioSection = document.getElementById("audio-section");

const quantitySection = 10;/** total de áudios */
let isPlaying = false;/** controla áudio poderiar 0 e 1*/
let currentSection = 1; /** controla seção/capítulo */

function playTrack(){
    buttonPlayPause.classList.remove("bi-play-circle-fill")
    buttonPlayPause.classList.add("bi-pause-circle-fill")
    audioSection.play();
    isPlaying = true;
}

function pauseTrack(){
    buttonPlayPause.classList.add('bi-play-circle-fill')
    buttonPlayPause.classList.remove('bi-pause-circle-fill')
    audioSection.pause();
    isPlaying = false;
}

function playingOrPause(){
    if(isPlaying === true){
        pauseTrack();
    } else{
        playTrack();
    }
}

function swapTrackName() {
    //mapeando
    const sectionMap ={
        1:"I a V",
        2:"VI a X",
        3:"XI a XV",
        4:"XVI a XX",
        5:"XXI a XXV",
        6:"XXVI a XXX",
        7:"XXXI a XXXV",
        8:"XXXVI a XL",
        9:"XLI a XLV",
        10:"XLVI a L"
    };
    //verifica intervalo]
    const chapter = sectionMap[currentSection] || "XLVI a L";
    trackName.innerText = "Seção " + currentSection + " - Capítulos " + chapter;

    /*trackName.innerText = 'Section ' + currentSection*/
    /*if (currentSection ===1) {
        trackName.innerText = "Seção " + currentSection + "- Capítulos I a V"  
    } else if (currentSection ===2) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos VI a X" 
    } else if (currentSection ===3) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XI a XV" 
    } else if (currentSection ===4) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XVI a XX" 
    } else if (currentSection ===5) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XXI a XXV" 
    } else if (currentSection ===6) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XXVI a XXX" 
    } else if (currentSection ===7) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XXXI a XXXV" 
    } else if (currentSection ===8) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XXXVI a XL" 
    } else if (currentSection ===9) {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XLI a XLV" 
    }
    else {
        trackName.innerText = "Seção " + currentSection + " - Capítulos XLVI a L" 
    }*/
}

function nextTrack(){
    if (currentSection < quantitySection) {
        currentSection += 1;
    } else{
        currentSection = 1;
    }

    audioSection.src="./books/dom-casmurro/" + currentSection + '.mp3'
    swapTrackName();
    playTrack(); /** padrão avançar e já tocar*/ 
} 

function beforeTrack(){
    if (currentSection === 1) {
        currentSection = quantitySection;
    } else{
        currentSection = currentSection - 1
    }

    audioSection.src="./books/dom-casmurro/" + currentSection + '.mp3'
    trackName.innerText = "Capítulo "  + currentSection
    swapTrackName();
    playTrack(); /** padrão retroceder e já tocar*/ 
} 

buttonPlayPause.addEventListener('click', playingOrPause);
buttonNext.addEventListener('click', nextTrack);
buttonBefore.addEventListener('click', beforeTrack);
audioSection.addEventListener("ended", nextTrack);