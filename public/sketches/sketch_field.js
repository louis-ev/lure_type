// LETTER
var typeX, typeXSlider;
var typeY, typeYSlider;
var typeStroke, typeStrokeSlider;
var strecherXslider, strecherXsize;
var strecherX = 0;
var strecherYslider, strecherYsize;
var strecherY = 0;

// FIELD
var column, columnSlider;
var row, rowSlider;
var tracking, trackSlider;
var lineSpace, lineSpaceSlider;
var xSpace, ySpace;

// WAVE
var speed, speedSlider;
var xOffset, xOffsetSlider;
var yOffset, yOffsetSlider;
var zWave, zWaveSlider, zWaveCheck;
var zWaver = 0;
var zWaveChecked = 0;
var xWave, xWaveSlider, xWaveCheck;
var xWaver = 0;
var xWaveChecked = 0;
var yWave, yWaveSlider, yWaveCheck;
var yWaver = 0;
var yWaveChecked = 0;
var yWavezRot, yWavezRotSlider;
var yWavezRoter = 0;
var yWavexStr, yWavexStrSlider;
var yWavexStrer = 0;
var xStrechWave, xStrechWaveSlider, xStrechWaveCheck;
var xStrechWave = 0;
var xStrechWaveChecked = 0;
var yStrechWave, yStrechWaveSlider, yStrechWaveCheck;
var yStrechWave = 0;
var yStrechWaveChecked = 0;

// CAMERA
var xRotCamera, yRotCamera, zRotCamera;
var xRotCameraSlider, yRotCameraSlider, zRotCameraSlider;
var zoomCamera, zoomCameraSlider;

// STRING
var letter_select, inp, inpText;
var myText = [];
var runLength;
var fullTextCheck, fullText;

// COLOR
var invertCheck;
var strkColor = 0;
var bkgdColor = 255;

// SAVE
var exportButton;

// PRESETS
var presetStacks,
  presetBricks,
  presetSimpleZ,
  presetComplexZ,
  presetZebra,
  presetHarlequin;

// SAVE BETA
var gifLength = 314;
var gifStart, gifEnd;
var gifRecord = false;
var canvas;

var capturer = new CCapture({
  framerate: 60,
  format: 'gif',
  workersPath: window.public_url + 'gif/',
  verbose: true
});

function preload() {
  window.font = loadFont(window.public_url + 'fonts/' + window.font_filename);
}

function setup() {
  strkColor = color(0);
  bkgdColor = color(255);

  createCanvas(windowWidth, windowHeight, WEBGL);
  background(bkgdColor);
  smooth();
  textFont(font);

  inp = select('#textfield');

  columnSlider = createSlider(1, 200, 33);
  columnSlider.position(25, 17);
  columnSlider.style('width', '100px');
  rowSlider = createSlider(1, 200, 7);
  rowSlider.position(25, 47);
  rowSlider.style('width', '100px');
  trackingSlider = createSlider(-10, 100, 5);
  trackingSlider.position(25, 77);
  trackingSlider.style('width', '100px');
  lineSpaceSlider = createSlider(-10, 100, 5);
  lineSpaceSlider.position(25, 107);
  lineSpaceSlider.style('width', '100px');

  typeXSlider = createSlider(0, 100, 20);
  typeXSlider.position(25, 147);
  typeXSlider.style('width', '100px');
  typeYSlider = createSlider(0, 100, 40);
  typeYSlider.position(25, 177);
  typeYSlider.style('width', '100px');
  typeStrokeSlider = createSlider(0, 10, 2, 0.1);
  typeStrokeSlider.position(25, 207);
  typeStrokeSlider.style('width', '100px');

  speedSlider = createSlider(-10, 10, 2);
  speedSlider.position(25, 247);
  speedSlider.style('width', '100px');
  xOffsetSlider = createSlider(0.1, 60, PI);
  xOffsetSlider.position(25, 277);
  xOffsetSlider.style('width', '100px');
  yOffsetSlider = createSlider(0.1, 60, PI);
  yOffsetSlider.position(25, 307);
  yOffsetSlider.style('width', '100px');

  zWaveSlider = createSlider(0, 200, 0);
  zWaveSlider.position(25, 347);
  zWaveSlider.style('width', '100px');
  zWaveCheck = createCheckbox('', false);
  zWaveCheck.position(130, 346);
  xWaveSlider = createSlider(0, 200, 0);
  xWaveSlider.position(25, 377);
  xWaveSlider.style('width', '100px');
  xWaveCheck = createCheckbox('', false);
  xWaveCheck.position(130, 376);
  yWaveSlider = createSlider(0, 200, 0);
  yWaveSlider.position(25, 407);
  yWaveSlider.style('width', '100px');
  yWaveCheck = createCheckbox('', false);
  yWaveCheck.position(130, 406);
  yWavezRotSlider = createSlider(0, 60, 0);
  yWavezRotSlider.position(45, 436);
  yWavezRotSlider.style('width', '50px');
  yWavexStrSlider = createSlider(0, 60, 0);
  yWavexStrSlider.position(110, 436);
  yWavexStrSlider.style('width', '50px');
  xStrechWaveSlider = createSlider(0, 100, 0);
  xStrechWaveSlider.position(25, 467);
  xStrechWaveSlider.style('width', '100px');
  xStrechWaveCheck = createCheckbox('', false);
  xStrechWaveCheck.position(130, 466);
  yStrechWaveSlider = createSlider(0, 100, 0);
  yStrechWaveSlider.position(25, 497);
  yStrechWaveSlider.style('width', '100px');
  yStrechWaveCheck = createCheckbox('', false);
  yStrechWaveCheck.position(130, 496);

  invertCheck = createCheckbox('', false);
  invertCheck.position(140, 60);
  fullTextCheck = createCheckbox('', false);
  fullTextCheck.position(140, 90);
  xRotCameraSlider = createSlider(-180, 180, 0);
  xRotCameraSlider.position(-20, height - 107);
  xRotCameraSlider.style('width', '100px');
  xRotCameraSlider.style('rotate', 270);
  yRotCameraSlider = createSlider(-180, 180, 0);
  yRotCameraSlider.position(20, height - 107);
  yRotCameraSlider.style('width', '100px');
  yRotCameraSlider.style('rotate', 270);
  zRotCameraSlider = createSlider(-180, 180, 0);
  zRotCameraSlider.position(60, height - 107);
  zRotCameraSlider.style('width', '100px');
  zRotCameraSlider.style('rotate', 270);
  zoomCameraSlider = createSlider(-500, 500, 0);
  zoomCameraSlider.position(15, height - 20);
  zoomCameraSlider.style('width', '100px');

  exportButton = createButton('Export PNG');
  exportButton.position(140, 20);
  exportButton.mousePressed(exportPNG);
  presetStacks = createButton('Stacks');
  presetStacks.position(140, height - 30);
  presetStacks.mousePressed(stackSet);
  presetBricks = createButton('Bricks');
  presetBricks.position(200, height - 30);
  presetBricks.mousePressed(brickSet);
  presetSimpleZ = createButton('Simple Z');
  presetSimpleZ.position(260, height - 30);
  presetSimpleZ.mousePressed(simpleZSet);
  presetComplexZ = createButton('Complex Z');
  presetComplexZ.position(335, height - 30);
  presetComplexZ.mousePressed(complexZSet);
  presetZebra = createButton('Zebra');
  presetZebra.position(420, height - 30);
  presetZebra.mousePressed(zebraSet);
  presetHarlequin = createButton('Harlequin');
  presetHarlequin.position(480, height - 30);
  presetHarlequin.mousePressed(harlequinSet);

  zWaveCheck.changed(zWaveChecker);
  xWaveCheck.changed(xWaveChecker);
  yWaveCheck.changed(yWaveChecker);
  xStrechWaveCheck.changed(xStrechWaveChecker);
  yStrechWaveCheck.changed(yStrechWaveChecker);
  fullTextCheck.changed(fullTexter);
  invertCheck.changed(inverter);

  saveLoopSet = createButton('Save Loop');
  saveLoopSet.position(147, 180);
  saveLoopSet.mousePressed(saveLoop);

  stackSet();
}

