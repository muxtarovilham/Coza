const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')
const inp = document.getElementById('inp')
const aa = document.querySelector('.aa')
const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
a2.style.display = 'flex'

function getPro () {
    a2.style.display='none'
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        console.log(db);
        db.map(item => {
            const div = document.createElement('div')
            div.className = 'dd1'
            div.innerHTML = `
            <img src="${item.image}" alt="">
            <p style="color: blueviolet;">${item.name}</p>`
            aa.appendChild(div)
        })
    })
}
getPro()



function getbyname () {
    a2.innerHTML = ``
    a1.style.display='none'
    a2.style.display='flex'

    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        let filteredData = db.filter(item => item.name.toLowerCase().includes(inp.value))
        console.log(filteredData);
        filteredData.map(item => {
            const div = document.createElement('div')
            div.className = 'dd1'
            div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.name}</p>`
            a2.append(div)
        })

    })
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    getbyname()
})



function getSort() {
    a2.innerHTML = ''
    a1.style.display = 'none'
    a2.style.display = 'flex'
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
    .then(res => {
        db = res.data
        let sortedData = db.sort((a, b) => a.name.localeCompare(b.name))  
        sortedData.map(item => {
            const box = document.createElement('div')
            box.className = 'boxz'
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price} $</p>
            `
            a2.append(box)
        })

    })
}


btn1.addEventListener('click', (e) => {
    e.preventDefault()
    getSort()
})

