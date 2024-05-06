function AgregarElemento(){
  let lista = document.getElementById("lista");
  let input = document.getElementById("textarea").value;
  const elementolista = document.createElement("li");

  const button = document.createElement("button");
  button.textContent = "delete";

  elementolista.textContent = input
  elementolista.appendChild(button);

  lista.appendChild(elementolista);
  button.onclick = function(){
     lista.removeChild(elementolista);
  }
  
  
}