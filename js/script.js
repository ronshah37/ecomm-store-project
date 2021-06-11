// Data for Grocery Categories.
let categories = [
  {
    categoryLabel: 'Vegetables and Fruits',
    altDetailsImage: 'Dal, Atta and More Category',
    categoryImagePath: 'img/categories/01_9.avif',
    categoryPageURL: 'VegetablesFruitsCategory.html'
  },
  {
    categoryLabel: 'Bakery and Dairy',
    altDetailsImage: 'Bakery and Dairy Category',
    categoryImagePath: 'img/categories/02_6.avif',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Beauty and Hygiene',
    altDetailsImage: 'Beauty and Hygiene Category',
    categoryImagePath: 'img/categories/03_5.avif',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Cleaning Supplies',
    altDetailsImage: 'Cleaning Supplies Category',
    categoryImagePath: 'img/categories/04_5.avif',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Click here for all categories...',
    altDetailsImage: 'All Categories',
    categoryImagePath: 'img/categories/05_1.avif',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Vegetables and Fruits',
    altDetailsImage: 'Vegetables and Fruits Category',
    categoryImagePath: 'img/categories/06_1.avif',
    categoryPageURL: 'VegetablesFruitsCategory.html'
  },
  {
    categoryLabel: 'Bakery and Dairy',
    altDetailsImage: 'Bakery and Dairy Category',
    categoryImagePath: 'img/categories/07.avif',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Beauty and Hygiene',
    altDetailsImage: 'Beauty and Hygiene Category',
    categoryImagePath: 'img/categories/08_2.avif',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Cleaning Supplies',
    altDetailsImage: 'Cleaning Supplies Category',
    categoryImagePath: 'img/categories/09_1.avif',
    categoryPageURL: '#'
  }
];

//Code to load data of grocery categories.
let categoriesDiv = document.querySelector('.categories');

categories.forEach((category) => {
    let newCategoryElement = document.createElement(`div`);
    newCategoryElement.classList.add(`category`);
    newCategoryElement.innerHTML = `
    <a href="${category.categoryPageURL}">
      <img src="${category.categoryImagePath}" alt="${category.altDetailsImage}">
      
    </a>  
    <!-- Ratings  -->
    `
    categoriesDiv.appendChild(newCategoryElement);
});

// Data for dummy filter records of products.
let products = [
  {
    productLabel: 'Apples',
    altDetailsImage: 'Apple Product Image',
    productImagePath: 'img/products/apples.jpg',
    oldPrice: 15.00,
    newPrice: 10.00,
    productDescription: 'Delicious super gala apples.',
    rating: 1,
    deliveryTypes: [`two_hours`, `one_day`],
    discount: [`ten_percent`]
  },
  {
    productLabel: 'Cauliflower',
    altDetailsImage: 'Cauliflower Product Image',
    productImagePath: 'img/products/cauliflower-thumb.jpg',
    oldPrice: 9.00,
    newPrice: 7.00,
    productDescription: 'Fresh Cauliflower!',
    rating: 2,
    deliveryTypes: [`two_hours`, `one_day`],
    discount: [`fifty_percent`]
  },
  {
    productLabel: 'Ivy Gourd',
    altDetailsImage: 'Ivy Gourd Product Image',
    productImagePath: 'img/products/Ivy_gourd.jpg',
    oldPrice: 15.00,
    newPrice: 12.00,
    productDescription: 'Indian Ivy Gourd',
    rating: 3,
    deliveryTypes: [`one_day`, `two_days`],
    discount: [`ten_percent`]
  },
  {
    productLabel: 'Long Squash',
    altDetailsImage: 'Long Squash Product Image',
    productImagePath: 'img/products/long_squash.jpg',
    oldPrice: 9.00,
    newPrice: 6.00,
    productDescription: 'Fresh Long Squash',
    rating: 4,
    deliveryTypes: [`two_hours`, `two_days`],
    discount: [`thirty_percent`]
  },
  {
    productLabel: 'Mangoes',
    altDetailsImage: 'Mangoes Product Image',
    productImagePath: 'img/products/mangoes.jpg',
    oldPrice: 50.00,
    newPrice: 45.00,
    productDescription: 'Delicious Alphonso Mangoes',
    rating: 3,
    deliveryTypes: [`two_hours`, `one_day`],
    discount: [`forty_percent`]
  },
  {
    productLabel: 'Oranges',
    altDetailsImage: 'Orange Product Image',
    productImagePath: 'img/products/Oranges.jpg',
    oldPrice: 50.00,
    newPrice: 39.00,
    productDescription: 'Rich in Vitamin C',
    rating: 4,
    deliveryTypes: [`two_hours`, `two_days`],
    discount: [`twenty_percent`]
  }
];

// let productRatingValue = 4;
const filteredResultsSection = document.querySelector(`#filteredResults`);

const setProductsInFilterResults = function(inputProducts) {

  // Clear out information that already exists
  filteredResultsSection.innerHTML = ``;

  inputProducts.forEach((product) => {
    let newProductElement = document.createElement(`article`);
    newProductElement.classList.add(`product`);
    newProductElement.innerHTML = `
    <header>
      <img src="${product.productImagePath}" alt="${product.altDetailsImage}">
      <h3>${product.productLabel}</h3>
      <data value="${product.newPrice}"><del>$${product.oldPrice}</del> <ins>$${product.newPrice}</ins></data>
      <p>${product.productDescription}</p>
      <dl>
        <dt>Rating</dt>
        <dd>${product.rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
      </dl>
      <a href="#">see more</a>
    </header>
    <footer>
      <button type="button" class="add-to-cart"> Add to Cart <span class="add-to-cart-sign"> + </span></button>
      <button type="button" class="favourite">Heart It!!</button>
    </footer>
    `
    filteredResultsSection.appendChild(newProductElement);
  })
}

