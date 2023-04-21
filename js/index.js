let user
let pc


function startGame() {

    let rockChoice = document.getElementById('rock__id')
    rockChoice.addEventListener('click', rock)
    let scissorChoice = document.getElementById('scissor__id')
    scissorChoice.addEventListener('click', scissor)
    let paperChoice = document.getElementById('paper__id')
    paperChoice.addEventListener('click', paper)



}

function rock() {
    user = 1
    pcChoice()
}

function scissor() {
    user = 2
    pcChoice()

}

function paper() {
    user = 3
    pcChoice()

}




function pcChoice() {

    let pcId = document.getElementById('pc__id--p')
    pc = random(1, 3)

    if (pc == 1) {
        pcId.innerHTML = "🪨"
    }
    else if (pc == 2) [
        pcId.innerHTML = "✂️"
    ]
    else {
        pcId.innerHTML = "📃"
    }

    combat()

}

function combat() {

    let result = document.getElementById('result__id--p')

    if (user == pc) {
        result.innerHTML = "Empataste!"
    }
 else if (user == 1 && pc == 2 || user == 2 && pc == 3 || user == 3 && pc == 1) {
    result.innerHTML = "Ganaste!" 

 }
else {
    result.innerHTML = "Perdiste :("
}
}







function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}






window.addEventListener('load', startGame)




