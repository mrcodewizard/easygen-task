import * as joi from "joi";

export const loginSchema  = joi.object({
   email: joi.string().min(6).required(),
   password: joi.string().min(8).required()
  .messages({
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'Password is required',
  })
});

export const singupSchema  = joi.object({
   name: joi.string().required(),
   email: joi.string().min(6).required(),
   password: joi.string()
   .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)).min(8)
   .required()
   .messages({
    'string.min': 'Password must be at least 8 characters long',
    'string.pattern.base': 'Password must contain at least 1 letter, 1 number, and 1 special character',
    'any.required': 'Password is required',
  })
});