const router =require('express').Router();
const users =[];
router.get('/',(req,res)=>{
    res.json({"users": users})
})

module.exports = router;