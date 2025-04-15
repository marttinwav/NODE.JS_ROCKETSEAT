import http from "node:http"
import { jsonBodyHeadler } from "./middleware/jsonBodyHeadler.js"
import { routeHandler } from "./middleware/routeHandler.js"

const server = http.createServer(async (req, res) => {
    await jsonBodyHeadler(req, res)
    routeHandler(req, res)


})

server.listen(3333)
