export class StoreView {
    formAddProduct;
    formDelProduct;
    message;
    almacen;

    constructor() {
        this.formAddProduct = document.getElementById("add-product-form");
        this.formDelProduct = document.getElementById("delete-product-form");
        this.message = document.getElementById('message');
        this.almacen = document.querySelector('#grupos tbody');
    }

    addProductView({id,name,price,units}) {
        let nodoTr = document.createElement('tr');
        nodoTr.id = `producto${id}`;
        nodoTr.innerHTML = `
            <td> ${id} </td>
            <td> ${name} </td>
            <td> ${price} </td>
            <td> ${units} </td>
        `;

        this.almacen.appendChild(nodoTr);
        this.message.innerHTML = 'Producto añadido correctamente.';
    }

    changeProductUnitsView({id,name,price,units}) {
        let nodoExistente = document.querySelector(`tbody tr#producto${id}`);

        if(nodoExistente) {
            nodoExistente.innerHTML = `
                <td> ${id} </td>
                <td> ${name} </td>
                <td> ${price} </td>
                <td> ${units} </td>
            `;

            this.message.innerHTML = `Producto modificado exitosamente`;
        }else{
            this.message.innerHTML = `Error: Producto no encontrado`; 
        }
    }

    delProductView(id) {
        const nodo = document.querySelector(`tbody tr#producto${id}`);
        if (nodo) {
            nodo.remove();
            this.message.innerHTML = "Producto eliminado correctamente";
        } else {
        this.message.innerHTML = "Error: Producto no encontrado";
        }
    }

    printMessage(text) {
        this.message.innerHTML = text;
    }
}