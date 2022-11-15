
// para pegar o horario do sistema fazemmos assim

var agora = new Date()

var dia = agora.getDay()
var mes = agora.getMonth()
var ano = agora.getFullYear()
var hora =agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()

console.log(`Hoje é dia ${dia} de ${mes} de ${ano}, são ${hora}:${min}:${seg} `)