
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
    categoryImagePath: 'img/categories/vegetables-and-fruits-farmers-market.jpg'
  },
  {
    categoryLabel: 'Bakery and Dairy',
    altDetailsImage: 'Bakery and Dairy Category',
    categoryImagePath: 'img/categories/bakerycakesdiary-250x250-1.png'
  },
  {
    categoryLabel: 'Beauty and Hygiene',
    altDetailsImage: 'Beauty and Hygiene Category',
    categoryImagePath: 'img/categories/Beauty_and_Hygiene-270x270.jpg'
  },
  {
    categoryLabel: 'Cleaning Supplies',
    altDetailsImage: 'Cleaning Supplies Category',
    categoryImagePath: 'img/categories/cleaning-supplies-kit.jpg'
  },
  {
    categoryLabel: 'Click here for all categories...',
    altDetailsImage: 'All Categories',
    categoryImagePath: 'img/categories/arrow.jpg'
  }
];

//Code to load data of grocery categories.
let categoriesDiv = document.querySelector('.categories');

categories.forEach((category) => {
    let newCategoryElement = document.createElement(`div`);
    newCategoryElement.classList.add(`category`);
    newCategoryElement.innerHTML = `
    <img src="${category.categoryImagePath}" alt="${category.altDetailsImage}">
          <br>
          <span>${category.categoryLabel}</span>
          <!-- Ratings  -->
    `
    categoriesDiv.appendChild(newCategoryElement);
});