// local storage
class Storage{
    static saveProducts(products){
    localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id){
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(ab => ab.id === id);
    }
    static saveCart(cart){
    localStorage.setItem('cart',JSON.stringify(cart));
    }
    static getCart(){
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[];
    }
    }
    
    document.addEventListener("DOMContentLoaded", () =>{
    const ui = new UI();
    const products = new Products();
    //setup app
    ui.setupApp();
    // get all products
    products.getProducts().then(products => {
    ui.displayProducts(products);
    Storage.saveProducts(products);
    }).then(()=>{
    ui.getBagButtons();
    ui.cartLogic();
    });
    });
    
    
    
    