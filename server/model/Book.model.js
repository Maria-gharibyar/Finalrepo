const mongoose=require('mongoose');

const BookSchema=new mongoose.Schema({
        title:{
            type:String,
            required:[true, "Title is required"],
            minlength:[3,"The Title must be at leat 3 characters"]
        },
        author:{
            type:String,
            required:[true, "Author is required"],
        },
        publishYera:{
            type:Date,
            required:[true, "publish year required"],
            min: ['2000-01-01', 'Date should not be before 2000-01-01'], 
            max: ['2024-12-31', 'Date should not be after 2024-1-31'],
        },
        language:{
            type:String,
            required:true
        },
        
        Descriptions:{
            type:String,
            minlength:[5,"The description lenght must be 5 characters"]
        },
        creator:{type:mongoose.Schema.Types.ObjectId, ref : 'Uesr'}

        
},{timestamps:true})

const Book=mongoose.model('Books',BookSchema);
module.exports=Book;