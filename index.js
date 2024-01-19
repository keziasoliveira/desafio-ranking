let saldo = (86, 33)
let name = ("Kezia")
let nivel = " "

function sal(wins, defeats){
    let sal = wins - defeats
    return sal
}

if (saldo <= 10) {
  nivel = "Ferro"
} else if (saldo <= 20) {
  nivel = "Bronze"
} else if (saldo <= 50) {
  nivel = "Prata"
} else if (saldo <= 80) {
  nivel = "Ouro"
} else if (saldo <= 8000) {
  nivel = "Diamante"
} else if (saldo <= 90) {
  nivel = "Lendario"
} else if (saldo <= 101) {
  nivel = "Imortal"
}


console.log("A heroína "+ name +" tem saldo de "+ saldo + " vitórias e nivel de " + nivel )