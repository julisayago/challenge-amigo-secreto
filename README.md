# challenge-amigo-secreto
Proyecto desarrollado como parte del programa Oracle Next Education (ONE).

# Amigo Secreto

## Descripción

**Amigo Secreto** es una aplicación web interactiva que permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién es el "amigo secreto".  

El usuario puede agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres se muestran en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" selecciona un nombre al azar y lo muestra en pantalla.  

Esta aplicación es ideal para reuniones familiares, entre amigos o en la oficina, ofreciendo una forma rápida, sencilla y divertida de organizar un sorteo de regalos.

---

## Funcionalidades

- **Agregar nombres**: Escribir un nombre en el campo de texto y agregarlo a la lista con el botón "Adicionar".  
- **Validación de entrada**: Se muestra una alerta si el campo está vacío.  
- **Visualización de la lista**: Los nombres ingresados se muestran en tiempo real en una lista en la página.  
- **Sorteo aleatorio**: Selecciona un nombre de forma aleatoria y lo muestra en pantalla al hacer clic en "Sortear Amigo".  

---

## Captura de Pantalla
![Imagen representativa de Amigo Secreto](assets/amigo-secreto.png)

---

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/amigo-secreto.git
```
2. Abrir el archivo `index.html` en un navegador web.

## Estructura del Proyecto

amigo-secreto/
│
├─ index.html       # Estructura principal de la aplicación
├─ style.css        # Estilos de la aplicación
├─ app.js           # Lógica de JavaScript para agregar y sortear amigos
├─ assets/          # Imágenes utilizadas en la aplicación
│   ├─ amigo-secreto.png
│   └─ play_circle_outline.png
└─ README.md        # Este archivo

## Uso

1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en “Adicionar” para agregarlo a la lista.
3. Repite el proceso para todos los amigos que participen.
4. Haz clic en “Sortear Amigo” para seleccionar un nombre aleatorio.
5. El resultado se mostrará debajo de la lista de amigos.

## Tecnologías Usadas

- HTML
- CSS
- JavaScript (manipulación del DOM)
