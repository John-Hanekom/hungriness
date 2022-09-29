/**
 * Created by: John Hanekom
 * 
 * Date: September 29th, 2022
 * 
 * This program is a demonstration program for changing variables.
 */
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
