import { StoreController } from "./controller/storeController.js";

window.addEventListener('load', () => {
    let storeController = new StoreController();
    let formAdd = document.getElementById('add-product-form');
    let formdel = document.getElementById('delete-product-form');
    let formchange = document.getElementById('change-product-form');

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = parseInt(document.getElementById('newproduct-cod').value);
        const name = document.getElementById('newproduct-name').value;
        const price = parseFloat(document.getElementById('newproduct-price').value);
        const units = parseInt(document.getElementById('newproduct-units').value);
        storeController.addProduct(id,name,price,units);
    });

    formchange.addEventListener('submit',(event) => {
        event.preventDefault();
        const id = parseInt(document.getElementById('changeproduct-id').value);
        const newUnits = parseInt(document.getElementById('changeproduct-units').value);
        storeController.changeProductUnits(id,newUnits);
    });

    formdel.addEventListener('submit',(event) => {
        event.preventDefault();
        const id = parseInt(document.getElementById('delproduct-id').value);
        storeController.delProduct(id);
    });
});