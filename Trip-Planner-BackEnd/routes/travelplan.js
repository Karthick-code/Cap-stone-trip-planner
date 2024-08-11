const express=require("express");
const router=express.Router();
const TravelPlan = require("../models/Travelplan");
const auth=require("../middleware/auth");

//get all travel plans by individual user
router.get("/", auth, async (req, res) => {
    try {
        const travelplans = await TravelPlan.find({ user: req.user.id })
        res.send(travelplans)
    } catch (error) {
        res.status(500).send({ message: "Error fetching travel plans", error: error.message })
    }
})

// create travel plan
router.post("/",auth,async(req,res)=>{
    const {user,title,description,startdate,enddate,destination,budget,activities,accomodation,transportation,notes}=req.body;
    const travelplan=new TravelPlan({
        user,
        title,
        description,
        startdate,
        enddate,
        destination,
        budget,
        activities,
        accomodation,
        transportation,
        notes
    });
    await travelplan.save();
    res.send(travelplan);
});
//update travel plan
router.put("/",auth,async(req,res)=>{
    const {user,title,description,startdate,enddate,destination,budget,activities,accomodation,transportation,notes}=req.body;
    const travelplan=new TravelPlan.findByIdAndUpdate(req.params.id,{
        user,
        title,
        description,
        startdate,
        enddate,
        destination,
        budget,
        activities,
        accomodation,
        transportation,
        notes
    });
    res.send(travelplan);
});
//delete travel plan
router.delete("/:id",auth,async(req,res)=>{
    const travelplan=await TravelPlan.findByIdAndDelete(req.params.id);
    res.send(travelplan);
});


module.exports=router;
