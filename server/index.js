const server = require("./app");

const PORT = process.env.PORT || 8080

server.listen(8080, () => {console.log(`Server is listening on http://localhost:${PORT}`)});