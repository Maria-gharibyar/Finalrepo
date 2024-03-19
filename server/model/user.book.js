
const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
        firstName:{
            type:String,
            required:[true,"First Name is required"]
        },
        lastName:{
            type:String,
            required:[true,"Last Name is required"]
        },
        email:{
            type:String,
            required:[true,"Email is also required"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
              }    
        },
        password:{
            type:String,
            required:[true,"Password is required"],
            minlength:[8,"Password must be 8 characters or longer"]
        }
},{timestamps:true})

UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });
  
  
const bcrypt = require('bcrypt');

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});
const user=mongoose.model('Uesr',UserSchema);
module.exports=user