import { Request, Response, NextFunction } from "express";

function handleSessionMiddleware(req: Request, res: Response, next: NextFunction, student: object) {
  (req.session as any).user = {...student};
  next();
}

export {
    handleSessionMiddleware
}