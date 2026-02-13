export class NapiIdojaras{
    constructor(nap, maxTemp, minTemp, idojaras){
        this.nap = nap
        this.maxTemp = maxTemp
        this.minTemp = minTemp
        this.idojaras = idojaras
    
    }toString(){
        switch(this.nap){
            case 0: return `Vasárnap van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}` ;break;
            case 1: return `Hétfő van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 2: return `Kedd van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 3: return `Szerda van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 4: return `Csütörtök van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 5: return `Péntek van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 6: return `Szombat van, a mai max hőmérésklet az ${this.maxTemp} a minimum hőmérséklet pedig ${this.minTemp}. Az időjárás pedig ${this.idojaras}`;break;
            default: break;
        }
    }
}
