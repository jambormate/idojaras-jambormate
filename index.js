import { beolvas, maiidojaras } from "./idojaraskezeles.js";
import { NapiIdojaras } from "./NapiIdojaras.js";

const maiido = maiidojaras()

const tesztike = new NapiIdojaras(1, 30, 21, "felhős")
console.log(tesztike.toString())


const vege = beolvas();

for(const idojaras of vege){
    console.log(idojaras)
}

function FoMax(){
    let foMax = vege[0];
    for(const idojaras of vege){
        if (idojaras.maxtemp > foMax.maxtemp){
            foMax == idojaras
        }
    }
    console.log(foMax)
}

