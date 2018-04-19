// Trocar o símbolo
let trocarJogada = (jogada) => {
    if(jogada == 'X') {
        $('#jogador').text('O')
    } else {
        $('#jogador').text('X')
    }
}

// Verificar o Vencedor
let verificarVencedor = () => {
    vencedorHorizontal()
    vencedorVertical()
    vencedorDiagonal()
}

// Horizontais
let vencedorHorizontal = () => {
    let combinacao = ''
    
    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 3; j++) {
            combinacao += $(`#${i}${j}`).text()
            
            if(combinacao == 'undefinedX') {
                combinacao = 'X'
            } else if(combinacao == 'XXX') {
                $('#resultado').text('O Jogador X Ganhou!!!')
            } else if(combinacao == 'OOO') {
                $('#resultado').text('O Jogador O Ganhou!!!')
            }  
        }

        combinacao = ''
    }
}

// Verticais
let vencedorVertical = () => {
    let combinacao = ''

    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 3; j++) {
            combinacao += $(`#${j}${i}`).text()
            
            if(combinacao == 'undefinedX') {
                combinacao = 'X'
            } else if(combinacao == 'XXX') {
                $('#resultado').text('O Jogador X Ganhou!!!')
            } else if(combinacao == 'OOO') {
                $('#resultado').text('O Jogador O Ganhou!!!')
            }         
        }

        combinacao = ''
    }
}

// Diagonais
let vencedorDiagonal = () => {
    let combinacao = ''
    
    // Diagonal Principal
    combinacao = $('#11').text() + $('#22').text() + $('#33').text() 
    
    if(combinacao == 'XXX') {
        $('#resultado').text('O Jogador X Ganhou!!!')
    } else if(combinacao == 'OOO') {
        $('#resultado').text('O Jogador O Ganhou!!!')
    } 

    // Diagonal Secundária
    combinacao = $('#13').text() + $('#22').text() + $('#31').text() 
    
    if(combinacao == 'XXX') {
        $('#resultado').text('O Jogador X Ganhou!!!')
    } else if(combinacao == 'OOO') {
        $('#resultado').text('O Jogador O Ganhou!!!')
    } 
}
