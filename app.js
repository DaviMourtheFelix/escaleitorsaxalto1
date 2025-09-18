function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Escalas");
exibirTextoNaTela("p", "escala");
let tom = prompt("qual tom?");
    let A = "C";
    let asu = "C#";
    let B = "D";
    let C = "D#";
    let csu = "E";
    let D = "F";
    let dsu = "F#";
    let E = "G";
    let F = "G#"
    let fsu = "A";
    let G = "A#";
    let gsu = "B";

    
    if(tom == A){
        exibirTextoNaTela("p", "A B C# D E F# G# A")
    }
    if(tom == asu){
        exibirTextoNaTela("p", "A# C D D# F G A A#")
    }
    if(tom == B){
        exibirTextoNaTela("p", "B C# D# E F# G# A# B")
    }
    if(tom == C){
        exibirTextoNaTela("p", "C D E F G A B C")
    }
    if(tom == csu){
        exibirTextoNaTela("p", "C# D# F F# G# A# C C#")
    } if(tom == D){
        exibirTextoNaTela("p", "D E F# G A B C# D")
    } if(tom == dsu){
        exibirTextoNaTela("p", "D# F G G# A# C D D#")
    } if(tom == E){
        exibirTextoNaTela("p", "E F# G# A B C# D# E")
    } if(tom == F){
        exibirTextoNaTela("p", "F G A A# C D E F")
    } if(tom == fsu){
        exibirTextoNaTela("p", "F# G# A# C C# D# F F#")
    } if(tom == G){
        exibirTextoNaTela("p", "G A B C# D E F# G")
    } if(tom == gsu){
        exibirTextoNaTela("p", "G# A# C D D# F G G#")
    }