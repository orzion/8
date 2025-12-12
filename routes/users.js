const router =require('express').Router();
const users =[];

router.use((req,res,next)=>{
    console.log("route middlewere");
    next();
})
router.get('/',(req,res)=>{
    res.json({"users": users})
})

module.exports = router;