function draw() {
  background(bkgdColor);
  letter_select = 0;
  inpText = String(inp.value());

  column = columnSlider.value();
  row = rowSlider.value();
  tracking = trackingSlider.value();
  lineSpace = lineSpaceSlider.value();

  speed = speedSlider.value();
  zWave = zWaveSlider.value();
  xWave = xWaveSlider.value();
  yWave = yWaveSlider.value();
  yWavezRot = yWavezRotSlider.value();
  yWavexStr = yWavexStrSlider.value();
  xStrechWave = xStrechWaveSlider.value();
  yStrechWave = yStrechWaveSlider.value();

  xOffset = xOffsetSlider.value();
  yOffset = yOffsetSlider.value();

  typeX = typeXSlider.value();
  typeY = typeYSlider.value();
  typeStroke = typeStrokeSlider.value();

  xRotCamera = xRotCameraSlider.value();
  yRotCamera = yRotCameraSlider.value();
  zRotCamera = zRotCameraSlider.value();
  zoomCamera = zoomCameraSlider.value();

  xSpace = typeX + tracking;
  ySpace = typeY + lineSpace + yStrechWave / 2;

  if (gifRecord) {
  } else {
    push();
    translate(-width / 2, -height / 2);

    stroke(strkColor);
    strokeWeight(1);
    line(10, 130, 130, 130);
    line(10, 230, 130, 230);
    line(10, 330, 130, 330);
    line(10, 520, 130, 520);
    line(185, height - 43, 500, height - 43);

    fill(strkColor);
    textAlign(LEFT);

    textSize(13);
    rotateZ(-PI / 2);
    text('GRID', -120, 17);
    text('TYPE', -220, 17);
    text('WAVE', -320, 17);
    text('AMPLITUDE', -510, 17);
    rotateZ(PI / 2);

    textSize(9);
    text('GRID: Columns ' + column, 25, 16);
    text('GRID: Rows ' + row, 25, 46);
    text('GRID: Tracking ' + tracking, 25, 76);
    text('GRID: Line Space ' + lineSpace, 25, 106);

    text('TYPE: X-Scale ' + typeX, 25, 146);
    text('TYPE: Y-Scale ' + typeY, 25, 176);
    text('TYPE: Weight ' + typeStroke, 25, 206);

    text('WAVE: Speed ' + speed, 25, 246);
    text('WAVE: X Size' + xOffset, 25, 276);
    text('WAVE: Y Size ' + yOffset, 25, 306);

    text('AMPLITUDE: Z Axis ' + zWave, 25, 346);
    text('OFFSET', 150, 360);
    text('AMPLITUDE: X Axis ' + xWave, 25, 376);
    text('OFFSET', 150, 390);
    text('AMPLITUDE: Y Axis ' + yWave, 25, 406);
    text('OFFSET', 150, 420);
    text('Z Smooth ' + yWavezRot, 45, 435);
    text('X Stretch ' + yWavexStr, 110, 435);
    text('AMPLITUDE: X Stretch ' + xStrechWave, 25, 466);
    text('OFFSET', 150, 480);
    text('AMPLITUDE: Y Stretch ' + yStrechWave, 25, 496);
    text('OFFSET', 150, 510);

    text('INVERT', 158, 74);
    text('FULL TEXT', 158, 104);
    text('CAMERA: Zoom', 15, height - 22);
    text('PRESETS', 145, height - 40);

    translate(0, height);
    rotateZ(-PI / 2);
    text('CAMERA: X-Rotation ' + xRotCamera, 45, 20);
    text('CAMERA: Y-Rotation ' + yRotCamera, 45, 60);
    text('CAMERA: Z-Rotation ' + zRotCamera, 45, 100);

    pop();
  }

  noFill();
  strokeWeight(typeStroke);
  stroke(strkColor);

  push();
  // camera
  translate(0, 0, zoomCamera);
  rotateX(radians(xRotCamera));
  rotateY(radians(yRotCamera));
  rotateZ(radians(zRotCamera));

  if (fullText == true) {
    runLength = row * column;
    translate((-column * xSpace) / 2, (-row * ySpace) / 2);
  } else {
    runLength = inpText.length;
    if (inpText.length >= column) {
      translate(
        (-column * xSpace) / 2,
        (-floor(inpText.length / column) * ySpace) / 2
      );
    } else {
      translate(
        (-inpText.length * xSpace) / 2,
        (-floor(inpText.length / column) * ySpace) / 2
      );
    }
  }

  // THE TYPE
  for (var i = 0; i < runLength; i++) {
    if (fullText == true) {
      letter_select = i % inpText.length;
    } else {
      letter_select = i;
    }

    if (zWave != 0) {
      zWaver =
        sinEngine(
          zWaveChecked,
          xOffset,
          i % column,
          yOffset,
          floor(i / column),
          speed,
          1
        ) * zWave;
    }
    if (xWave != 0) {
      xWaver = map(
        sinEngine(
          xWaveChecked,
          xOffset,
          i % column,
          yOffset,
          floor(i / column),
          speed,
          1
        ),
        -1,
        1,
        0,
        xWave
      );
    }
    if (yWave != 0) {
      yWaver =
        sinEngine(
          yWaveChecked,
          xOffset,
          i % column,
          yOffset,
          floor(i / column),
          speed,
          1
        ) * yWave;
    }
    //  if(yWavezRot != 0){
    yWavezRoter =
      cosEngine(
        yWaveChecked,
        xOffset,
        i % column,
        yOffset,
        floor(i / column),
        speed,
        1
      ) * yWavezRot;
    //  }
    //  if(yWavexStr != 0){
    yWavexStrer = map(
      cosEngine2(
        yWaveChecked,
        xOffset,
        i % column,
        yOffset,
        floor(i / column),
        speed,
        1
      ),
      -1,
      1,
      0,
      yWavexStr
    );
    //  }
    //  if(xStrechWave != 0 || yWavexStr != 0){
    strecherX =
      map(
        sinEngine(
          xStrechWaveChecked,
          xOffset,
          i % column,
          yOffset,
          floor(i / column),
          speed,
          1
        ),
        -1,
        1,
        0,
        xStrechWave
      ) + yWavexStrer;
    //  }
    //  if(yStrechWave != 0){
    if (floor(i / column) % 2 == 1) {
      strecherY = map(
        sinEngine(
          yStrechWaveChecked,
          xOffset,
          i % column,
          yOffset,
          floor(i / column),
          speed,
          1
        ),
        -1,
        1,
        0,
        yStrechWave
      );
    } else {
      strecherY = map(
        sinEngine(
          yStrechWaveChecked + PI,
          xOffset,
          i % column,
          yOffset,
          floor(i / column),
          speed,
          1
        ),
        -1,
        1,
        0,
        yStrechWave
      );
    }
    //  }

    push();
    translate(
      (i % column) * xSpace + xWaver,
      floor(i / column) * ySpace + yWaver,
      zWaver
    );
    translate(-(typeX + strecherX) / 2, -(typeY + strecherY) / 2);

    // rotation adjustments
    var preZAnchX =
      sinEngine(
        zWaveChecked,
        xOffset,
        (i % column) - 1,
        yOffset,
        floor(i / column),
        speed,
        1
      ) * zWave;
    var postZAnchX =
      sinEngine(
        zWaveChecked,
        xOffset,
        (i % column) + 1,
        yOffset,
        floor(i / column),
        speed,
        1
      ) * zWave;
    var diffZAnchorX = postZAnchX - preZAnchX;
    var newYrot = atan2(abs(diffZAnchorX), 2 * xSpace);
    if (preZAnchX > postZAnchX) {
      rotateY(newYrot);
    } else {
      rotateY(-newYrot);
    }

    var preZAnchY =
      sinEngine(
        zWaveChecked,
        xOffset,
        i % column,
        yOffset,
        floor(i / column) - 1,
        speed,
        1
      ) * zWave;
    var postZAnchY =
      sinEngine(
        zWaveChecked,
        xOffset,
        i % column,
        yOffset,
        floor(i / column) + 1,
        speed,
        1
      ) * zWave;
    var diffZAnchorY = postZAnchY - preZAnchY;
    var newXrot = atan2(abs(diffZAnchorY), 2 * ySpace);
    if (preZAnchY > postZAnchY) {
      rotateX(-newXrot);
    } else {
      rotateX(newXrot);
    }

    rotateZ(radians(yWavezRoter));
    keyboardEngine();
    pop();
  }

  pop();

  if (gifRecord == true && frameCount == gifStart + 1) {
    capturer.start();
    capturer.capture(canvas);
    print('start');
  } else if (gifRecord == true && frameCount <= gifEnd) {
    capturer.capture(canvas);
    //      print("record");
  } else if (gifRecord == true && frameCount == gifEnd + 1) {
    capturer.stop();
    capturer.save();
    print('stop');
    gifRecord = false;
  }
}

