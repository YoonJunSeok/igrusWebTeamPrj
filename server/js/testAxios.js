const axios = require('axios');

axios({
    method: 'post',
    url: 'http://localhost:3000/test',
    headers: {
        //Authorization: 'Bearer ', // + varToken
        // how get varToken?
        // axios 파일은 프론트단 js에서 처리를 하는 것으로 알고 있다.
        // 그러면 varToken은 어떻게 가져와서 헤더처리를 해주어야되는지?
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