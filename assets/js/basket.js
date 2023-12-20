const product = document.getElementById('productz')


function get(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    product.innerHTML = ''
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.style.width = '21%'
        box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
            <i class="fa-solid fa-heart"></i>
        </div>
    <button onclick="removeCart(${index})">Remove</button>
            <p>$ ${item.price}</p>
            </div>
        `
        product.append(box)
    })
}

function removeCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    get()
}
get()


