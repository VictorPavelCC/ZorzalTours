const pintarCarrito = () => {
    modalCont.innerHTML = " ";
    modalCont.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader";
    modalHeader.innerHTML = `
    <h1 class="modalHeaderTitulo">Tu Carrito</h1>
    `;
    modalCont.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modalButton";

    modalbutton.addEventListener("click",() => {
        modalCont.style.display = "none";
    });



    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoCont = document.createElement("div");
        carritoCont.className = "carritoCont";
        carritoCont.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        `;

        modalCont.append(carritoCont);

        let borrar = document.createElement("span");
        borrar.innerText = "❌";
        borrar.className = "eliminarProd";
        carritoCont.append(borrar);
        
        borrar.addEventListener("click", borrarProduct);
    });


    const total = carrito.reduce((acum, elem) => acum + elem.precio, 0);

    const totalVend = document.createElement("div");
    totalVend.className ="totalVendido";
    totalVend.innerHTML = `Total a pagar: ${total} $`;
    modalCont.append(totalVend);

};

verCarrito.addEventListener("click", pintarCarrito);

const borrarProduct = () => {
    const buscarid = carrito.find((element) => element.id);

    carrito = carrito.filter ((carritoID) => {
        return carritoID !== buscarid;
    });

    pintarCarrito();
};