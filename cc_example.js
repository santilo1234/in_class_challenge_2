// Task 1

let products = [
   
    { name: "Laptop", price: 1200, category: "Electronics" } ,
    { name: "Phone", price: 800, category: "Electronics" },
]

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
    
}

console.log(getProductsByCategory(products, "Electronics"));




// Task 2


function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    
    }

) )

}

console.log(applyDiscount(products, .1));


function sum3(x,y,z) {
    return x + y + z

    let numbers = [1,2,3]; //iterable
    let someObj = {x: 1, y: 2, z: 3}; //iterable

    console.log(sum3(...numbers));


    
    
}
