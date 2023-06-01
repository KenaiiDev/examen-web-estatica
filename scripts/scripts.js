/*
LÓGICA QUE SE ME OCURRIÓ PARA EL CYCLING BANNER
const hero = document.querySelector('.hero');
const arrayOfImages = [];


arrayOfImages.push('https://t3.ftcdn.net/jpg/02/26/46/28/360_F_226462884_HCy6r24ne2E4fIyhVcGCT3NYZm4JuT91.jpg')
arrayOfImages.push('https://wallpaperaccess.com/full/1505299.jpg');

setInterval(() => {
    for(let i = 0; i < arrayOfImages.length ; i++){
        const img = document.createElement('img');
        img.src = arrayOfImages[i];
        hero.appendChild(img);
    }
    //arrayOfImages.forEach(element => hero.appendChild(element));
}, 5000);

*/

/*LÓGICA DEL CYCLING BANNER*/ 
let index = 0;
const arrayOfImages = []
arrayOfImages.push('https://t3.ftcdn.net/jpg/02/26/46/28/360_F_226462884_HCy6r24ne2E4fIyhVcGCT3NYZm4JuT91.jpg')
arrayOfImages.push('https://wallpaperaccess.com/full/1505299.jpg');
arrayOfImages.push('https://media.revistagq.com/photos/62ff66d3993ee3b07361d71b/16:9/pass/https___www.patreon.jpg')
arrayOfImages.push('https://i.ytimg.com/vi/3pdUHnJ5nBo/maxresdefault.jpg')
arrayOfImages.push('https://m.media-amazon.com/images/M/MV5BZTUwYmE1NTctN2FmZi00YjJlLWI3NTYtZjc3NDc3MWIyOTI5XkEyXkFqcGdeQXVyMTExNjQ1NDk1._V1_.jpg')

function rotate(){
    index++;
    if(index === arrayOfImages.length){
        index = 0;
    }
    document.getElementById('creepybanner').src= arrayOfImages[index];

}

setInterval(rotate, 3*1000);

const audioPlayer = document.getElementById('audio-player');
const musicButton = document.querySelector('.music-button');

musicButton.addEventListener('click', () =>{
    audioPlayer.classList.toggle('visible');
})

