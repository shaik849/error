const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, next) =>{
        next(null, 'upload')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
}) 
console.log(storage.getFilename.filename)

const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) =>{
        if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
            callback(null, true)
        }else{
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})


module.exports = {upload, storage}