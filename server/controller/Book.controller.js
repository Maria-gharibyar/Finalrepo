const bookmodel=require("../model/Book.model");

module.exports.createBook=(request,response)=>{
    bookmodel.create(request.body)
            .then(AddBook=>{
                response.json({Book:AddBook})
            })
            .catch(err=>response.status(400).json(err))
}
module.exports.getBook=(request,response)=>{
    bookmodel.find()
            .then(AddBooks=>{
                response.json(AddBooks)
            })
            .catch(err=>response.status(400).json(err))
}
module.exports.getOnebooK=(request,response)=>{
    bookmodel.findOne({_id: request.params.id})
            .then(Onebook=>{
                response.json(Onebook)
            })
            .catch(err=>response.status(400).json(err))
}
module.exports.UpdateBook=(request,response)=>{
    bookmodel.findOneAndUpdate({_id: request.params.id},request.body)
            .then(updatebook=>{
                response.json(updatebook)
            })
            .catch(err=>response.status(400).json(err));
}
module.exports.deleteBook=(req,res)=>{
    bookmodel.deleteOne({_id: req.params.id})
    .then(deleteBook=>res.json(deleteBook))
    .catch(err=>res.status(400).json(err))
}