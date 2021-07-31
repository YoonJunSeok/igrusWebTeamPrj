const axios = require('axios');

// error code
// ailed to load resource: the server responded with a status of 404 (Not Found)
axios({
    method: 'get',
    url: 'http://localhost:3000/test',
    data: {
        id: 'good',
    },
    headers: {
        //Authorization: 'Bearer ', // + varToken
        // how get varToken?
    }
}).then((res) => {
    const id = document.getElementById('test');
    id = res.id;
    console.log(id);
}).then((err) => {
    console.log('err');
})