const productFilter = {
  deliveryTypes: [],
  discounts: [],
  ratings: 0,
}


//Select Delivery Type filter
const deliveryTypeFilter = document.getElementById(`deliveryTypeFilter`);

//Select Discounts filter
const discountsFilter = document.getElementById(`discountsFilter`);

//Select Ratings Filter
// const ratingFilter = document.querySelectorAll(`input[name="rating"]`);
const ratingFilter = document.getElementById(`ratingsFilter`);

//Select Drop Down
const sortFilter = document.getElementById(`sortFilter`);

const filterAndSort = function() {
  
  // console.log(productFilter.deliveryTypes.length);

  const filteredProducts =  products.filter((product) =>  
                          productFilter.deliveryTypes.length === 0 || 
                          product.deliveryTypes.filter((deliveryType) => 
                          productFilter.deliveryTypes.includes(deliveryType)).length > 0)
                          .filter((product) =>  productFilter.discounts.length === 0 || 
                          product.discount.filter((discount) => 
                          productFilter.discounts.includes(discount)).length > 0)
                          .filter((product) => product.rating >= productFilter.ratings);
                                


  // Go build the UI with the new filtered array
  setProductsInFilterResults(filteredProducts);

}

deliveryTypeFilter.addEventListener(`change`, function(event) {

  const deliveryTypes = event.target.form.elements[event.target.name]

  // Filter to only the checked ones, then return the "value" of those to an array
  productFilter.deliveryTypes = [...deliveryTypes]
                            .filter((deliveryType) => deliveryType.checked)
                            .map((deliveryType) => deliveryType.value)

  filterAndSort()
})


discountsFilter.addEventListener(`change`, function(event) {

  const discounts = event.target.form.elements[event.target.name]

  // Filter to only the checked ones, then return the "value" of those to an array
  productFilter.discounts = [...discounts]
                            .filter((discount) => discount.checked)
                            .map((discount) => discount.value)

  filterAndSort()
})

ratingFilter.addEventListener(`change`, function(event) {

  const ratings = event.target.form.elements[event.target.name]

  // Filter to only the checked ones, then return the "value" of those to an array
  let selectedRating = [...ratings]
                       .filter((rating) => rating.checked)
                       .map((rating) => rating.value)

  productFilter.ratings = Number(selectedRating[0]);

  filterAndSort()
})

sortFilter.addEventListener(`change`, function(event) {
  
  if (event.target.value === "price-high") {
    products.sort(
      (productOne, productTwo) => productTwo.newPrice - productOne.newPrice
    );
  } else if (event.target.value === "price-low") {
    products.sort(
      (productOne, productTwo) => productOne.newPrice - productTwo.newPrice
    );
  }

  filterAndSort()
})

// Carousel

const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});


// Food Info

const setNutritionInfo = function( nutritionInfo) {

  // Clear out information that already exists
  foodNutritionDetails.innerHTML = ``;
  //
  let newNutritionHeader = document.createElement(`header`);
  newNutritionHeader.innerHTML = `<p>Food Nutritional values for <strong> ${nutritionInfo["name"].toUpperCase()} ( per ${nutritionInfo["serving_size_g"]} g) </strong> are as follows:</p>`
  foodNutritionDetails.appendChild(newNutritionHeader);

  for (const property in nutritionInfo) {
    //
    if(property === "name" || property === "serving_size_g") {
      //skip
    } else {
      let newNutritionElement = document.createElement(`div`);
      newNutritionElement.classList.add(`nutrition-info-element`);
      newNutritionElement.innerHTML = `<p>${property}: ${nutritionInfo[property]}</p>`
      foodNutritionDetails.appendChild(newNutritionElement);
    }    
  }
    
}

function getFoodNutritionDetails(event) {
  //
  fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${foodName.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "01c2356800msh8c67f297587506cp1fdeebjsndd7df528b54e",
		"x-rapidapi-host": "calorieninjas.p.rapidapi.com"
	}
})
.then((response) => response.json())
.then((response) => {
  //
  if(response !== null && response != undefined) {
    if(response.items !== null && response.items != undefined && response.items.length > 0) {
      setNutritionInfo(response.items[0]);
    } else {
      foodNutritionDetails.innerHTML = `<p>Please check the input again. If input is correct, then the information is currently not available.</p>`;
    }
  } else {
    foodNutritionDetails.innerHTML = `<p>Please check the input again. If input is correct, then the information is currently not available.</p>`;
  }
	
})
.catch(err => {
	console.error(err);
});
  
  event.preventDefault();
}


function resetFoodInfo() {
  foodNutritionForm.reset();
  // Clear out information that already exists
  foodNutritionDetails.innerHTML = ``;
}

const foodNutritionForm = document.getElementById(`foodNutritionForm`);
const foodNutritionDetails = document.getElementById(`foodNutritionDetails`);
const foodName = document.getElementById(`foodname`);
foodNutritionForm.addEventListener(`submit`, getFoodNutritionDetails);
//

//
function getFunFact() {
  fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts?limit=1", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "01c2356800msh8c67f297587506cp1fdeebjsndd7df528b54e",
      "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com"
    }
  })
  .then((response) => response.json())
  .then((response) => {
    //
    if(response !== null && response != undefined && response.length > 0) {
      funFactValue.textContent = `${response[0].fact}`;
    } else {
      funFactValue.textContent = `An apple a day keeps doctor away.`;
    }
  })
  .catch(err => {
    console.error(err);
  });
}

const funFactValue = document.getElementById(`funFactValue`);
getFunFact();