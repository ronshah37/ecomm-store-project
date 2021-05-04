
const bigImg = document.querySelector(`#bigimg`)
const theGallery = document.querySelector(`#gallery`)


const setThumb = function (event) {
  // target refers to what was under the mouse when this event occurred
  const whichOne = event.target

  console.log(whichOne.matches(`.thumb`))

  let imgSrc = whichOne.getAttribute(`src`)
  let imgAlt = whichOne.getAttribute(`alt`)

  // Update the big image's attributes
  bigImg.setAttribute(`src`, imgSrc)
  bigImg.setAttribute(`alt`, imgAlt)
}

// Listen to the entire gallery for a click
theGallery.addEventListener(`click`, setThumb)


// Data for Grocery Categories.
let categories = [
  {
    categoryLabel: 'Vegetables and Fruits',
    altDetailsImage: 'Vegetables and Fruits Category',
    categoryImagePath: 'img/categories/vegetables-and-fruits-farmers-market.jpg',
    categoryPageURL: 'VegetablesFruitsCategory.html'
  },
  {
    categoryLabel: 'Bakery and Dairy',
    altDetailsImage: 'Bakery and Dairy Category',
    categoryImagePath: 'img/categories/bakerycakesdiary-250x250-1.png',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Beauty and Hygiene',
    altDetailsImage: 'Beauty and Hygiene Category',
    categoryImagePath: 'img/categories/Beauty_and_Hygiene-270x270.jpg',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Cleaning Supplies',
    altDetailsImage: 'Cleaning Supplies Category',
    categoryImagePath: 'img/categories/cleaning-supplies-kit.jpg',
    categoryPageURL: '#'
  },
  {
    categoryLabel: 'Click here for all categories...',
    altDetailsImage: 'All Categories',
    categoryImagePath: 'img/categories/arrow.jpg',
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
      <br>
      <span>${category.categoryLabel}</span>
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
    rating: 1
  },
  {
    productLabel: 'Cauliflower',
    altDetailsImage: 'Cauliflower Product Image',
    productImagePath: 'img/products/cauliflower-thumb.jpg',
    oldPrice: 9.00,
    newPrice: 7.00,
    productDescription: 'Fresh Cauliflower!',
    rating: 2
  },
  {
    productLabel: 'Ivy Gourd',
    altDetailsImage: 'Ivy Gourd Product Image',
    productImagePath: 'img/products/Ivy_gourd.jpg',
    oldPrice: 15.00,
    newPrice: 12.00,
    productDescription: 'Indian Ivy Gourd',
    rating: 3
  },
  {
    productLabel: 'Long Squash',
    altDetailsImage: 'Long Squash Product Image',
    productImagePath: 'img/products/long_squash.jpg',
    oldPrice: 9.00,
    newPrice: 6.00,
    productDescription: 'Fresh Long Squash',
    rating: 4
  },
  {
    productLabel: 'Mangoes',
    altDetailsImage: 'Mangoes Product Image',
    productImagePath: 'img/products/mangoes.jpg',
    oldPrice: 50.00,
    newPrice: 45.00,
    productDescription: 'Delicious Alphonso Mangoes',
    rating: 3
  },
  {
    productLabel: 'Oranges',
    altDetailsImage: 'Orange Product Image',
    productImagePath: 'img/products/Oranges.jpg',
    oldPrice: 50.00,
    newPrice: 39.00,
    productDescription: 'Rich in Vitamin C',
    rating: 4
  }
];

//Code to load data of dummy filtered grocery products.
// let filteredResultsDiv = document.querySelector('.results');

// products.forEach((product) => {
//     let newProductElement = document.createElement(`article`);
//     newProductElement.classList.add(`product`);
//     newProductElement.innerHTML = `
//     <header>
//       <img src="${product.productImagePath}" alt="${product.altDetailsImage}">
//       <h3>${product.productLabel}</h3>
//       <data value="${product.newPrice}"><del>$${product.oldPrice}</del> <ins>$${product.newPrice}</ins></data>
//       <p>${product.productDescription}</p>
//       <dl>
//         <dt>Rating</dt>
//         <dd>${product.rating} <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
//       </dl>
//       <a href="#">see more</a>
//     </header>
//     <footer>
//       <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
//       <button type="button"><span class="material-icons">favorite</span></button>
//     </footer>
//     `
//     filteredResultsDiv.appendChild(newProductElement);
// });

// let productRatingValue = 4;
const filteredResultsSection = document.querySelector(`#filteredResults`);

const ratingFilter = document.querySelectorAll(`input[name="rating"]`);
let selectedRatingValue;

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
      <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
      <button type="button"><span class="material-icons">favorite</span></button>
    </footer>
    `
    filteredResultsSection.appendChild(newProductElement);
  })
}

const filterProducts = function() {
  let filteredProductArray = products.filter(function(product) {
    return (product.rating == selectedRatingValue)
  })

  setProductsInFilterResults(filteredProductArray);
}

if(ratingFilter !== null){

  for (const rating of ratingFilter) {
    rating.addEventListener("click", function(){
      selectedRatingValue = rating.value;
      filterProducts();
    });
  }
}

for (const rating of ratingFilter) {
    if (rating.checked) {
        selectedRatingValue = rating.value;
        filterProducts();
        break;
    }
}

