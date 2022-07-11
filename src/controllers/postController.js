import validation from '../validations/index.js';
import schema from '../validations/schemas/post.js';
import operations from '../operations/post.js';


export const test = async (req, res) => {
    res.send("you're in!!!")
}



export const getMine = async (req, res) => {

    const userId = req.params;

    const posts = await operations.getMine(req, res, userId)

    res.send(posts)
}



export const getAll = async (req, res) => {
       
    const allPosts = await operations.getAll(req, res)

    res.send({data: allPosts})
    
}

export const create = async (req, res) => {

    const userId = req.user._id

    const data = {
        title: req.body.title,
        body: req.body.body,
        photo: req.body.photo,
    }
            
    validation(res, schema.Post, data)

    const newPost = await operations.create(req, data, userId)

    res.send(newPost)

}