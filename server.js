var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // req.file is the `avatar` file
	let newObj = {fileSize:req.file.size,fileType:req.file.mimetype,filename:req.file.originalname }
	// let fileSize = req.file.size
	// let fileType = req.file.mimetype
	// let filename = req.file.filename
res.json(newObj)
  // req.body will hold the text fields, if there were any
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
