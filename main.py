"""

Created by: John Hanekom

Date: September 29th, 2022

This python program is a demonstration program for changing variables.

"""
hungriness = 0

def on_forever():
    global hungriness
    if input.button_is_pressed(Button.A):
        hungriness = hungriness + 1
        basic.show_number(hungriness)
    elif input.button_is_pressed(Button.B):
        hungriness = 0
        basic.show_number(hungriness)
basic.forever(on_forever)
