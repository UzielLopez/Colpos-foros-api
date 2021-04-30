// Index principal
require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 8087

server.listen(PORT, () => console.log(`Server running at ${PORT}`))
