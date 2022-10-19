const shopCont = document.getElementById("shopCont");
const verCarrito = document.getElementById("vercarrito");
const modalCont = document.getElementById("modalCont");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">${product.precio}$</p>
    `;
    shopCont.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "boton";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
       console.log(carrito);
    });
});


