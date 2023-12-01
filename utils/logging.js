import chalk from 'chalk';
//import fs from 'fs';
import { utils } from './utils.js'
export class init_logging {
    constructor(){
        this.map = {
            "info": (chalk.blue("<*>")), // ლურჯი მესიჯი
            "error": (chalk.red("<!>")), // წითელი
        }
        this.utils = new utils(); //ამჟამად მარტო uuid ისთის გამოიყენება
        this.unix = Date.now(); // ამჟამინდელი unix timestamp
    }
    /*
    * მარტივი ლოგინგ სისტემა
    */
    info(message){
        console.log(this.logize(message,"info"));
    }
    error(message){
        console.log(this.logize(message,"error"));
    }

    //აბრუნებს ნორმალურ ლოგის მესიჯს
    logize(message,maparg){
        //return (this.map[maparg],`[${this.utils.uuid()}]`,message)
        return `${this.map[maparg]} [${chalk.cyanBright(this.utils.uuid())}] ${chalk.yellow("->")} ${message}`; //symbol(<*>) uuid(zexx-xxrx-xxxx-xxxuasxxx) -> message
    }
    /*
    logfile(message){
        
        fs.writeFile(`../logs/${this.unix}-log`, message, 'utf-8', (err) =>{
            if (err) this.error("Amovarda Shecdoma Logebis Shenaxvashi");
            console.log(err)
        });
    }
    */
}