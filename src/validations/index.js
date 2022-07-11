import jsonschema from 'jsonschema';
import errors from '../utils/errors.js';
import logger from '../utils/logger.js';
import Ajv from 'ajv';




function validation(res, schema, data) { 
      
  
   const ajv = new Ajv({
         allErrors: true,
         $data: true,
         discriminator: true,
         formats: {
             email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
         }
     });

   
   const isDataValid = ajv.validate(schema, data);
   
  if(!isDataValid){
    res.send("data is not valid")
    //throw new errors.ConflictError('Entered credentials not valid')
  }

}
  
export default validation

