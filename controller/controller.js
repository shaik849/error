const model = require('../model/model')



const getAll = async (req, res) => {
    await model.find().then((data) => res.json(data)).catch((err) => res.json(err)) 
}

const postAll = async (req, res) => {
  console.log(req.body)
  console.log(req.files)
  let myData = new model({
    name: req.body.name,
    file:{ 
        data: req.file.file,
        contentType: 'application/jpeg',
    }
  })
  console.log(req.body)
 await myData.save().then(() => res.json({"message":"success"})).catch((err) => console.log(err))
}

module.exports = {
     getAll, 
     postAll 
    };