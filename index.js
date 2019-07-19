window.onload = () => {
    let start = document.getElementById("start")
    let audioTheme = document.getElementById("theme")
    let restartGame = document.getElementById("restart-button")
    let restartOut = document.getElementById("restart")

    start.onclick = () => {

        start.className = "out"
        Game.init()
        audioTheme.play()
    }


    restartGame.onclick = () => {

        restartOut.className = "res"
        Game.init()
        audioTheme.play()
    }
}
