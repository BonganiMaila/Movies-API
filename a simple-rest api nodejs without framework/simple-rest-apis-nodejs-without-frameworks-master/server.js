const hostname = '127.0.0.1';
const port = 3000;

const server = require('./controller.js');

server.listen(port, hostname, () => {
    const { query, type } = req.params;
    fetch(`http://www.omdbapi.com/search?term=${query}&entity=${type}`)
        .then(res => res.json())
        .then(data => res.send(data.results))
        .catch(err => console.log(err))

})