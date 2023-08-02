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
    paragraph.textContent = "Here is a space to be able to draw your thoughts and feelings of what you have learnt. Once you have finished your drawing you can press take a screenshot to see your image below! (you can take as many as you want). If you're stuck on what to draw, press the inpsire me button and hopefully you will feel more inspired!";
   whatToDo.appendChild(paragraph);
   isShowingRules = true;
    }
}
