let diceImage;

window.onload = () => {
    console.log("Page loaded.")
    diceImage = document.getElementsByTagName("img")[0]
    diceImage.onclick = clickEvent
}

clickEvent = () => {
    console.log("Click event.")
    console.log(diceImage)
}