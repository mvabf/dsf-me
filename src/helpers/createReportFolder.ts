import fs from 'fs';
import path from 'path';

export function directoryExists() {
    const folder = path.resolve(__dirname, '..', '..', 'reports');

    fs.access(folder, (error) => {
        if (error) 
            fs.mkdir(folder, error => {});
    });
}