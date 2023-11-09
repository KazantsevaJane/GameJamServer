import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as fs from 'fs';
import * as path from "path";
import * as uuid from 'uuid';

const AdmZip = require('adm-zip')

@Injectable()
export class FilesService {
    async createFile(file): Promise<string> {
        try {
            const folderName = uuid.v4()
            const fileName = uuid.v4()+'.zip'
            const filePath = path.resolve(__dirname, '..', 'static', 'games', `${folderName}`)
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive:true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            const arhive = path.resolve(filePath, fileName)
            const zip = new AdmZip(arhive)
            await zip.extractAllTo(filePath)
            console.log('dffddff')
            return folderName
        } catch (e) {
            console.log(e)
            throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
