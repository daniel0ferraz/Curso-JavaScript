let now = new Date()
let hour = now.getHours()
let tempo 

if (5 <= hour >= 12) {
  tempo = "dia"
} else if (13 <= hour >= 18) {
 tempo = "tarde"
} else {
 tempo = "noite"
}

console.log(`${tempo}`)