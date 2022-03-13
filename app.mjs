import http from "http";
import {Service} from "./service.mjs";

const service = new Service();

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if(req.method == "GET") {
        service.getNotes(req, res);
    } else if (req.method == "POST") {
        service.addNote(req, res);
    }
});

server.listen(9000);