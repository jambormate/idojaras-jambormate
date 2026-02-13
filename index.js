import { beolvas, maiidojaras } from "./idojaraskezeles.js";
import { NapiIdojaras } from "./NapiIdojaras.js";


const tesztike = new NapiIdojaras(1, 10, 21, "felhős")
console.log(tesztike.toString())

const vege = beolvas();
vege.push(await maiidojaras())

for(const idojarasok of vege){
    console.log(idojarasok)
}

function FoMax(){
    let foMax = vege[0];
    for(const idojarasok of vege){
        if (idojarasok.maxtemp > foMax.maxtemp){
            foMax == idojarasok
        }
    }
    switch (foMax.nap) {
    case 0: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy vasárnapi nap volt`;
    case 1: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy hetfői nap volt`;
    case 2: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy keddi nap volt`;
    case 3: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy szerdai nap volt`;
    case 4: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy csütörtöki nap volt`;
    case 5: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy pénteki nap volt`;
    case 6: return `${vege.findIndex((i) => i == foMax) + 1} volt a legmagasabb hőmérséklet ami egy szombati nap volt`;
    default: break;
  }
}
console.log(FoMax())

