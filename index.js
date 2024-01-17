var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rihtRoll()
{
    bruna.style = "display: none;"
    samantha.style = "display: flex; margin: 0px 40px 0px 0px"
    setaDireita.style = "display: none;"
    setaEsquerda.style = "display: flex; margin: 68px 20px 0px 30px"
}

function leftRoll()
{
    bruna.style = "display: flex;"
    samantha.style = "display: none;"
    setaDireita.style = "display: flex;"
    setaEsquerda.style = "display: none;"
}