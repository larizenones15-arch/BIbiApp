var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require("socket.io")(server, {
  handlePreflightRequest: (req, res) => {

    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": req.headers.origin, 
      "Access-Control-Allow-Credentials": true
    };
    res.writeHead(200, headers);
    res.end();
  }
});

const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); 


const corsOptions = {
  origin: true, // This allows whatever domain is accessing it
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204 
};
app.use(cors(corsOptions)); 



const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use('/uploads', express.static(uploadDir));
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = new Map();

io.on('connection', function (socket) {
  console.log("new client connected");

  socket.on('socket_name', function () {
    io.emit('client_socket_name')
  })

  socket.on('join', function(username) {
    users.set(socket.id, username);
    io.emit('receive message', { username: 'System', content: `${username} joined the chat`, type: 'text', id: Date.now() });
  });

  socket.on('send message', function(data) {
    io.emit('receive message', data);
  });

  socket.on('disconnect', function() {
    const username = users.get(socket.id);
    if (username) {
      users.delete(socket.id);
      io.emit('receive message', { username: 'System', content: `${username} left the chat`, type: 'text', id: Date.now() });
    }
  });
});

app.post('/api/upload-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl: imageUrl });
});

server.listen(3000, '0.0.0.0', function () {
  console.log('socket.io server internal listen at 9090');
});
