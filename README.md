# node-ner
Lightweight Nodejs [Stanford NER Project](https://nlp.stanford.edu/software/CRF-NER.shtml) module

## Requirements
* [Stanford NER Download](https://sadfg.com)
* Java 1.8+

## Pre-installation
Stanford NER needs to be running as a tcp server, default is 8080. Copy server.sh to same directory as stanford-ner project.
```
/stanford-ner-2017-06-09
|  /classifiers
|  /lib
|  build.xml
|  stanford-ner.jar
|  ...
|  server.sh
```
Run the server
```
sudo ./server.sh 8080
```
If you change the TCP port from 8080, you need to make sure you define the port in your project method. The parse method defaults to port 8080.

## Installation
```
npm install --save @enmaso/node-ner
```

## Usage
```javascript
const ner = require('node-ner')

let file = 'path/to/file.extension'
ner.parse(file, (tags) => {
  console.log(tags)
})
```
Returns JSON object. <br><br>
If you use a port other than 8080 for the NERServer, you will need to pass the port in with your parse method
```javascript
ner.parse(file, 8080, (tags) => {
  console.log(tags)
})
```

## Kill Stanford NERServer
```
$ ps -A |grep java
$ kill -9 PID
```
PID will be the first number of the server.sh process

## Contributions
Always looking for testing and bug reporting.

## License
See Stanford NER [License](http://asdf.com) GPL-3.0 <br>
See node-ner [License](https://github.com/enmaso/node-ner/blob/master/LICENSE) GPL-3.0
