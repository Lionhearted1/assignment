const express = require("express");
const router = express.Router();
const { validateAuthorRegistration } = require("../middleware/validator")


const authors = [];

const registerAuthor = (req, res) => {
    const { author_id, author_name, author_email, author_password } = req.body;

    const newAuthor = {
        id: authors.length + 1,
        author_id,
        author_name,
        author_email,
        author_password,
    };

    authors.push(newAuthor);
    console.log(authors);
    return res.status(200).json({
        success: true,
        message: "New author registered",
        data: newAuthor,
    });
};

const loginAuthor=(req,res)=>{
    let flag = 0;
    const { author_email, author_password } = req.body;
    if (!author_email || !author_password) {
        return res.status(401).json({
          success: false,
          message: "No email and password provided",
        });
      }
    for(const author in authors){
        if(author.author_email === author_email && author.author_password===author_password){
            flag=1
            break
        }
    }
    res.status(201).json({
        success: true,
        message: "Author authenticated successfully",
    });
}


router.post("/register", validateAuthorRegistration, registerAuthor);
router.post("/login", loginAuthor);

module.exports = router;
