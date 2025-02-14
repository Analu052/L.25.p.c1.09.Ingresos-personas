export default class Cl_persona{
    constructor(n,i){
        this.nom="";
        this.ingreso=+i;
    
    }
    setNom(n){
        this.nom=n;
    }
    getNom(){
        return this.nom;
    }
    setIngreso(i){
        this.ingreso=+i;
    }
    getIngreso(){
        return this.ingreso;
    }
}