function sinEngine(
  Offset,
  xLength,
  xCounter,
  yLength,
  yCounter,
  Speed,
  slopeN
) {
  var sinus = sin(
    (frameCount * Speed) / 100 +
      xCounter / xLength +
      yCounter / yLength +
      Offset
  );
  var sign = sinus >= 0 ? 1 : -1;
  var sinerSquare = sign * (1 - pow(1 - abs(sinus), slopeN));
  return sinerSquare;
}

function cosEngine(
  Offset,
  xLength,
  xCounter,
  yLength,
  yCounter,
  Speed,
  slopeN
) {
  var cosus = cos(
    (frameCount * Speed) / 100 +
      xCounter / xLength +
      yCounter / yLength +
      Offset
  );
  var sign = cosus >= 0 ? 1 : -1;
  var coserSquare = sign * (1 - pow(1 - abs(cosus), slopeN));
  return coserSquare;
}

function cosEngine2(
  Offset,
  xLength,
  xCounter,
  yLength,
  yCounter,
  Speed,
  slopeN
) {
  var cosus = cos(
    ((frameCount * Speed) / 100 +
      xCounter / xLength +
      yCounter / yLength +
      Offset) *
      2
  );
  var sign = cosus >= 0 ? 1 : -1;
  var coserSquare = sign * (1 - pow(1 - abs(cosus), slopeN));
  return coserSquare;
}

function fullTexter() {
  if (this.checked()) {
    fullText = true;
  } else {
    fullText = false;
  }
}

function zWaveChecker() {
  if (this.checked()) {
    zWaveChecked = PI;
  } else {
    zWaveChecked = 0;
  }
}

function xWaveChecker() {
  if (this.checked()) {
    xWaveChecked = PI;
  } else {
    xWaveChecked = 0;
  }
}

function yWaveChecker() {
  if (this.checked()) {
    yWaveChecked = PI;
  } else {
    yWaveChecked = 0;
  }
}

function xStrechWaveChecker() {
  if (this.checked()) {
    xStrechWaveChecked = PI / 2;
  } else {
    xStrechWaveChecked = 0;
  }
}

function yStrechWaveChecker() {
  if (this.checked()) {
    yStrechWaveChecked = PI / 2;
  } else {
    yStrechWaveChecked = 0;
  }
}

function inverter() {
  if (this.checked()) {
    strkColor = color(255);
    bkgdColor = color(0);
  } else {
    strkColor = color(0);
    bkgdColor = color(255);
  }
}

function exportPNG() {
  saveCanvas('STG_field', 'png');
}

function reSetting() {
  yWaver = 0;
  columnSlider.value(33);
  rowSlider.value(7);
  trackingSlider.value(5);
  lineSpaceSlider.value(5);
  typeXSlider.value(20);
  typeYSlider.value(40);
  typeStrokeSlider.value(2);
  speedSlider.value(-2);
  xOffsetSlider.value(3.1);
  yOffsetSlider.value(3.1);
  xWaveSlider.value(0);
  zWaveSlider.value(0);
  xStrechWaveSlider.value(0);
  yStrechWaveSlider.value(0);
  yWaveSlider.value(0);
  yWavezRotSlider.value(0);
  yWavexStrSlider.value(0);
  xRotCameraSlider.value(0);
  yRotCameraSlider.value(0);
  zRotCameraSlider.value(0);
  zoomCameraSlider.value(0);

  xStrechWaveCheck.checked(false);
  xStrechWaveChecked = 0;
  fullTextCheck.checked(false);
  fullText = false;
  invertCheck.checked(false);
  strkColor = color(0);
  bkgdColor = color(255);
}

function stackSet() {
  reSetting();
  columnSlider.value(22);
  rowSlider.value(8);
  trackingSlider.value(4);
  lineSpaceSlider.value(12);
  typeXSlider.value(20);
  typeYSlider.value(18);
  speedSlider.value(-3);
  xOffsetSlider.value(5.1);
  yOffsetSlider.value(59.1);
  yWaveSlider.value(100);
  yWavezRotSlider.value(35);
  yWavexStrSlider.value(7);

  fullTextCheck.checked(true);
  fullText = true;
}

function brickSet() {
  reSetting();
  columnSlider.value(20);
  rowSlider.value(9);
  trackingSlider.value(17);
  lineSpaceSlider.value(7);
  typeXSlider.value(13);
  typeYSlider.value(20);
  speedSlider.value(-4);
  xWaveSlider.value(86);
  xStrechWaveSlider.value(25);

  xStrechWaveCheck.checked(true);
  xStrechWaveChecked = PI / 2;
  fullTextCheck.checked(true);
  fullText = true;
  invertCheck.checked(true);
  strkColor = color(255);
  bkgdColor = color(0);
}

