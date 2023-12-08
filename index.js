let i=0;
let imagini=['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
let timp=3000;


function setImage(image) {
    document.getElementById("img-slideshow").style.backgroundImage = `url("${image}")`;
}

function buttonClick() {
    setImage(imagini[i]) ;
    if(i<imagini.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("buttonClick()",timp);

}

window.addEventListener('load', function() {
    setImage(imagini[i]) ;
    i++;
})