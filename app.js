let amigos = []; 

function agregarAmigo() { 
    let nombre = document.getElementById('amigo').value.trim(); 
    let lista = document.getElementById('listaAmigos'); 
    if (nombre === "") { 
    alert("Por favor, ingresa un nombre válido."); 
    return;
    } 
    amigos.push(nombre);
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento); 
    document.getElementById('amigo').value = ""; 
} 

function sortearAmigo() { 
    if (amigos.length === 0) { 
    alert("La lista está vacía. Agrega al menos un amigo antes de sortear."); 
    return;
    } 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 
    document.getElementById('resultado').textContent = `${amigoSorteado}`; 
} 