function simpleZSet() {
  reSetting();
  columnSlider.value(28);
  rowSlider.value(15);
  trackingSlider.value(5);
  lineSpaceSlider.value(5);
  typeXSlider.value(20);
  typeYSlider.value(40);
  speedSlider.value(-4);
  xOffsetSlider.value(9.1);
  zWaveSlider.value(90);
  xRotCameraSlider.value(33);
  yRotCameraSlider.value(-27);
  zRotCameraSlider.value(24);

  fullTextCheck.checked(true);
  fullText = true;
}

function complexZSet() {
  reSetting();
  columnSlider.value(38);
  rowSlider.value(10);
  trackingSlider.value(5);
  lineSpaceSlider.value(6);
  typeXSlider.value(8);
  typeYSlider.value(21);
  typeStrokeSlider.value(0.9);
  speedSlider.value(2);
  xOffsetSlider.value(4.1);
  yOffsetSlider.value(3.1);
  zWaveSlider.value(41);
  xWaveSlider.value(63);
  yWaveSlider.value(25);
  yWavezRotSlider.value(22);
  xRotCameraSlider.value(26);
  yRotCameraSlider.value(-39);
  zRotCameraSlider.value(15);
  zoomCameraSlider.value(200);

  yWaveCheck.checked(true);
  yWaveChecked = PI;
  fullTextCheck.checked(true);
  fullText = true;
  invertCheck.checked(true);
  strkColor = color(255);
  bkgdColor = color(0);
}

function zebraSet() {
  reSetting();
  columnSlider.value(50);
  rowSlider.value(8);
  trackingSlider.value(7);
  lineSpaceSlider.value(18.5);
  typeXSlider.value(6);
  typeYSlider.value(20);
  typeStrokeSlider.value(1);
  speedSlider.value(-4);
  xOffsetSlider.value(6.1);
  yOffsetSlider.value(5.1);
  yWaveSlider.value(33);
  yWavezRotSlider.value(18);
  yStrechWaveSlider.value(35);

  fullTextCheck.checked(true);
  fullText = true;
}

function harlequinSet() {
  reSetting();
  columnSlider.value(40);
  rowSlider.value(7);
  trackingSlider.value(5);
  lineSpaceSlider.value(11);
  typeXSlider.value(9);
  typeYSlider.value(19);
  typeStrokeSlider.value(1.1);
  speedSlider.value(2);
  xOffsetSlider.value(2.1);
  yOffsetSlider.value(59.1);
  yStrechWaveSlider.value(58);

  fullTextCheck.checked(true);
  fullText = true;
  invertCheck.checked(true);
  strkColor = color(255);
  bkgdColor = color(0);
}

function keyboardEngine() {
  //  if (letter_select >= inpText.length) {
  //      letter_space( strecherX,  strecherY, strecherShear);
  //  } else {

  c1 = inpText.charAt(letter_select);

  if (c1 == 'A') {
    letter_A(strecherX, strecherY);
  } else if (c1 == 'a') {
    letter_a(strecherX, strecherY);
  } else if (c1 == 'B') {
    letter_B(strecherX, strecherY);
  } else if (c1 == 'b') {
    letter_b(strecherX, strecherY);
  } else if (c1 == 'C') {
    letter_C(strecherX, strecherY);
  } else if (c1 == 'c') {
    letter_c(strecherX, strecherY);
  } else if (c1 == 'D') {
    letter_D(strecherX, strecherY);
  } else if (c1 == 'd') {
    letter_d(strecherX, strecherY);
  } else if (c1 == 'E') {
    letter_E(strecherX, strecherY);
  } else if (c1 == 'e') {
    letter_e(strecherX, strecherY);
  } else if (c1 == 'F') {
    letter_F(strecherX, strecherY);
  } else if (c1 == 'f') {
    letter_f(strecherX, strecherY);
  } else if (c1 == 'G') {
    letter_G(strecherX, strecherY);
  } else if (c1 == 'g') {
    letter_g(strecherX, strecherY);
  } else if (c1 == 'H') {
    letter_H(strecherX, strecherY);
  } else if (c1 == 'h') {
    letter_h(strecherX, strecherY);
  } else if (c1 == 'I') {
    letter_I(strecherX, strecherY);
  } else if (c1 == 'i') {
    letter_i(strecherX, strecherY);
  } else if (c1 == 'J') {
    letter_J(strecherX, strecherY);
  } else if (c1 == 'j') {
    letter_j(strecherX, strecherY);
  } else if (c1 == 'K') {
    letter_K(strecherX, strecherY);
  } else if (c1 == 'k') {
    letter_k(strecherX, strecherY);
  } else if (c1 == 'L') {
    letter_L(strecherX, strecherY);
  } else if (c1 == 'l') {
    letter_l(strecherX, strecherY);
  } else if (c1 == 'M') {
    letter_M(strecherX, strecherY);
  } else if (c1 == 'm') {
    letter_m(strecherX, strecherY);
  } else if (c1 == 'N') {
    letter_N(strecherX, strecherY);
  } else if (c1 == 'n') {
    letter_n(strecherX, strecherY);
  } else if (c1 == 'O') {
    letter_O(strecherX, strecherY);
  } else if (c1 == 'o') {
    letter_o(strecherX, strecherY);
  } else if (c1 == 'P') {
    letter_P(strecherX, strecherY);
  } else if (c1 == 'p') {
    letter_p(strecherX, strecherY);
  } else if (c1 == 'Q') {
    letter_Q(strecherX, strecherY);
  } else if (c1 == 'q') {
    letter_q(strecherX, strecherY);
  } else if (c1 == 'R') {
    letter_R(strecherX, strecherY);
  } else if (c1 == 'r') {
    letter_r(strecherX, strecherY);
  } else if (c1 == 'S') {
    letter_S(strecherX, strecherY);
  } else if (c1 == 's') {
    letter_s(strecherX, strecherY);
  } else if (c1 == 'T') {
    letter_T(strecherX, strecherY);
  } else if (c1 == 't') {
    letter_t(strecherX, strecherY);
  } else if (c1 == 'U') {
    letter_U(strecherX, strecherY);
  } else if (c1 == 'u') {
    letter_u(strecherX, strecherY);
  } else if (c1 == 'V') {
    letter_V(strecherX, strecherY);
  } else if (c1 == 'v') {
    letter_v(strecherX, strecherY);
  } else if (c1 == 'W') {
    letter_W(strecherX, strecherY);
  } else if (c1 == 'w') {
    letter_w(strecherX, strecherY);
  } else if (c1 == 'X') {
    letter_X(strecherX, strecherY);
  } else if (c1 == 'x') {
    letter_x(strecherX, strecherY);
  } else if (c1 == 'Y') {
    letter_Y(strecherX, strecherY);
  } else if (c1 == 'y') {
    letter_y(strecherX, strecherY);
  } else if (c1 == 'Z') {
    letter_Z(strecherX, strecherY);
  } else if (c1 == 'z') {
    letter_z(strecherX, strecherY);
  } else if (c1 == '_') {
    letter_underscore(strecherX, strecherY);
  } else if (c1 == '-') {
    letter_dash(strecherX, strecherY);
  } else if (c1 == '?') {
    letter_question(strecherX, strecherY);
  } else if (c1 == '.') {
    letter_period(strecherX, strecherY);
  } else if (c1 == '!') {
    letter_exclaim(strecherX, strecherY);
  } else if (c1 == ' ') {
    letter_space(strecherX, strecherY);
  } else if (c1 == ':') {
    letter_colon(strecherX, strecherY);
  } else if (c1 == ';') {
    letter_semicolon(strecherX, strecherY);
  } else if (c1 == ',') {
    letter_comma(strecherX, strecherY);
  } else if (c1 == '/') {
    letter_slash(strecherX, strecherY);
  } else if (c1 == '&') {
    letter_amp(strecherX, strecherY);
  } else if (c1 == '1') {
    one(strecherX, strecherY);
  } else if (c1 == '2') {
    two(strecherX, strecherY);
  } else if (c1 == '3') {
    three(strecherX, strecherY);
  } else if (c1 == '4') {
    four(strecherX, strecherY);
  } else if (c1 == '5') {
    five(strecherX, strecherY);
  } else if (c1 == '6') {
    six(strecherX, strecherY);
  } else if (c1 == '7') {
    seven(strecherX, strecherY);
  } else if (c1 == '8') {
    eight(strecherX, strecherY);
  } else if (c1 == '9') {
    nine(strecherX, strecherY);
  } else if (c1 == '0') {
    zero(strecherX, strecherY);
  }
  //  }
}
/////////////////////////////////////////////////// LETTERS

