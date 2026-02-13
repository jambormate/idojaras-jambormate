import readline from 'node:readline/promises';
import fs from "node:fs"
import { NapiIdojaras } from "./NapiIdojaras.js";

export async function maiidojaras(){
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const maiNap = new Date()
    const minTemp = parseInt(await rl.question("A mai minimum hőmérséklet: "))
    const maxTemp = parseInt(await rl.question("A mai maximum hőmérséklet: "))
    const idojaras = await rl.question("A mai időjárás (szövegesen): ")
    rl.close();
    return new NapiIdojaras(maiNap.getDay(), minTemp, maxTemp, idojaras)
}

export function beolvas(){
    const tartalom = fs.readFileSync("./idojaras.csv", "utf-8");
    const idojarasok = [];
    const sorok = tartalom.trim().split("\n");

    for (let i = 1; i < sorok.length; i++) {
        //console.log(sorok[i])
        const sor = sorok[i].split(";");
        const nap = sor[0];
        const minTemp = sor[1];
        const maxTemp = sor[2];
        const idojaras = sor[3];

        idojarasok.push(new NapiIdojaras(nap, minTemp, maxTemp, idojaras))
    }
    return idojarasok;

}