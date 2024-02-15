const checkAuthorId=async (req,res,next)=>{
    const author_id=req.params.id
    if(!author_id){
        return res.status(401).json({
            success:false,
            message:"No author id received"
        })
    }
    req.author_id = author_id
    next()
} 

module.exports={checkAuthorId}