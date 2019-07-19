window.onload = () => {
    let start = document.getElementById("start")
    let audioTheme = document.getElementById("theme")
    let restartGame = document.getElementById("restart-button")
    let controlsOut = document.getElementById("controls")

    start.onclick = () => {

        start.className = "out"
        controlsOut.className = "out"
        Game.init()
        audioTheme.play()
    }


    // restartGame.onclick = () => {

    //     restartOut.className = "res"
    //     Game.init()
    //     audioTheme.play()
    // }
}
