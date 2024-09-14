const shortId = require("shortid");
const URL = require("../models/url");
const shortid = require("shortid");


async function handleshortURL(req, res) {
    const ShortId = shortid();
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }
    await URL.create({
        shortId: ShortId,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json( {shortid:ShortId} );
}

async function handleredirectURL(req,res){
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push:{
                visitHistory:{timestamp:Date.now()},
            },
        })
    res.redirect(entry.redirectURL);
}

async function handlegetanalytics(req,res){
    const shortId = req.params.shortid;
    const result = await URL.findOne({shortId});
    return res.json({
        totalclicks:result.visitHistory.length,
        totalanalytics:result.visitHistory,
    });
}
async function handleviews(req,res){
    return res.render("home");
}


module.exports={handleshortURL,handleredirectURL,handlegetanalytics,handleviews,};