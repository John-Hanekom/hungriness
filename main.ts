let hungriness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungriness = hungriness + 1
        basic.showNumber(hungriness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungriness = 0
        basic.showNumber(hungriness)
    }
})
