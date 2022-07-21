const mongoose=require('mongoose');

const ProductSchema= mongoose.Schema({
    name:{
        type:String,
        index:true,
        unique:true,
        required:true,
        minlength:4
    },
    price:{
        type:Number,
        min:10
    },
    expiration:Date
},{
    timestamps:true
});
module.exports=mongoose.model('Product',ProductSchema);