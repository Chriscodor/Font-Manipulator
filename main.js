
noseX = 0;
noseY = 0;
diff = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600,550)
    video.position(100,200)

    canvas = createCanvas(600,550)
    canvas.position(1000,200)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model is ready")
}

function draw(){
   background("#5bbd91") 
    fill("purple");
    stroke("purple")
    textSize(diff)
    text("Christopher",noseX,noseY)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        diff = leftWristX-rightWristX;
    }
}