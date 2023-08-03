let penColor = 'black';
let penStrokeWeight = 8;

function setup() {
  drawingCanvas = createCanvas(600, 550);
  drawingCanvas.parent('drawing'); 
  strokeWeight(8);
  stroke(penColor);
}

const changeColorButton = document.querySelector('#changeColor');
const  colorPicker = document.querySelector('#colorPicker');
const strokeSizeSlider = document.querySelector('#strokeSizeSlider');
const strokeSizeLabel = document.querySelector('#strokeSizeLabel');
const eraseButton = document.querySelector('#eraseDrawing');
const takeScreenshotButton = document.querySelector('#takeScreenshot')
const imageGallery = document.querySelector('#imageGallery')
const inspireMeButton = document.querySelector('#inspire')
const imageBox = document.querySelector('#imageBox')
const imageElement = document.querySelector('#imageElement')
const imageDescription = document.querySelector('#imageDescription')

changeColorButton.addEventListener('click', changeColor);

colorPicker.addEventListener('change', updateColor);

strokeSizeSlider.addEventListener('input', updateStrokeSize);

eraseButton.addEventListener('click', eraseDrawing)

takeScreenshotButton.addEventListener('click', takeScreenshot)



function takeScreenshot() {
    const canvas = document.querySelector('canvas')
    const screenShotUrl = canvas.toDataURL();
    displayScreenshot(screenShotUrl);
    eraseDrawing();
}

function displayScreenshot(imageURL) {
    const screenshotDiv = document.createElement('div');
    screenshotDiv.classList.add('screenshot');
    const screenShotImage = document.createElement('img');
    screenShotImage.src = imageURL;
 
    screenShotImage.width = 200; 
    screenShotImage.height = 200;
    imageGallery.appendChild(screenshotDiv);
    screenshotDiv.appendChild(screenShotImage)

}


function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function changeColor() {
  let colorPicker = document.getElementById('colorPicker');
  colorPicker.click(); 
}

function updateColor() {
  let colorPicker = document.getElementById('colorPicker');
  penColor = colorPicker.value;
  stroke(penColor); 
}

function updateStrokeSize() {
    let strokeSizeSlider = document.getElementById('strokeSizeSlider');
    penStrokeWeight = strokeSizeSlider.value;
    strokeWeight(penStrokeWeight); 
    let strokeSizeLabel = document.getElementById('strokeSizeLabel');
    strokeSizeLabel.textContent = penStrokeWeight; 
  }

function eraseDrawing() {
  background(255); 
}

const whatToDo = document.querySelector('h2')
let isShowingRules = false;


whatToDo.addEventListener('click', toggleRules)


function toggleRules() {
    if (isShowingRules) {
        const paragraph = whatToDo.querySelector('p');
        if (paragraph) {
            whatToDo.removeChild(paragraph);
        }
        isShowingRules = false;
    } else {
        const paragraph = document.createElement('p');
    paragraph.textContent = "Here, you have the unique opportunity to express and visualise your newfound knowledge by drawing your impressions and learnings about this beautiful country. Get creative and use our drawing tool to depict the landscapes, culture, and iconic landmarks of Uruguay. Additionally, you can take inspiration from a collection of captivating Uruguayan artworks showcased on the page by pressing the 'inspire me' button. To get rid of the inspiration picture, just press the image and it will disappear. Let your imagination flow, and once you're satisfied with your artwork, simply press the 'Take a Screenshot' button to save and admire your creation. So, immerse yourself in the rich heritage of Uruguay and let your drawings tell the story of your discoveries! If you want to make multiple artworks, press take a screenshot and see your gallery build up below! ";
   whatToDo.appendChild(paragraph);
   isShowingRules = true;
    }
}

async function getRandomImage() {
  try {
    const response = await fetch('/getRandomImage');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('There has been an error loading the image');
    return null;
  }
}

async function showRandomImage() {
  imageBox.style.display = 'block';
  
// })
  const randomImage = await getRandomImage();
  if (randomImage) {
    imageElement.src = randomImage.imageUrl;
    imageDescription.textContent = randomImage.description;
  }
}

function hideImageBox() {
  // Hide the image box
  imageBox.style.display = 'none';
}

inspireMeButton.addEventListener('click', showRandomImage);

imageBox.addEventListener('click', hideImageBox)



// Art description 
// The area that is today’s Uruguay was populated during pre-Columbian times by non-resident tribes. These left behind a few ceramic objects of ceremonial nature. During colonial times, Uruguay’s culture was influenced by the Guarani culture that had developed in Jesuit missions in northeastern Argentina.

// After independence in the early 19th century, art life was dominated by academics such as history painter Juan Manuel Blanes. At the turn of the century, several artists who studied in Europe took the impression of Impressionism, e.g. Carlos María Herrera and Carlos Federico Sáez. Rafael Barradas, Pedro Figari and Joaquín Torres García introduced modernism, and Torres García founded the Taller Torres García art school in 1944, which would have great significance. In this school, among other things, Julio Alpuy, Guillermo Fernández, Gonzalo Fonseca, Francisco Matto, Manuel Pailós and Augusto and Horacio Torres.

// Uruguay’s most important art museums are the Museo Nacional de Artes Visuales, the Museo Juan Manuel Blanes and the Museo Torres García, all in Montevideo.
