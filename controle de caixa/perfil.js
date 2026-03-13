let jovens = JSON.parse(localStorage.getItem("jovens")) || []

let id = localStorage.getItem("perfilAtual")

let jovem = jovens.find(j=>j.id == id)

let perfil = document.getElementById("perfil")

perfil.innerHTML=`

<h2>${jovem.nome}</h2>

<p>📞 Telefone: ${jovem.telefone}</p>

<p>💰 Valor pago: R$ ${jovem.valor}</p>

`