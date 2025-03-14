import type { NextFunction } from "express";

const GWHITE_LIST = [
    '/api/public/*',
    '/api/user'
]

const authentication = (req: Request, res: Response, next: NextFunction) => {
    


    next();
};


export { authentication };