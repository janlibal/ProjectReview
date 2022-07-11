import errors from './../utils/errors.js'
import postRepository from '../repositories/post.js';
import crypto  from './../utils/crypto.js';

//const logger = require('./../utils/logger')

async function getMine(req, res, userId) {


  const myPosts = await postRepository.myPosts(res, userId)

  return myPosts

  //res.send({data: userId})

}

async function getAll() { 
 
  //logger.info({  }, 'retrieving all content started')
  
  
  const posts = await postRepository.posts()
              
  //logger.info('retrieving all content completed')

  return posts
}



async function create(req, data, userId) { 
 
    //logger.info({ data }, 'saving a new post started')
    
    const post = {
        title: data.title,
        body: data.body,
        photo: data.photo,
        postedBy: userId
    }
    
    const createdPost = await postRepository.create(post)
                
    //logger.info('saving a new post completed')
    return createdPost
  }

  export default {
    create,
    getAll,
    getMine
  }