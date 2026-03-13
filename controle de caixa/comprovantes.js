let movimentos = JSON.parse(localStorage.getItem("movimentos")) || []

let lista = document.getElementById("listaComprovantes")
let pesquisa = document.getElementById("pesquisaData")

function renderizar(){

lista.innerHTML=""

let filtro = pesquisa.value

let agrupados = {}

movimentos.forEach(m=>{

if(!m.comprovante) return

if(filtro && m.data !== filtro) return

if(!agrupados[m.data]){

agrupados[m.data]=[]

}

agrupados[m.data].push(m)

})


for(let data in agrupados){

lista.innerHTML+=`<h2>📅 ${data}</h2>`

agrupados[data].forEach(m=>{

lista.innerHTML+=`

<div class="arquivo">

<p>${m.descricao}</p>

<img src="${m.comprovante}" class="fotoComprovante">

</div>

`

})

}

}

pesquisa.addEventListener("input",renderizar)

renderizar()