export class NapiIdojaras{
    constructor(nap, minTemp, maxTemp, idojaras){
        this.nap = nap
        this.minTemp = minTemp
        this.maxTemp = maxTemp
        this.idojaras = idojaras
    
    }toString(){
        switch(this.nap){
            case 0: return `Vasárnap van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}` ;break;
            case 1: return `Hétfő van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 2: return `Kedd van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 3: return `Szerda van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 4: return `Csütörtök van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 5: return `Péntek van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}`;break;
            case 6: return `Szombat van, a mai minimum hőmérésklet az ${this.minTemp} a maximum hőmérséklet pedig ${this.maxTemp}. Az időjárás pedig ${this.idojaras}`;break;
            default: break;
        }
    }
}
