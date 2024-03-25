const bookmodel = require("../model/Book.model");
const User = require('../model/user.book')


module.exports.createBook = (request, response) => {
    let userFromDb = {};

       User.findOne({_id:request.body.creator})
       .then(user => 
        bookmodel.create(request.body).then(addbook => {
          user.Book.push(addbook);
          user.save({validateBeforeSave: false});
          addbook.creator = user;
          addbook.save({validateBeforeSave: false});
          console.log(addbook, user);
          response.json(addbook);
        }
        )
        )
       .catch(err => {console.log(err);  return response.status(400).json(err)});
      request.body.creator = userFromDb._id;
      console.log(userFromDb);
}
module.exports.getBook = (request, response) => {
    bookmodel.find()
        .then(AddBooks => {
            response.json(AddBooks)
        })
        .catch(err => response.status(400).json(err))
}
module.exports.getOnebooK = (request, response) => {
    bookmodel.findOne({ _id: request.params.id })
        .then(Onebook => {
            response.json(Onebook)
        })
        .catch(err => response.status(400).json(err))
}
module.exports.UpdateBook = (request, response) => {
    bookmodel.findOneAndUpdate({ _id: request.params.id }, request.body)
        .then(updatebook => {
            response.json(updatebook)
        })
        .catch(err => response.status(400).json(err));
}
module.exports.deleteBook = (req, res) => {
    bookmodel.deleteOne({ _id: req.params.id })
        .then(deleteBook => res.json(deleteBook))
        .catch(err => res.status(400).json(err))
}