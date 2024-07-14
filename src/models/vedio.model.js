import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePeginate from "mongoose-aggregate-paginate-v2"; 

const vedioShecma= new Schema({
    vedeoFile :{
        type : String,
        required : true
    },
    thumbnail :{
        type : String,
        required : true
    },
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    duration :{
        type : Number,
        required : true
    },
    views :{
        type : Number,
        default:0
    },
    isPublished :{
        type : Boolean,
        default:true
    },
    owner :{
        type : Schema.Types.ObjectId,
        ref : "User",
    },



},{timestamps: true})

vedioShecma.plugin(mongooseAggregatePeginate)
export const Vedio = Schema.model("Vedio", vedioShecma)