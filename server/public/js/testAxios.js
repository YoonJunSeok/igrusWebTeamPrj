axios({
    method: 'get',
    url: 'http://localhost:3000/test/api',
    headers: {
        //Authorization: 'Bearer ', // + varToken
    }
}).then((res) => {
    console.log('success axios');
    const id = document.getElementById('test');
    id = res.data.number;
    console.log(id);
}).catch(res => {console.log(res);})
.then((err) => {
    console.log('fail axios');
})

console.log('start testAxios.js');
// testAxios not working!