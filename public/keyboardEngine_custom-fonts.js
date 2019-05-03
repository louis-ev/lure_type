function keyboardEngine() {
  //  if (letter_select >= inpText.length) {
  //      letter_space( strecherX,  strecherY, strecherShear);
  //  } else {

  c1 = inpText.charAt(letter_select);

  textSize(64);
  textAlign(CENTER, CENTER);
  textFont(font);

  push();
  translate(typeX / 2, typeY / 6);
  scale(typeX / 40, typeY / 40);
  text(c1, 0, 0);
  pop();

  // beginShape();
  // vertex(typeX, (3 * typeY) / 4);
  // bezierVertex(
  //   typeX,
  //   (7 * typeY) / 8,
  //   (5 * typeX) / 6,
  //   typeY,
  //   typeX / 2,
  //   typeY
  // );
  // bezierVertex(typeX / 6, typeY, 0, (5 * typeY) / 6, 0, (2 * typeY) / 3);
  // vertex(0, typeY / 3);
  // bezierVertex(0, typeY / 6, typeX / 6, 0, typeX / 2, 0);
  // bezierVertex((5 * typeX) / 6, 0, typeX, typeY / 8, typeX, typeY / 4);
  // endShape();

  return;
}
