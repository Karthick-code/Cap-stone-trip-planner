const mongoose = require("mongoose");
const User = require("./User");

const travelPlanSchema = new mongoose.Schema; ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startdate:{
        type:String,
        required:true,
    },
    enddate:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    budget:{
        type:String,
        required:true,
    },
    activities:{
        type:String,
        required:true,
    },
    accomodation:{
        type:String,
        required:true,
    },
    transportation:{
        type:String,
        required:true,
    },
    notes:{
        type:String,
        required:true,
    },

});
module.exports = mongoose.model("TravelPlan", travelPlanSchema);
