window.onload = () => { // <-- Wait for the page to finish loading, then run this function
    console.log("Page loaded.")
    // Find the first <img> element on the page, and call it coinImage:
    let coinImage = document.getElementsByTagName("img")[0]
    console.log(coinImage)
    // coinImage.src = "tails.jpeg"
    coinImage.src = Math.round(Math.random()) ? "heads.jpeg" : "tails.jpeg"
}
