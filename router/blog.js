const express =require("express")
const router=express.Router()

const { checkAuthorId }=require("../middleware/middleware")

const blogs = [];

const createBlog =  (req, res) => {
    const { author_id, title, content } = req.body;
  
    if (!author_id || !title || !content) {
      return res.status(401).json({
        success: false,
        message: "Insufficient blog content provided",
      });
    }
  
    newBlog = {
      id: blogs.length + 1,
      author_id,
      title,
      content,
    };
  
    blogs.push(newBlog)
  
    return res.status(201).json({
      success:true,
      message:"Blog created successfully"
    })
  };

const getAllBlogs = async(req,res)=>{
    console.log("All the blogs are:",blogs);
    return res.status(201).json({
        success:true,
        message:"all blogs retrieved successfully",
        data: blogs,
    })
}


const getAuthorBlogs = async (req, res) => {
    const author_id = req.author_id;
  
    const author_blog = [];
  
    console.log(blogs);
  
    for (const blog of blogs) {
    //   console.log("loop",blog);
    //   console.log("author_id:",author_id,"/n blog.author_id",blog.author_id);
      console.log("type of author_id",typeof(author_id));
      console.log("type of blog.author_id",typeof(blog.author_id));
      if (parseInt(author_id) === blog.author_id) {
        author_blog.push(blog);
        console.log(author_blog);
      }
    }
  
    console.log(`Auhtors blogs with author id ${author_id}`,author_blog);
  
    return res.status(201).json({
      success: true,
      data: author_blog,
    });
  };
router.post('/createBlogs',createBlog)
router.get('/getAllBlogs',getAllBlogs)
router.get('/getBlogs/:id',checkAuthorId,getAuthorBlogs)
module.exports=router