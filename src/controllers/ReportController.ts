import { Request, Response } from 'express';

class ReportController {
    public async uploaded(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if (!file) 
            return res.status(400).json({ message: 'File not uploaded!' });

        return res.status(200);
          
    }

}

export default new ReportController();