function letter_A(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY + strY);
  vertex(typeX / 2 + strX / 2, 0);
  vertex(typeX + strX, typeY + strY);
  endShape();

  ang = atan((typeX / 2 + strX / 2) / (typeY + strY));
  angX = tan(ang) * (typeY / 3);

  line(
    angX,
    (2 * typeY) / 3 + strY,
    typeX + strX - angX,
    (2 * typeY) / 3 + strY
  );
  pop();
}

function letter_a(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY + strY);
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  endShape();

  beginShape();
  vertex(typeX + strX, (3 * typeY) / 4 + strY);
  vertex(typeX + strX, (3 * typeY) / 4);
  bezierVertex(
    typeX + strX,
    (3 * typeY) / 4,
    typeX + strX,
    typeY / 2,
    typeX / 2 + strX,
    typeY / 2
  );
  vertex(typeX / 2, typeY / 2);
  bezierVertex(0, typeY / 2, 0, (3 * typeY) / 4, 0, (3 * typeY) / 4);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  pop();
}

function letter_B(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY + strY);
  vertex(0, 0);
  vertex(typeX / 2 + strX, 0);
  bezierVertex(typeX / 2 + strX, 0, typeX + strX, 0, typeX + strX, typeY / 4);
  vertex(typeX + strX, typeY / 4 + strY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2,
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2
  );
  vertex(0, typeY / 2 + strY / 2);
  endShape();

  //repeat top hump
  push();
  translate(0, typeY / 2 + strY / 2);
  beginShape();
  vertex(0, 0);
  vertex(typeX / 2 + strX, 0);
  bezierVertex(typeX / 2 + strX, 0, typeX + strX, 0, typeX + strX, typeY / 4);
  vertex(typeX + strX, typeY / 4 + strY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2,
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2
  );
  vertex(0, typeY / 2 + strY / 2);
  endShape();
  pop();
  pop();
}

function letter_b(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  line(0, 0, 0, typeY + strY);
  pop();
}

function letter_C(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 3);
  bezierVertex(typeX + strX, typeY / 3, typeX + strX, 0, typeX / 2 + strX, 0);
  vertex(typeX / 2, 0);
  bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
  vertex(0, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  endShape();
  pop();
}

function letter_c(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  endShape();

  pop();
}

function letter_D(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 3);
  bezierVertex(typeX + strX, typeY / 3, typeX + strX, 0, typeX / 2 + strX, 0);
  vertex(0, 0);
  vertex(0, typeY + strY);
  vertex(typeX / 2, typeY + strY);
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  vertex(typeX + strX, typeY / 3);
  endShape();
  pop();
}

function letter_d(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  line(typeX + strX, 0, typeX + strX, typeY + strY);
  pop();
}

function letter_E(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, 0);
  vertex(0, 0);
  vertex(0, typeY + strY);
  vertex(typeX + strX, typeY + strY);
  endShape();

  line(0, typeY / 2 + strY / 2, (2 * typeX) / 3 + strX, typeY / 2 + strY / 2);
  pop();
}

function letter_e(strX, strY) {
  push();

  beginShape();

  vertex(0, (5 * typeY) / 8 + strY / 2);
  vertex(typeX + strX, (5 * typeY) / 8 + strY / 2);
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  endShape();

  pop();
}

function letter_F(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, 0);
  vertex(0, 0);
  vertex(0, typeY + strY);
  endShape();

  line(0, typeY / 2 + strY / 2, (2 * typeX) / 3 + strX, typeY / 2 + strY / 2);
  pop();
}

function letter_f(strX, strY) {
  push();

  beginShape();
  vertex(typeX / 2 + strX / 2, typeY + strY);
  vertex(typeX / 2 + strX / 2, typeY / 4);
  bezierVertex(
    typeX / 2 + strX / 2,
    typeY / 4,
    typeX / 2 + strX / 2,
    0,
    typeX + strX / 2,
    0
  );
  vertex(typeX + strX, 0);
  endShape();

  line(0, typeY / 2 + strY / 2, typeX + strX, typeY / 2 + strY / 2);
  line(0, typeY + strY, typeX + strX, typeY + strY);
  pop();
}

function letter_G(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 3);
  bezierVertex(typeX + strX, typeY / 3, typeX + strX, 0, typeX / 2 + strX, 0);
  vertex(typeX / 2, 0);
  bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
  vertex(0, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  endShape();

  beginShape();
  vertex(typeX / 2 + strX / 2, typeY / 2 + strY / 2);
  vertex(typeX + strX, typeY / 2 + strY / 2);
  vertex(typeX + strX, typeY + strY);
  endShape();
  pop();
}

function letter_g(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, typeY / 2 + strY);
  bezierVertex(
    0,
    typeY / 2 + strY,
    0,
    (3 * typeY) / 4 + strY,
    typeX / 2,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX / 2 + strX, (3 * typeY) / 4 + strY);
  bezierVertex(
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    typeY / 2 + strY,
    typeX + strX,
    typeY / 2 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  beginShape();
  vertex(typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);
  vertex(typeX + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (5 * typeY) / 4 + strY,
    typeX / 2 + strX,
    (5 * typeY) / 4 + strY
  );
  vertex(typeX / 2, (5 * typeY) / 4 + strY);
  bezierVertex(0, (5 * typeY) / 4 + strY, 0, typeY + strY, 0, typeY + strY);
  endShape();

  line(typeX / 2 + strX / 2, typeY / 4, typeX + strX, typeY / 4);

  pop();
}

function letter_H(strX, strY) {
  push();

  line(0, 0, 0, typeY + strY);
  line(0, typeY / 2 + strY / 2, typeX + strX, typeY / 2 + strY / 2);
  line(typeX + strX, 0, typeX + strX, typeY + strY);
  pop();
}

function letter_h(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY + strY);
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, typeY + strY);
  endShape();

  line(0, 0, 0, typeY + strY);

  pop();
}

function letter_I(strX, strY) {
  push();

  line(0, 0, typeX + strX, 0);
  line(0, typeY + strY, typeX + strX, typeY + strY);
  line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, typeY + strY);
  pop();
}

function letter_i(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  vertex(typeX / 2 + strX / 2, typeY / 4);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  endShape();

  line(0, typeY + strY, typeX + strX, typeY + strY);
  line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, typeY / 8);

  pop();
}

