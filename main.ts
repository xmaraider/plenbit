input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 30; index++) {
        plenbit.servoWrite(3, 90)
        plenbit.servoWrite(7, 90)
        plenbit.servoWrite(5, 40)
        plenbit.servoWrite(1, 40)
        plenbit.servoWrite(4, 0)
        plenbit.servoWrite(0, 30)
        basic.pause(500)
        plenbit.servoWrite(5, 30)
        basic.pause(500)
        plenbit.servoWrite(3, 40)
        plenbit.servoWrite(7, 40)
        plenbit.servoWrite(5, 80)
        plenbit.servoWrite(1, 80)
        plenbit.servoWrite(4, 110)
        plenbit.servoWrite(0, 120)
        basic.pause(500)
        plenbit.servoWrite(1, 90)
        basic.pause(500)
    }
    plenbit.servoInitialSet()
})
basic.showIcon(IconNames.Heart)
plenbit.servoInitialSet()
basic.forever(function () {
	
})
