input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    Pausa = 300
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    Pausa = 80
})
let Pausa = 0
let Pilota = game.createSprite(2, 2)
Pausa = 500
basic.forever(function () {
    Pilota.move(1)
    basic.pause(Pausa)
    Pilota.ifOnEdgeBounce()
})
