import { Product } from './product.js';


export class Store {

    constructor(id) {
        this.id = id;
        this.products = [];
    }

    findProduct(id) {
        return this.products.find(product => product.getId === id);
    }

    addProduct(id, name, price, units) {
        if (this.findProduct(id)) {
            return false;
        }

        const newProduct = new Product(id, name, price, units);
        this.products.push(newProduct);
        return newProduct;
    }

    delProduct(id) {
        const product = this.findProduct(id);
        if (!product || product.units > 0) {
            return false;
        }

        this.products = this.products.filter(prod => prod.id !== id);
        return product;
    }

    changeProductUnits(id, units) {
        const product = this.findProduct(id);
     
        if (!product) {
            return false;
        }
    
        if (!product.changeUnits(units)) {
            return false;
        }
    
        return product; 
    }
    
    totalImport(){
        return this.products.reduce((total,product) => total + product.productImport());
    }

    underStock(unidades){
        return this.products.filter((product) => product.units < unidades);
    }

    orderByUnits(){
        return [...this.products].sort((product1,product2) => product2.units - product1.units);
    }

    orderByName(){
        return [...this.products].sort((product1,product2) => product1.name.localeCompare(product2.name));
    }

}

