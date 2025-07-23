basic.show_string("Ready!")
basic.pause(500)
basic.show_string("Let's go")

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(1000)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(2000)
    basic.show_icon(IconNames.GHOST)
    basic.pause(1000)
basic.forever(on_forever)