function letter_J(strX, strY) {
  push();

  beginShape();
  vertex(0, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  vertex(typeX + strX, 0);
  vertex(typeX / 3, 0);
  endShape();
  pop();
}

function letter_j(strX, strY) {
  push();

  beginShape();
  vertex(typeX / 4, typeY / 4);
  vertex((3 * typeX) / 4 + strX, typeY / 4);
  vertex((3 * typeX) / 4 + strX, typeY + strY);
  bezierVertex(
    (3 * typeX) / 4 + strX,
    typeY + strY,
    (3 * typeX) / 4 + strX,
    (5 * typeY) / 4 + strY,
    typeX / 4 + strX,
    (5 * typeY) / 4 + strY
  );
  vertex(0, (5 * typeY) / 4 + strY);
  endShape();

  line((3 * typeX) / 4 + strX, 0, (3 * typeX) / 4 + strX, typeY / 8);

  pop();
}

function letter_K(strX, strY) {
  push();

  line(0, 0, 0, typeY + strY);
  line(0, (2 * typeY) / 3 + strY, typeX + strX, 0);

  ang = atan(((2 * typeY) / 3 + strY) / (typeX + strX));
  angX = (typeY / 2 + strY / 2) / tan(ang);

  line(typeX + strX - angX, typeY / 2 + strY / 2, typeX + strX, typeY + strY);
  pop();
}

function letter_k(strX, strY) {
  push();

  line(0, 0, 0, typeY + strY);
  line(typeX + strX, typeY / 4, 0, (3 * typeY) / 4 + strY);
  line(typeX + strX, typeY + strY, typeX / 2 + strX / 2, typeY / 2 + strY / 2);

  pop();
}

function letter_L(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(0, typeY + strY);
  vertex(typeX + strX, typeY + strY);
  endShape();
  pop();
}

function letter_l(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX / 2 + strX / 2, 0);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  endShape();

  line(0, typeY + strY, typeX + strX, typeY + strY);
  pop();
}

function letter_M(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY + strY);
  vertex(0, 0);
  vertex(typeX / 2 + strX / 2, (2 * typeY) / 3 + strY);
  vertex(typeX + strX, 0);
  vertex(typeX + strX, typeY + strY);
  endShape();
  pop();
}

function letter_m(strX, strY) {
  push();

  line(0, typeY / 4, 0, typeY + strY);

  //left Hump
  beginShape();
  vertex(0, (3 * typeY) / 8);
  bezierVertex(0, (3 * typeY) / 8, 0, typeY / 4, typeX / 4, typeY / 4);
  vertex(typeX / 4 + strX / 2, typeY / 4);
  bezierVertex(
    typeX / 2 + strX / 2,
    typeY / 4,
    typeX / 2 + strX / 2,
    (3 * typeY) / 8,
    typeX / 2 + strX / 2,
    (3 * typeY) / 8
  );
  vertex(typeX / 2 + strX / 2, typeY + strY);
  endShape();

  translate(typeX / 2 + strX / 2, 0);
  beginShape();
  vertex(0, (3 * typeY) / 8);
  bezierVertex(0, (3 * typeY) / 8, 0, typeY / 4, typeX / 4, typeY / 4);
  vertex(typeX / 4 + strX / 2, typeY / 4);
  bezierVertex(
    typeX / 2 + strX / 2,
    typeY / 4,
    typeX / 2 + strX / 2,
    (3 * typeY) / 8,
    typeX / 2 + strX / 2,
    (3 * typeY) / 8
  );
  vertex(typeX / 2 + strX / 2, typeY + strY);
  endShape();

  pop();
}

function letter_N(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY + strY);
  vertex(0, 0);
  vertex(typeX + strX, typeY + strY);
  vertex(typeX + strX, 0);
  endShape();
  pop();
}

function letter_n(strX, strY) {
  push();

  line(0, typeY / 4, 0, typeY + strY);

  beginShape();
  vertex(typeX + strX, typeY + strY);
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  endShape();

  pop();
}

function letter_O(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 3);
  bezierVertex(typeX + strX, typeY / 3, typeX + strX, 0, typeX / 2 + strX, 0);
  vertex(typeX / 2, 0);
  bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
  vertex(0, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  vertex(typeX + strX, typeY / 3);
  endShape();
  pop();
}

function letter_o(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  pop();
}

function letter_P(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY + strY);
  vertex(0, 0);
  vertex(typeX / 2 + strX, 0);
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 4);
  vertex(typeX + strX, typeY / 4 + strY / 2);
  quadraticVertex(
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX / 2 + strX,
    typeY / 2 + strY / 2
  );
  vertex(0, typeY / 2 + strY / 2);
  endShape();
  pop();
}

function letter_p(strX, strY) {
  push();

  line(0, typeY / 4, 0, (5 * typeY) / 4 + strY);

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  pop();
}

function letter_Q(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 3);
  bezierVertex(typeX + strX, typeY / 3, typeX + strX, 0, typeX / 2 + strX, 0);
  vertex(typeX / 2, 0);
  bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
  vertex(0, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  vertex(typeX + strX, typeY / 3);
  endShape();

  line(typeX / 2 + strX / 2, typeY / 2 + strY, typeX + strX, typeY + strY);
  pop();
}

function letter_q(strX, strY) {
  push();

  line(typeX + strX, typeY / 4, typeX + strX, (5 * typeY) / 4 + strY);

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  vertex(typeX + strX, typeY / 2);
  endShape();

  pop();
}

function letter_R(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY + strY);
  vertex(0, 0);
  vertex(typeX / 2 + strX, 0);
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 4);
  vertex(typeX + strX, typeY / 4 + strY / 2);
  quadraticVertex(
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX / 2 + strX,
    typeY / 2 + strY / 2
  );
  vertex(0, typeY / 2 + strY / 2);
  endShape();

  line(typeX / 2 + strX / 2, typeY / 2 + strY / 2, typeX + strX, typeY + strY);
  pop();
}

function letter_r(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 2);
  bezierVertex(
    typeX + strX,
    typeY / 2,
    typeX + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
  endShape();

  line(0, typeY / 4, 0, typeY + strY);

  pop();
}

function letter_S(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY / 4);
  bezierVertex(typeX + strX, typeY / 4, typeX + strX, 0, typeX / 2 + strX, 0);
  vertex(typeX / 2, 0);
  bezierVertex(0, 0, 0, typeY / 4, 0, typeY / 4);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    typeY / 3,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  bezierVertex(
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    typeY + strY,
    typeX / 2 + strX,
    typeY + strY
  );
  vertex(typeX / 2, typeY + strY);
  bezierVertex(
    0,
    typeY + strY,
    0,
    (2 * typeY) / 3 + strY,
    0,
    (2 * typeY) / 3 + strY
  );
  endShape();
  pop();
}

