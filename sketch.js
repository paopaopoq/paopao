let video;
let faceapi;
let handpose;
let facePredictions = [];
let handPredictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // 臉部辨識
  faceapi = ml5.facemesh(video, () => console.log('Face ready'));
  faceapi.on('predict', results => facePredictions = results);

  // 手部辨識
  handpose = ml5.handpose(video, () => console.log('Hand ready'));
  handpose.on('predict', results => handPredictions = results);
}

function draw() {
  if (!video || video.width === 0) {
    background(0);
    fill(255);
    textSize(32);
    text("無法取得攝影機影像", 100, height/2);
    return;
  }
  image(video, 0, 0, width, height);
  
  // 畫手
  for (let hand of handPredictions) {
    for (let landmark of hand.landmarks) {
      fill(0, 255, 0);
      noStroke();
      ellipse(landmark[0], landmark[1], 10);
    }
  }

  // 畫臉
  for (let face of facePredictions) {
    let mouthTop = face.annotations.lipsUpperInner[5]; // 嘴巴中間上方
    let mouthBottom = face.annotations.lipsLowerInner[5]; // 嘴巴中間下方
    let mouthOpen = dist(mouthTop[0], mouthTop[1], mouthBottom[0], mouthBottom[1]);

    if (mouthOpen > 15) {
      fill(255, 0, 0);
      textSize(32);
      text("嘴巴張開！", 50, 50);
    }
  }
}
