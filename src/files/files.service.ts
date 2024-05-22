import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as fs from 'fs';
import * as path from "path";
import * as uuid from 'uuid';
import {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    GetObjectCommand
} from "@aws-sdk/client-s3";



const AdmZip = require('adm-zip')

@Injectable()
export class FilesService {
    REGION = "ru-central1";
    ENDPOINT = "https://storage.yandexcloud.net";
    BUCKETNAME = "test-backetk"

    testfile = fs.createReadStream("./src/files/image2.png")
    s3Client = new S3Client({ region: this.REGION, endpoint: this.ENDPOINT });
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
            const buildfolder = await fs.promises.readdir(path.resolve(filePath, "Build"))
            const TempDataFolder = await fs.promises.readdir(path.resolve(filePath, "TemplateData"))
            console.log(buildfolder)
            for (let fileNameB of buildfolder){
                const filePathB = path.resolve(filePath, "Build", fileNameB)
                const backetPath = path.resolve(folderName, "Build", fileNameB)
                const bfile = fs.createReadStream(filePathB)
                console.log(filePathB)
                await this.s3Client.send(
                    new PutObjectCommand({
                        Bucket: this.BUCKETNAME,
                        Key: backetPath,
                        Body: bfile
                    })
                );
            }
            for (let fileNameB of TempDataFolder){
                const filePathB = path.resolve(filePath, "Build", fileNameB)
                const backetPath = path.resolve(folderName, "Build", fileNameB)
                const bfile = fs.createReadStream(filePathB)
                await this.s3Client.send(
                    new PutObjectCommand({
                        Bucket: this.BUCKETNAME,
                        Key: backetPath,
                        Body: bfile
                    })
                );
            }
            const html = await fs.createReadStream(path.resolve(filePath, "index.html"))
            const buckethtml = path.resolve(folderName, "index.html")
            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: this.BUCKETNAME,
                    Key: buckethtml,
                    Body: html
                })
            );
            console.log(TempDataFolder)
            return folderName
        } catch (e) {
            console.log(e)
            throw new HttpException('Ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async test(){

        return await this.s3Client.send(
            new PutObjectCommand({
                Bucket: this.BUCKETNAME,
                Key: "krya/image2.png",
                Body: this.testfile
            })
        );
    }
}