function letter_s(strX, strY) {
  push();

  beginShape();
  vertex((7 * typeX) / 8 + strX, (3 * typeY) / 8);
  bezierVertex(
    (7 * typeX) / 8 + strX,
    (3 * typeY) / 8,
    (7 * typeX) / 8 + strX,
    typeY / 4,
    typeX / 2 + strX,
    typeY / 4
  );
  vertex(typeX / 2, typeY / 4);
  bezierVertex(
    typeX / 8,
    typeY / 4,
    typeX / 8,
    (3 * typeY) / 8,
    typeX / 8,
    (3 * typeY) / 8
  );
  bezierVertex(
    typeX / 8,
    (5 * typeY) / 8 + strY,
    typeX + strX,
    (3 * typeY) / 8,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  bezierVertex(
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    typeY + strY,
    typeX / 2 + strX,
    typeY + strY
  );
  vertex(typeX / 2, typeY + strY);
  bezierVertex(
    0,
    typeY + strY,
    0,
    (3 * typeY) / 4 + strY,
    0,
    (3 * typeY) / 4 + strY
  );
  endShape();

  pop();
}

function letter_T(strX, strY) {
  push();

  line(0, 0, typeX + strX, 0);
  line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, typeY + strY);
  pop();
}

function letter_t(strX, strY) {
  push();

  line(0, typeY / 4, typeX + strX, typeY / 4);

  beginShape();
  vertex(typeX / 2 + strX / 2, 0);
  vertex(typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);
  bezierVertex(
    typeX / 2 + strX / 2,
    (3 * typeY) / 4 + strY,
    typeX / 2 + strX / 2,
    typeY + strY,
    (3 * typeX) / 4 + strX / 2,
    typeY + strY
  );
  vertex(typeX + strX, typeY + strY);
  endShape();

  pop();
}

function letter_U(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(0, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX + strX,
    (2 * typeY) / 3 + strY
  );
  vertex(typeX + strX, 0);
  endShape();
  pop();
}

function letter_u(strX, strY) {
  push();

  line(typeX + strX, typeY / 4, typeX + strX, typeY + strY);

  beginShape();
  vertex(0, typeY / 4);
  vertex(0, (3 * typeY) / 4 + strY);
  bezierVertex(
    0,
    (3 * typeY) / 4 + strY,
    0,
    typeY + strY,
    typeX / 2,
    typeY + strY
  );
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY,
    typeX + strX,
    (3 * typeY) / 4 + strY
  );
  endShape();

  pop();
}

function letter_V(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  vertex(typeX + strX, 0);
  endShape();
  pop();
}

function letter_v(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  vertex(typeX + strX, typeY / 4);
  endShape();

  pop();
}

function letter_W(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX / 4, typeY + strY);
  vertex(typeX / 2 + strX / 2, typeY / 3);
  vertex((3 * typeX) / 4 + strX, typeY + strY);
  vertex(typeX + strX, 0);
  endShape();
  pop();
}

function letter_w(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  vertex(typeX / 4 + strX / 4, typeY + strY);
  vertex(typeX / 2 + strX / 2, typeY / 2 + strY / 2);
  vertex((3 * typeX) / 4 + (3 * strX) / 4, typeY + strY);
  vertex(typeX + strX, typeY / 4);
  endShape();

  pop();
}

function letter_X(strX, strY) {
  push();

  line(0, 0, typeX + strX, typeY + strY);
  line(0, typeY + strY, typeX + strX, 0);
  pop();
}

function letter_x(strX, strY) {
  push();

  line(0, typeY / 4, typeX + strX, typeY + strY);
  line(0, typeY + strY, typeX + strX, typeY / 4);
  pop();
}

function letter_Y(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX / 2 + strX / 2, typeY / 2 + strY / 2);
  vertex(typeX + strX, 0);
  endShape();

  line(
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2,
    typeX / 2 + strX / 2,
    typeY + strY
  );
  pop();
}

function letter_y(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  vertex(typeX + strX, typeY / 4);
  endShape();

  beginShape();
  vertex(typeX / 2 + strX / 2, typeY + strY);
  bezierVertex(
    typeX / 2 + strX / 2,
    typeY + strY,
    typeX / 2 + strX / 2,
    (5 * typeY) / 4 + strY,
    strX / 2,
    (5 * typeY) / 4 + strY
  );
  vertex(0, (5 * typeY) / 4 + strY);
  endShape();

  pop();
}

function letter_Z(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX + strX, 0);
  vertex(0, typeY + strY);
  vertex(typeX + strX, typeY + strY);
  endShape();
  pop();
}

function letter_z(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  vertex(typeX + strX, typeY / 4);
  vertex(0, typeY + strY);
  vertex(typeX + strX, typeY + strY);
  endShape();

  pop();
}

function letter_underscore(strX, strY) {
  push();

  line(0, typeY + strY, typeX + strX, typeY + strY);
  pop();
}

function letter_dash(strX, strY) {
  push();

  line(0, typeY / 2 + strY / 2, typeX + strX, typeY / 2 + strY / 2);
  pop();
}

function letter_question(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 3);
  bezierVertex(0, typeY / 3, 0, 0, typeX / 2, 0);
  vertex(typeX / 2 + strX, 0);
  bezierVertex(
    typeX + strX,
    0,
    typeX + strX,
    typeY / 3,
    typeX + strX,
    typeY / 3
  );
  vertex(typeX + strX, typeY / 3 + strY);
  bezierVertex(
    typeX + strX,
    typeY / 3 + strY,
    typeX + strX,
    typeY / 3 + typeY / 4 + strY,
    typeX / 2 + strX / 2,
    typeY / 3 + typeY / 4 + strY
  );
  vertex(typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);
  endShape();

  line(
    typeX / 2 + strX / 2,
    (7 * typeY) / 8 + strY,
    typeX / 2 + strX / 2,
    typeY + strY
  );
  pop();
}

function letter_period(strX, strY) {
  push();

  line(
    typeX / 2 + strX / 2,
    (7 * typeY) / 8 + strY,
    typeX / 2 + strX / 2,
    typeY + strY
  );
  pop();
}

function letter_colon(strX, strY) {
  push();

  line(
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2 - typeY / 8,
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2
  );
  line(
    typeX / 2 + strX / 2,
    (7 * typeY) / 8 + strY,
    typeX / 2 + strX / 2,
    typeY + strY
  );
  pop();
}

function letter_semicolon(strX, strY) {
  push();

  line(
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2 - typeY / 8,
    typeX / 2 + strX / 2,
    typeY / 2 + strY / 2
  );
  line(
    typeX / 2 + strX / 2,
    (7 * typeY) / 8 + strY,
    typeX / 2 + strX / 2 - typeX / 4,
    typeY + strY
  );
  pop();
}

function letter_comma(strX, strY) {
  push();

  line(
    typeX / 2 + strX / 2,
    (7 * typeY) / 8 + strY,
    typeX / 2 + strX / 2 - typeX / 4,
    typeY + strY
  );
  pop();
}

function letter_exclaim(strX, strY) {
  push();

  line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);

  line(
    typeX / 2 + strX / 2,
    (7 * typeY) / 8 + strY,
    typeX / 2 + strX / 2,
    typeY + strY
  );
  pop();
}

function letter_slash(strX, strY) {
  push();

  line(0, typeY + strY, typeX + strX, 0);
  pop();
}

