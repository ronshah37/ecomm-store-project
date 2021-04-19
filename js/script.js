
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