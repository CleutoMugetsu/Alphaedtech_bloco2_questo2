input.onButtonPressed(Button.A, function () {
    Jogador = Jogador + 1
    basic.showNumber(Jogador)
})
input.onButtonPressed(Button.AB, function () {
    Maquina = randint(0, 3)
    ApostaM = randint(0, 3)
    while (ApostaM == ApostaJ) {
        ApostaM += randint(0, 3)
    }
    Resultado = Jogador + Maquina
    basic.showNumber(Maquina)
    basic.pause(1000)
    basic.showNumber(ApostaM)
    basic.pause(5000)
    if (Resultado == ApostaJ) {
        basic.showString("J")
    } else {
        if (Resultado == ApostaM) {
            basic.showString("M")
        } else {
            basic.showString("N")
        }
    }
    basic.clearScreen()
    ApostaJ = 0
    Jogador = 0
    Maquina = 0
    Resultado = 0
})
input.onButtonPressed(Button.B, function () {
    ApostaJ = ApostaJ + 1
    basic.showNumber(ApostaJ)
})
let ApostaM = 0
let Resultado = 0
let Maquina = 0
let Jogador = 0
let ApostaJ = 0
ApostaJ = 0
Jogador = 0
Maquina = 0
Resultado = 0
