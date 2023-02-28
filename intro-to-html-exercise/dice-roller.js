let array = ["dice-images/1.png", "dice-images/2.png", "dice-images/3.png", "dice-images/4.png", "dice-images/5.png", "dice-images/6.png"]

let diceImage;

window.onload = () => {
    console.log("Page loaded.")
    diceImage = document.getElementsByTagName("img")[0]
    diceImage.onclick = clickEvent
}

clickEvent = () => {
    console.log("Click event.")
    console.log(diceImage)
    diceImage.src = array[Math.floor(Math.random() * 6)] 
  Math.ceil(Math.random() *6)
   Math.floor(Math.random() *6)
}

// ALT answer from sillis- change .floor() to .ceil() line #29
/* window.onload = () => {
    console.log("Page loaded.")
    diceImage = document.getElementsByTagName("img")[0]
    diceImage.onclick = clickEvent
}

clickEvent = () => {
    console.log("Click event.")
    console.log(diceImage)
    diceImage.src = `dice-images/${Math.ceil(Math.random()*6)}.png`;
}
*/