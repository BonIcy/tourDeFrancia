import {validationResult} from 'express-validator';
let validateDocuments = (req, res, next)=> {
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json(errors)
    }
    next();
}

export default validateDocuments