const express = require('express');
const helmet = require('helmet');
const { body } = require('express-validator');
const app = express();

// Helmet: middleware to set secure HTTP headers: https://helmetjs.github.io/
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

express.static('public');

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    // Forward error to the next middleware
    next(error);
});

// Error handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send(error.message);
});

// Middleware
app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    next();
});

//logging auth
app.use((req, res, next) => {
    console.log(req.headers.authorization);
    next();
});


// Multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});


// Create a multer instance with the storage engine
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    }
});

// Single file upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Single file uploaded successfully');
});

// Multiple files upload
app.post('/multiple', upload.array('files', 12), (req, res) => {
    res.send('Multiple files uploaded successfully');
});

app.post('/user', [
    // Trims and escapes
    body('username').trim().escape(),
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 8 }),
    // password must contain at least one number
    body('password').matches(/\d/),
    // password must contain at least one special character
    body('password').matches(/[!@#$%^&*(),.?":{}|<>]/),
], (req, res) => {
    // Handle the request
});


app.listen(3000, () => console.log('🌎 Server running on port http://localhost:3000'));

