axios({
    method: 'get',
    url: 'http://localhost:3000/test/api',
    headers: {
        //Authorization: 'Bearer ', // + varToken
    },
}).then((res) => {
    console.log('success axios');
    let id = document.getElementById('test');
    id.innerText = res.data;
}).catch(res => {console.log(res);})

console.log('start testAxios.js');