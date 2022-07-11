import Post from '../models/post.js';
import User from '../models/user.js';


async function myPosts(res, userId) {
      
    const myPosts = await Post.find(userId).populate("postedBy", "_id title");
    
    return myPosts
}

async function posts() {

    const posts = await Post.find().populate("postedBy", "_id title");

    return posts
    
}


async function create(postAttributes) {

  //  const post = await Post.query().insertAndFetch(postAttributes)

  const post = await Post.create({
        title: postAttributes.title,
        body: postAttributes.body,
        photo: postAttributes.photo,
        postedBy: postAttributes.postedBy,
    })
  
    return post
}

export default {
    create,
    posts,
    myPosts
}
