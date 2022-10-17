let menu_boton = document.getElementById('menu_boton');
let menu_items = document.getElementById('menu_items');
menu_boton.addEventListener('click', function(){
    menu_items.classList.toggle('show');
})




/* addEventListener('DOMContentLoaded'),() => {
    const menu_boton = document.querySelector('.menu_boton')
    if(menu_boton) {
        menu_boton.addEventListener('click',() => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle('show')
        })
    }
}


 */