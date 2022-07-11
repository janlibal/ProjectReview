const Post = {
    type: "object",
    properties: {
      title: { 
        type: "string",
        maxLength: 80 
        },
      body: { 
        type: "string",
        maxLength: 80
        },
      photo: { 
        type: "string" 
        },
      /*postedBy: { 
        type: "object",
        maxLength: 40 
        }*/
    },

    required: ["title", "body", "photo"],
};
  
export default {
    Post
}