let C = 0
let F = 0
let K = 0
input.onGesture(Gesture.Shake, function () {
    C = input.temperature()
    basic.showNumber(C)
    basic.pause(1000)
    F = C * 1.8 + 32
    basic.showNumber(F)
    basic.pause(1000)
    K = C + 273.15
    basic.showNumber(K)
    basic.pause(1000)
})
basic.forever(function () {
	
})
