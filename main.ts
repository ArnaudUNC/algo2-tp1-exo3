let yInversé = 0
let x = 0
let loopsAvantNewPlot = 0
basic.forever(function () {
    if (loopsAvantNewPlot <= 0) {
        loopsAvantNewPlot = 3
        x = randint(0, 4)
        led.plotBrightness(x, 0, 255)
    }
    basic.pause(200)
    loopsAvantNewPlot += -1
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            yInversé = 4 - y
            if (led.pointBrightness(x, yInversé) == 255) {
                led.plotBrightness(x, yInversé + 1, 255)
                led.plotBrightness(x, yInversé, 170)
            } else if (led.pointBrightness(x, yInversé) == 170) {
                led.plotBrightness(x, yInversé, 85)
            } else if (led.pointBrightness(x, yInversé) == 85) {
                led.unplot(x, yInversé)
            }
        }
    }
    basic.pause(200)
})
