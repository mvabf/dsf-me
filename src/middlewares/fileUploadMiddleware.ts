import path from 'path';
import multer from 'multer';

export const fileUploadMiddleware = (fieldName: string) => {
    const upload = multer({
        storage: multer.diskStorage({
            destination: path.resolve(__dirname, '..', '..', 'public', 'uploads'),
            filename: (_, file, callback) => {
            
                return callback(null, `${file.originalname}`);
            },
        }),
    });

    return upload.single(fieldName);
};