class ProductManager {
    constructor() {
        this.products = [];
        this.lastProductId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("Todos los campos son obligatorios.");
        }

        // Validar que no se repita el campo "code"
        if (this.products.find(product => product.code === code)) {
            throw new Error(`Ya existe un producto con el código "${code}".`);
        }

        // Generar un nuevo id
        const newProductId = this.lastProductId + 1;
        this.lastProductId = newProductId;

        // Crear el nuevo producto y añadirlo al arreglo de productos
        const newProduct = { id: newProductId, title, description, price, thumbnail, code, stock };
        this.products.push(newProduct);
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            throw new Error(`Producto con id "${id}" no encontrado.`);
        }
    }

    getProducts() {
        return this.products;
    }
}

const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Descripción del producto 1", 10, "ruta/de/imagen1.jpg", "PROD1", 5);
productManager.addProduct("Producto 2", "Descripción del producto 2", 20, "ruta/de/imagen2.jpg", "PROD2", 10);

const product1 = productManager.getProductById(1);
console.log(product1);
const product2 = productManager.getProductById(1);
console.log(product1);

