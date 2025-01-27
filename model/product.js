export class Product {
    
    constructor(id,name,price,units=0){
        this.id= id;
        this.name = name;
        this.price = price;
        this.units = units;
    }

    get getId(){return this.id;}
    get getName(){return this.name;}
    get getUnits(){return this.units;}


    changeUnits(unidades) {
        if (this.units + unidades < 0){
            return false;
        }

        this.units += unidades;
        return true;
    }

    productImport() {
        return this.price * this.units;
    }

    toString() {
        return `${this.name} (${this.units}): ${this.price} €/u => ${this.productImport().toFixed(2)} €`;
    }

}