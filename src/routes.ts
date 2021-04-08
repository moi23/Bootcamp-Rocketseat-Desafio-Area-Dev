import { Request, Response } from 'express';

export function resPong(req: Request, res: Response) {
  return res.json({
    message: 'pong',
  });
}
