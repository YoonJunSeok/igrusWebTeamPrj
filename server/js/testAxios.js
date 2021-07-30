// const axios = require('axios');

// axios({
//     method: 'get',
//     url: 'http://localhost:3000/test',
//     data: {
//         id: 'saebeok',
//     },
//     headers: {
//         //Authorization: 'Bearer ', // + varToken
//     }
// }).then((res) => {
//     const id = document.getElementById('test');
//     id = res.id;
//     console.log(id);
// }).then((err) => {
//     console.log('err');
// })

const button = document.querySelector("#dog")
const url = 'https://dog.ceo/api/breeds/image/random'

const getId = () => {
    axios.get(url).then((res) => {
        console.log(res);
    })
}
button.addEventListener("click", getDogImages)