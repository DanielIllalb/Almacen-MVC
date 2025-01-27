import { Store } from "../model/store.js";
import { StoreView } from "../view/storeView.js";

export class StoreController {
    storeModel;
    storeView;

    constructor(){
        this.storeModel = new Store(1);
        this.storeView = new StoreView();
    }

    addProduct(id,name,price,units) {
        let product = this.storeModel.addProduct(id,name,price,units);
        console.log(product);
        if(product) this.storeView.addProductView(product);
        else this.storeView.printMessage('El producto no se ha podido insertar.'); 
    }

    changeProductUnits(id,newUnits) {
        let product = this.storeModel.changeProductUnits(id,newUnits);
        console.log(product)
        if(product) this.storeView.changeProductUnitsView(product);
        else this.storeView.printMessage('No se pudo modificar el producto. Compruebe que el producto exista.')
    }

    delProduct(id){
        let product = this.storeModel.delProduct(id);
        console.log(product)
        if(product) this.storeView.delProductView(id)
        else this.storeView.printMessage("El producto no se ha eliminado. Compruebe que no tenga unidades para poder ser eliminado.")
    }
}