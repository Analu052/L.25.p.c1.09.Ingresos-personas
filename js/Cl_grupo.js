export default class Cl_grupo{
    constructor(){
        this.acumIP = 0;
        this.auxM = 0;
        this.menorMp = 200;
        this.contP = 0;
    }

        procesarPersona(per){
            this.contP++;
            this.acumIP += per.ingreso;
            
         if(per.getIngreso() < this.menorMp){
            this.menorMp = per.getIngreso();
            this.auxM =this.menorMp;
        }
    }
    
    promI(){
        return this.acumIP/this.contP;
    }
    menorI(){
        return this.auxM;
    }
}
