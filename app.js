// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtiene el valor del input donde se escribe el nombre
  const nombreAmigo = document.querySelector("#amigo").value;

  // Valida que el input no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return; // Sale de la función si no hay nombre
  } else {
    // Agrega el nombre al arreglo de amigos
    amigos.push(nombreAmigo);
    // Limpia el input después de agregar
    document.querySelector("#amigo").value = "";
    // Actualiza la lista visible en la página
    actualizarListaAmigos();
  }
}

// Función para mostrar la lista de amigos en el HTML
function actualizarListaAmigos() {
  const listaAmigos = document.querySelector("#listaAmigos");
  // Limpia la lista antes de actualizar
  listaAmigos.innerHTML = "";

  // Recorre el arreglo de amigos y crea un elemento <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i]; // Asigna el nombre al <li>
    listaAmigos.append(item); // Agrega el <li> a la lista
  }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
  // Verifica que haya amigos en la lista
  if (amigos.length === 0) {
    alert("La lista está vacía");
    return;
  }

  // Calcula un índice aleatorio dentro del rango del arreglo
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtiene el amigo sorteado usando el índice aleatorio
  const amigoSorteado = amigos[indiceAleatorio];

  // Muestra el amigo sorteado en el HTML dentro del elemento #resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
