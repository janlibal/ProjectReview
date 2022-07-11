const signUp = {
  type: "object",
  properties: {
    name: { 
     type: "string",
     pattern: '^[A-Za-z. -]+$', 
     maxLength: 80 
     },
    email: { 
      type: "string", 
      format: 'email',
      maxLength: 80
    },
    password: { 
      type: "string",
      minLength: 8, 
      maxLength: 80 
    },
    confirmedPassword: {
      "const": {
        "$data": "1/password"
      },
      "type": "string"
    }
  },
  required: ["name", "email", "password", "confirmedPassword"]
};

const signIn = {
  type: "object",
  properties: {
    email: { 
      type: "string" 
      },
    password: { 
      type: "string" 
      }
  },
  required: ["email", "password"],
};

export default {
    signUp,
    signIn
  }
  