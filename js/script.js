

// // var x = 5
// // var userName = "John Doe";

// // console.log(x);

// //

// // var x = 5 // number

// // var userName = "John Doe"; // string ``
// // var age = 30; // number

// // var isStudent = true; // boolean

// // var y ; // undefined

// // var z = null; // null

// // var user = {
// //     name: "omar",
// //     age: 30,
// //     isStudent: false ,
// //     wife: {
// //         name: "sarah",
// //         age: 25,
// //         isStudent: false
// //     }
// // }



// // console.log(user.wife.name);






// // // console.log("hello world!");
// // // alert("Hello World!");

// // document.getElementById("demo").innerHTML = "Hello, World!";

// // var x = 5;
// // var y = "5";

// // if( x == y  ) {
// //     console.log(true);
// // }else {
// //     console.log(false);

// // }



// // for(var i = 0; i < 10; i++) {
// //     console.log("hello");
// // }


// // var cartoona = "";
// // for(var i = 0; i < 10; i++) {
// //     cartoona += "<li>Hello, World!</li>";
// // }
// // document.getElementById("myUl").innerHTML = cartoona;



// // var cartoona = ""
// // for(var i = 1960; i < 2006; i++) {
// //     cartoona += `<option > ${i} </option>`;
// // }
// // document.getElementById("selectDate").innerHTML = cartoona;

// // var x = ` Hello, World!`;


// // console.log( 50 + 50 + "50" );



// //  function getSum(){
// //     console.log("hello");
// //  }
// //  getSum();

// // getSum(10 , 10) 

// // function getSum(a, b){
// //     var sum = a + b
// //     console.log(sum);
// // }


// //  function hello(){
// //     alert("Hello, World!");
// //  }


// // Array

// var numbers = [100, 20, 30, 55, 50];

// // for(var i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// // }

// // numbers.push(6);
// // numbers.shift();
// // sort

// // numbers.sort(function(a, b){return a - b});

// // console.log(numbers);

// // slpice

//  numbers.splice(0);
//  console.log(numbers)


var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var productCount = document.getElementById("productCount");
var productImg = document.getElementById("productImg");
var productContainer = []


if (localStorage.getItem("products") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("products"))
}




//empty form
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";
    productCount.value = "";
}

//delete button
//deleteAll
// function deleteAllProducts() {


// }


//  localStorage.setItem("name" , "mohamed")


//  var x = localStorage.getItem("name");
//  console.log(x);



// cards



function addcard() {
    var productNamee = productName.value;
    var productPricee = productPrice.value;
    var categoryy = productCategory.value;
    var description = productDesc.value;
    var count = productCount.value;

    // var img = `img/${productImg.files[0].name}`;
    //     localStorage.setItem("products", JSON.stringify(productContainer))


    const cards = document.getElementById('cards');
    const card = document.createElement('div');
    card.className = 'card col-lg-4 p-2 ';


    const nameElem = document.createElement('p');
    nameElem.textContent = `productName: ${productNamee}`;
    const priceElem = document.createElement('p');
    priceElem.textContent = `productPrice: ${productPricee}`;
    const categoryElem = document.createElement('p');
    categoryElem.textContent = `category: ${categoryy}`;
    const descriptionElem = document.createElement('p');
    descriptionElem.textContent = `description: ${description}`;
    // if (radio.value === "yes") {
    //     const SaleElem = document.createElement('p');
    //     SaleElem.textContent = `Sale!`;
    //     SaleElem.className = 'mark';
    // }

    const countElem = document.createElement('p');
    countElem.textContent = `count: ${count}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn';
    deleteButton.addEventListener('click', function () {
        if (count > 0) {
            countElem.textContent = `count: ${count--}`;
        }
        else {
            cards.removeChild(card);
        }
    });
    var options = document.getElementsByName("Sale");
    var selectedOption = '';
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    if (selectedOption === "yes") {
        const SaleElem = document.createElement('p');
        SaleElem.textContent = `Sale!`;
        SaleElem.className = 'mark';
        card.appendChild(SaleElem);

    }
    card.appendChild(nameElem);
    card.appendChild(priceElem);
    card.appendChild(categoryElem);
    card.appendChild(descriptionElem);
    card.appendChild(countElem);
    card.appendChild(deleteButton);
    cards.appendChild(card);
    clearForm();

}
function checkRadio(radio) {
    if (radio.value === "yes") {
        const SaleElem = document.createElement('p');
        SaleElem.textContent = `Sale!`;
        SaleElem.className = 'mark';
        card.appendChild(SaleElem);

    }
}
