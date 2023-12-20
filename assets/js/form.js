const  namee = document.getElementById('name')
const email = document.getElementById('email')
const  pass = document.getElementById('pass')
const form = document.getElementById('form1')


form.addEventListener('click', (e) => {
    e.preventDefault()

   axios.post('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api3', {
    email: email.value,
    name: namee.value,
    password: pass.value,
   })

   .then(res => {
    console.log(res.data);
   })
})