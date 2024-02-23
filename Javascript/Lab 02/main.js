const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

const images = [];

for (let i = 1; i <= 5; i++) {
  images.push({
    src: `images/boi${i}.png`,
    alt: `Descrinção da imagem ${i}`,
  });
}

images.forEach((image) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image.src);
    newImage.setAttribute('alt', image.alt);
    newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', image.src);});
    thumbBar.appendChild(newImage); });

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.classList.contains('dark')) {
      btn.classList.remove('dark');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
      btn.classList.add('dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});