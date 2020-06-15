require('dotenv').config();
const server = require('./server');
const port = process.env.API_PORT || 3012;

server.listen(port, () => {
    console.log(`Escutando porta ${port}`);
});