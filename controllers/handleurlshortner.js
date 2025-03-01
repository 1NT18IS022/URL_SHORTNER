

const URL=require('../models/url');
const shortid =require('shortid');


//creating a new shorturl for given url
async function  handleurlshortner(req,res)
 {
    if(!req.body.url)
        return res.status(400).json({message:"Please enter a url"})
   
    const id=shortid.generate();
    await URL.create({
        shortid:id,
        redirecturl:req.body.url,
        viewhistory:[]
    })

    return res.json({shortid:id})
}


//redirecting the short utl to actual url
async function handleurlredirect (req,res)
    {
        const id=req.params.shortid
       const entry=  await URL.findOneAndUpdate({shortid:id},
            {
                $push: {visithistory: {
                    timestamp: Date.now()
                }}
            }
        );
        console.log(entry);
    
        res.redirect(entry.redirecturl);
    }


    //total clicks for specific url
async function handleurlanalytics (req,res){
    const id=req.params.shortid;
    const entry=await URL.findOne({shortid:id})
    res.json({totalclicks:entry.visithistory.length})
 }




module.exports = {
    handleurlshortner,
    handleurlanalytics,
    handleurlredirect
    
}