function letter_amp(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, typeY + strY);
  quadraticVertex(typeX / 8, typeY / 4, typeX / 8, typeY / 8);
  quadraticVertex(typeX / 8, 0, (3 * typeX) / 8, 0);
  vertex((3 * typeX) / 8 + strX, 0);
  bezierVertex(
    (5 * typeX) / 8 + strX,
    0,
    (5 * typeX) / 8 + strX,
    typeY / 8,
    (5 * typeX) / 8 + strX,
    typeY / 8
  );
  bezierVertex(
    (5 * typeX) / 8 + strX,
    typeY / 4,
    0,
    typeY / 2 + strY,
    0,
    (3 * typeY) / 4 + strY
  );
  quadraticVertex(0, typeY + strY, typeX / 2, typeY + strY);
  vertex(typeX / 2 + strX, typeY + strY);
  bezierVertex(
    typeX + strX,
    typeY + strY,
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX + strX,
    typeY / 2 + strY / 2
  );
  vertex((3 * typeX) / 4 + strX, typeY / 2 + strY / 2);
  endShape();
  pop();
}

function letter_space(strX, strY) {
  push();

  pop();
}

function one(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  vertex(typeX / 2 + strX / 2, 0);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  endShape();

  line(0, typeY + strY, typeX + strX, typeY + strY);
  pop();
}

function two(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 3);
  quadraticVertex(0, 0, typeX / 2, 0);
  vertex(typeX / 2 + strX, 0);
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 3);
  vertex(typeX + strX, typeY / 3 + strY);
  bezierVertex(
    typeX + strX,
    (2 * typeY) / 3 + strY,
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY + strY
  );
  vertex(typeX + strX, typeY + strY);
  endShape();
  pop();
}

function three(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX + strX, 0);
  vertex(typeX / 2 + strX / 2, typeY / 3);
  quadraticVertex(typeX + strX, typeY / 3, typeX + strX, (2 * typeY) / 3);
  vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
  vertex(typeX / 2, typeY + strY);
  bezierVertex(
    0,
    typeY + strY,
    0,
    (2 * typeY) / 3 + strY,
    0,
    (2 * typeY) / 3 + strY
  );
  endShape();
  pop();
}

function four(strX, strY) {
  push();

  beginShape();
  vertex(typeX / 3, 0);
  vertex(0, (2 * typeY) / 3 + strY);
  vertex(typeX + strX, (2 * typeY) / 3 + strY);
  endShape();
  line((2 * typeX) / 3 + strX, 0, (2 * typeX) / 3 + strX, typeY + strY);
  pop();
}

function five(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, 0);
  vertex(0, 0);
  vertex(0, typeY / 3);
  vertex(typeX / 2 + strX, typeY / 3);
  quadraticVertex(typeX + strX, typeY / 3, typeX + strX, (2 * typeY) / 3);
  vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
  bezierVertex(
    0,
    typeY + strY,
    0,
    (2 * typeY) / 3 + strY,
    0,
    (2 * typeY) / 3 + strY
  );
  endShape();
  pop();
}

function six(strX, strY) {
  push();

  beginShape();
  vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
  vertex(typeX / 2, typeY + strY);
  bezierVertex(
    0,
    typeY + strY,
    0,
    (2 * typeY) / 3 + strY,
    0,
    (2 * typeY) / 3 + strY
  );
  vertex(0, (2 * typeY) / 3);
  quadraticVertex(0, typeY / 3, typeX / 2, typeY / 3);
  vertex(typeX / 2 + strX, typeY / 3);
  bezierVertex(
    typeX + strX,
    typeY / 3,
    typeX + strX,
    (2 * typeY) / 3,
    typeX + strX,
    (2 * typeY) / 3
  );
  vertex(typeX + strX, (2 * typeY) / 3 + strY);
  endShape();

  beginShape();
  vertex(0, (2 * typeY) / 3);
  quadraticVertex(0, 0, (2 * typeX) / 3, 0);
  endShape();
  pop();
}

function seven(strX, strY) {
  push();

  beginShape();
  vertex(0, 0);
  vertex(typeX + strX, 0);
  vertex(typeX / 2 + strX / 2, typeY + strY);
  endShape();
  pop();
}

function eight(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 4);
  quadraticVertex(0, 0, typeX / 2, 0);
  vertex(typeX / 2 + strX, 0);
  bezierVertex(
    typeX + strX,
    0,
    typeX + strX,
    typeY / 4,
    typeX + strX,
    typeY / 4
  );
  vertex(typeX + strX, typeY / 4 + strY / 2);
  quadraticVertex(
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX / 2 + strX,
    typeY / 2 + strY / 2
  );
  vertex(typeX / 2, typeY / 2 + strY / 2);
  bezierVertex(
    0,
    typeY / 2 + strY / 2,
    0,
    typeY / 4 + strY / 2,
    0,
    typeY / 4 + strY / 2
  );
  vertex(0, typeY / 4);
  endShape();

  translate(0, typeY / 2 + strY / 2); //bottom hump
  beginShape();
  vertex(0, typeY / 4);
  quadraticVertex(0, 0, typeX / 2, 0);
  vertex(typeX / 2 + strX, 0);
  bezierVertex(
    typeX + strX,
    0,
    typeX + strX,
    typeY / 4,
    typeX + strX,
    typeY / 4
  );
  vertex(typeX + strX, typeY / 4 + strY / 2);
  quadraticVertex(
    typeX + strX,
    typeY / 2 + strY / 2,
    typeX / 2 + strX,
    typeY / 2 + strY / 2
  );
  vertex(typeX / 2, typeY / 2 + strY / 2);
  bezierVertex(
    0,
    typeY / 2 + strY / 2,
    0,
    typeY / 4 + strY / 2,
    0,
    typeY / 4 + strY / 2
  );
  vertex(0, typeY / 4);
  endShape();

  pop();
}

function nine(strX, strY) {
  push();

  beginShape();
  vertex(0, typeY / 3);
  quadraticVertex(0, 0, typeX / 2, 0);
  vertex(typeX / 2 + strX, 0);
  bezierVertex(
    typeX + strX,
    0,
    typeX + strX,
    typeY / 3,
    typeX + strX,
    typeY / 3
  );
  vertex(typeX + strX, typeY / 3 + strY);
  quadraticVertex(
    typeX + strX,
    (2 * typeY) / 3 + strY,
    typeX / 2 + strX,
    (2 * typeY) / 3 + strY
  );
  vertex(typeX / 2, (2 * typeY) / 3 + strY);
  bezierVertex(
    0,
    (2 * typeY) / 3 + strY,
    0,
    typeY / 3 + strY,
    0,
    typeY / 3 + strY
  );
  vertex(0, typeY / 3);
  endShape();

  line(typeX + strX, typeY / 3 + strY, typeX + strX, typeY + strY);
  pop();
}

function zero(strX, strY) {
  push();

  beginShape();
  vertex(typeX / 2 + strX, 0);
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 3);
  vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
  vertex(typeX / 2, typeY + strY);
  quadraticVertex(0, typeY + strY, 0, (2 * typeY) / 3 + strY);
  vertex(0, typeY / 3);
  quadraticVertex(0, 0, typeX / 2, 0);
  vertex(typeX / 2 + strX, 0);
  endShape();

  line((2 * typeX) / 3 + strX, typeY / 3, typeX / 3, (2 * typeY) / 3 + strY);
  pop();
}

function saveLoop() {
  //  2*PI/0.04 = gifLength;
  if (
    confirm(
      'Click OK to generate your gif.\nThe process will take a minute. Be patient, plz!'
    )
  ) {
    speedSlider.value(PI);
    gifStart = frameCount;
    gifEnd = gifStart + gifLength;
    gifRecord = true;
  } else {
    gifRecord = false;
  }
}
