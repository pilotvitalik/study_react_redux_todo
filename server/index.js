const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3030;

let fileDB = '';

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  fileDB = data.toString();
  //fileDB = JSON.parse(data);
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  if (req.method == 'GET') {
    res.end(fileDB);
    //res.end('Hello world, type GET');
  } else {
    //let body = '';
    //req.on('data', chunk => {
      //body += chunk.toString();
    //});
    // req.on('end', () => {
    //   let params = parse(body);
    //   res.end(body);
    //console.log(fileDB)
    console.log(typeof fileDB);
    console.log(fileDB);
    res.end(fileDB);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});