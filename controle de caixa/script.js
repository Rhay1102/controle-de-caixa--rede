let movimentos = JSON.parse(localStorage.getItem("movimentos")) || []

let comprovanteBase64=""

document.getElementById("comprovante").addEventListener("change",function(){

const file = this.files[0]

const reader = new FileReader()

reader.onload = function(){

comprovanteBase64 = reader.result

}

reader.readAsDataURL(file)

})


function salvar(){

let data = document.getElementById("data").value
let descricao = document.getElementById("descricao").value
let valor = document.getElementById("valor").value
let tipo = document.getElementById("tipo").value

let movimento = {

data,
descricao,
valor,
tipo,
comprovante:comprovanteBase64

}

movimentos.push(movimento)

localStorage.setItem("movimentos",JSON.stringify(movimentos))

renderizar()

}


function renderizar(){

let historico = document.getElementById("historico")

historico.innerHTML=""

movimentos.forEach(m=>{

historico.innerHTML+=`

<div>

${m.data} - ${m.descricao}<br>
${m.tipo} - R$ ${m.valor}

</div>

`

})

}

renderizar()


let jovens = JSON.parse(localStorage.getItem("jovens")) || []

function adicionarJovem(){

let nome = document.getElementById("nomeJovem").value
let valor = document.getElementById("valorPago").value
let telefone = document.getElementById("telefone").value

let jovem = {

id:Date.now(),
nome,
valor,
telefone

}

jovens.push(jovem)

localStorage.setItem("jovens",JSON.stringify(jovens))

renderizarJovens()

}


function renderizarJovens(){

let lista = document.getElementById("listaJovens")

lista.innerHTML=""

jovens.forEach(j=>{

lista.innerHTML+=`

<div class="cardJovem">

<strong>${j.nome}</strong><br>

Pago: R$ ${j.valor}

<button onclick="verPerfil(${j.id})">Ver perfil</button>

</div>

`

})

}

function verPerfil(id){

localStorage.setItem("perfilAtual",id)

window.location.href="perfil.html"

}

renderizarJovens()