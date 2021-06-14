let products = [
{
    productLabel: 'Ivy Gourd',
    altDetailsImage: 'Ivy Gourd Product Image',
    productImagePath: 'img/products/Ivy_gourd.jpg',
    oldPrice: 15.00,
    newPrice: 12.00,
    productDescription: 'Indian Ivy Gourd',
    rating: 3,
    deliveryTypes: [`one_day`, `two_days`],
    discount: [`ten_percent`],
    favoriteClass: `unselected-favorite`,
    favoriteContent: `favorite_border`
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
    discount: [`thirty_percent`],
    favoriteClass: `unselected-favorite`,
    favoriteContent: `favorite_border`
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
    discount: [`forty_percent`],
    favoriteClass: `selected-favorite`,
    favoriteContent: `favorite`
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
    discount: [`twenty_percent`],
    favoriteClass: `selected-favorite`,
    favoriteContent: `favorite`
  }
];

const fullStar = `<span class="material-icons rating-star"> star </span>`;
const starBorder = `<span class="material-icons rating-star"> star_border </span>`;
const halfStar = `<span class="material-icons rating-star"> star_half </span>`;
let starsMap = new Map();

function getStarString(ratings) {
  let index = 0;
  let stars = [];

  if (starsMap.get(ratings) !== undefined) {
    //
    return starsMap.get(ratings);
    //
  } else {
    //
    if (Number.isInteger(ratings)) {
      //
      for (index = 0; index < ratings; index++) {
        stars.push(fullStar);
      }
      //
    } else {
      //
      for (index = 0; index < Math.floor(ratings); index++) {
        stars.push(fullStar);
      }
      stars.push(halfStar);
      //
    }

    for (index = stars.length; index < 5; index++) {
      stars.push(starBorder);
    }
    //
    let starString = stars.join(``);
    //
    starsMap.set(ratings, starString);
    //
    return starString;
  }
}

let VFCategoryProductsSection = document.querySelector('#VFCategoryProducts');

products.forEach((product) => {
    let starString = getStarString(product.rating);

    let newProductElement = document.createElement(`article`);
    newProductElement.classList.add(`product`);
    newProductElement.innerHTML = `
    <header>
      <img src="${product.productImagePath}" alt="${product.altDetailsImage}">
      <h3>${product.productLabel}</h3>
      <data value="${product.newPrice}"><del>$${product.oldPrice}</del> <span class="new-price"> <ins>$${product.newPrice}</ins> <span> </data>
      <p>${product.productDescription}</p>
      <dl>
        <dd> ${starString} </dd>
      </dl>
    </header>
    <footer class="product-footer">
      <button type="button" class="add-to-cart"> Add to Cart </button>
      <button type="button" class="favorite-button"><span class="material-icons ${product.favoriteClass}">${product.favoriteContent}</span></button>
    </footer>
    `

    VFCategoryProductsSection.appendChild(newProductElement);
});

let suggestedProducts = [
    {
        productLabel: 'Apples',
        altDetailsImage: 'Apple Product Image',
        productImagePath: 'img/products/apples.jpg',
        oldPrice: 15.00,
        newPrice: 10.00,
        productDescription: 'Delicious super gala apples.',
        rating: 1,
        deliveryTypes: [`two_hours`, `one_day`],
        discount: [`ten_percent`],
        favoriteClass: `selected-favorite`,
        favoriteContent: `favorite`
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
        discount: [`fifty_percent`],
        favoriteClass: `selected-favorite`,
        favoriteContent: `favorite`
    }
];

let VFSuggestedProductsSection = document.querySelector('#VFSuggestedProducts');

suggestedProducts.forEach((product) => {
    let starString = getStarString(product.rating);

    let newProductElement = document.createElement(`article`);
    newProductElement.classList.add(`product`);
    newProductElement.innerHTML = `
    <header>
      <img src="${product.productImagePath}" alt="${product.altDetailsImage}">
      <h3>${product.productLabel}</h3>
      <data value="${product.newPrice}"><del>$${product.oldPrice}</del> <span class="new-price"> <ins>$${product.newPrice}</ins> <span> </data>
      <p>${product.productDescription}</p>
      <dl>
        <dd> ${starString} </dd>
      </dl>
    </header>
    <footer class="product-footer">
      <button type="button" class="add-to-cart"> Add to Cart </button>
      <button type="button" class="favorite-button"><span class="material-icons ${product.favoriteClass}">${product.favoriteContent}</span></button>
    </footer>
    `
    
    VFSuggestedProductsSection.appendChild(newProductElement)
});