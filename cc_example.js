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


// Task 3 

let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {

    return sales.reduce((total, sale)=> total + sale, 0);
    
}


console.log(calculateTotalRevenue(sales));



// Task 4


let employees = {
    name: "John Doe",
    salary: 50000,
    position: "Manager"
};

console.log(employee)  //First time to see no change

function updateSalary(employee, percentageIncrease) {
    return employee.salary = employee.salary + (employee.salary * percentageIncrease);
    
};


updateSalary(employees, .1);

console.log(employees); //Second time to see the change


