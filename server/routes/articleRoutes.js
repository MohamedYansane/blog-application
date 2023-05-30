import express from "express";
const router = express.Router();
router.route('/').get((req,res) => {
    res.json({message: 'Home'});
})
router.route('/:id').get((req,res) => {
    res.json({message: 'Get a single article'});
})
router.route('/').post((req,res) => {
    const {title, author} = req.body;
    if(!title || !author)
    {
        res.status(404);
        throw new Error("Field required");
    }

    console.log(req.body);
    res.json({message: 'Posting an article'});
})
module.exports = router;