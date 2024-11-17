import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import path from "path";
import * as fs from 'fs';
import { Cron } from "@nestjs/schedule";
import { lastValueFrom } from "rxjs";


@Injectable()
export class notifyService{
    
    private readonly dataFilePath = '../Json/editais.json';
    constructor(@Inject('notify') private readonly client:ClientProxy){}


    private getRandomProject(){
        const data = fs.readFileSync(this.dataFilePath, 'utf8')
        const projetos = JSON.parse(data);

        const randomIndex = Math.floor(Math.random() * projetos.length);
        return projetos[randomIndex];
    }    
        
    //a cada 24h um edital é mandado um edital  
    @Cron('0 0 0 * * *')  
  async sendNotification() {
    const randomProjeto = this.getRandomProject();  
    await lastValueFrom(this.client.emit('notificar', randomProjeto));
  }
}
