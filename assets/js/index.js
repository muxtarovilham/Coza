const  product = document.getElementById('product')
const cartz = document.getElementById('cartz')


const limit = 16
const page = 1
async function get(index) {
    const skip = (page-1)*limit
  const res = await axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4?limit=${limit}&page=${page}&skip=${skip}`)
    const data = await res.data
    db = data
    db.map(item => {
        const box = document.createElement('div')
        box.className = 'boxs'
        box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
            <i class="fa-solid fa-heart"></i>
        </div>
        <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Add To Cart</button>
            </div>
        `
        product.append(box)
    })

    page++
}
load.addEventListener('click', function () {
    get()
})


function cartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log('Cart count', cart.length);
    cartz.innerHTML = `<i class="fa-solid fa-cart-shopping" style="color: #000000;"> <p id="cars">${cart.length}</p></i>`

}

function addToCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == index))
    localStorage.setItem('cart', JSON.stringify(cart))
    cartCount()
}
get()
cartCount()




const sear = document.getElementById('sear')
const i2 = document.getElementById('i2')
const frmz = document.getElementById('frmz')



frmz.addEventListener('submit', function sea() {
    sear.innerHTML = ''
    axios.get(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3?title=${i2.value}`)
    .then(res => {
        const db = res.data
        db.map(item => {
            const divs = document.createElement('div')
            divs.innerHTML = `
            <p>${item.title}</p>
            `
            sear.append(divs)
        })
        console.log(sear);
    })
})

