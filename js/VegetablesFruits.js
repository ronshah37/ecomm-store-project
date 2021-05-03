let products = [
{
    productLabel: 'Ivy Gourd',
    altDetailsImage: 'Ivy Gourd Product Image',
    productImagePath: 'img/products/Ivy_gourd.jpg',
    oldPrice: 15.00,
    newPrice: 12.00,
    productDescription: 'Indian Ivy Gourd',
    rating: 4.4
},
{
    productLabel: 'Long Squash',
    altDetailsImage: 'Long Squash Product Image',
    productImagePath: 'img/products/long_squash.jpg',
    oldPrice: 9.00,
    newPrice: 6.00,
    productDescription: 'Fresh Long Squash',
    rating: 4.4
},
{
    productLabel: 'Mangoes',
    altDetailsImage: 'Mangoes Product Image',
    productImagePath: 'img/products/mangoes.jpg',
    oldPrice: 50.00,
    newPrice: 45.00,
    productDescription: 'Delicious Alphonso Mangoes',
    rating: 4.4
},
{
    productLabel: 'Oranges',
    altDetailsImage: 'Orange Product Image',
    productImagePath: 'img/products/Oranges.jpg',
    oldPrice: 50.00,
    newPrice: 39.00,
    productDescription: 'Rich in Vitamin C',
    rating: 4.4
}
];

let VFCategoryProductsSection = document.querySelector('#VFCategoryProducts');

products.forEach((product) => {
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
    VFCategoryProductsSection.appendChild(newProductElement)
});

let suggestedProducts = [
    {
        productLabel: 'Apples',
        altDetailsImage: 'Apple Product Image',
        productImagePath: 'img/products/apples.jpg',
        oldPrice: 15.00,
        newPrice: 10.00,
        productDescription: 'Delicious super gala apples.',
        rating: 4.4
    },
    {
        productLabel: 'Cauliflower',
        altDetailsImage: 'Cauliflower Product Image',
        productImagePath: 'img/products/cauliflower-thumb.jpg',
        oldPrice: 9.00,
        newPrice: 7.00,
        productDescription: 'Fresh Cauliflower!',
        rating: 4.4
    }
];

let VFSuggestedProductsSection = document.querySelector('#VFSuggestedProducts');

suggestedProducts.forEach((product) => {
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
    VFSuggestedProductsSection.appendChild(newProductElement)
});