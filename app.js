
const botao1 = document.querySelector("#b1");
const botao2 = document.querySelector("#b2");
const botao3 = document.querySelector("#b3");
const fechamento = document.querySelector("#pedido");
let total = 0;
const totalEl = document.querySelector("#totalValor");
const limparPedido = document.querySelector("#limparPedido");
const finalizar = document.querySelector("#finalizar");
const mensagemCliente = document.querySelector("#mensagemCliente");
const nomeCliente= document.querySelector("#nomeCliente");

function addItemAtualizaValor(nome, valor){
   const li= document.createElement("li")
  li.textContent = nome;
  fechamento.appendChild(li)

  total= total+ valor;
  totalEl.textContent = total.toFixed(2);
  if(total > 30){
    totalEl.classList.add("caro");
  }else{
    totalEl.classList.remove("caro");
  }
}

botao1.addEventListener("click", () =>{
  addItemAtualizaValor("CAfé Arabica", 7)
})

botao2.addEventListener("click" , () =>{
 addItemAtualizaValor("Capuccino", 10)
})

botao3.addEventListener("click" , () =>{
 addItemAtualizaValor("Café com Leite", 6)
})

limparPedido.addEventListener("click", ()=>{
  fechamento.innerHTML = ""
  total= 0;
  totalEl.textContent = total.toFixed(2)
  totalEl.classList.remove("caro");
  mensagemCliente.textContent = "";

})

finalizar.addEventListener("click" , ()=>{
  if(nomeCliente.value == ""){
    mensagemCliente.textContent = "Digite seu nome."
    return
  }
  mensagemCliente.textContent = "Obrigado, "+ nomeCliente.value +" Seu pedido deu R$" + total.toFixed(2);
  
})



