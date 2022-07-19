const http = require('http');
const fs = require("fs");
const path = require('path');
const SSI = require('node-ssi');
const urlParser = require('url').parse;

const publicDir = path.join(process.cwd(), 'public');
const ssi = new SSI({ baseDir: publicDir });

class Server {
    constructor() {
        this.host = 'localhost';
        this.port = 8080;

        this.requestListener = this.requestListener.bind(this);
        this.getFilePathByUrl = this.getFilePathByUrl.bind(this);
        this.readFileHandler = this.readFileHandler.bind(this);

        this.server = http.createServer(this.requestListener);
    }

    start() {
        this.server.listen(this.port, this.host, () => {
            console.log(`Server is running on http://${this.host}:${this.port}`);
        });
    }

    requestListener(req, res) {
        res.url = req.url
        const onFileRead = this.readFileHandler.bind(this, res)
        const filename = this.getFilePathByUrl(req.url);

        if (!filename) {
            this.sendError(res, 404, "404 Not Found\n")
        } else if (filename.includes('.shtml')) {
            ssi.compileFile(filename, {}, onFileRead)
        } else {
            fs.readFile(filename, "binary", onFileRead);
        }
    }

    getFilePathByUrl(url) {
        const uri = urlParser(url).pathname;

        let filename = path.join(publicDir, uri);
        let isExist = fs.existsSync(filename)

        if (isExist && fs.statSync(filename).isDirectory()) {
            filename = path.join(filename, 'index.shtml');
            isExist = fs.existsSync(filename)
        }

        return isExist ? filename : null
    }

    readFileHandler(res, err, file) {
        if (err) {
            this.sendError(res, 500, err)
        } else {
            this.sendData(res, file)
        }
    }

    sendError(res, code, content) {
        this.log(res, code);

        res.writeHead(code, {"Content-Type": "text/plain"});
        res.write(content + "\n");
        res.end();
    }

    sendData(res, content) {
        this.log(res, 200);

        res.writeHead(200);
        res.write(content, "binary");
        res.end();
    }

    log(res, code) {
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        console.log(`${time}\t- GET ${res.url} - ${code}`);
    }
}

const server = new Server();
server.start();
