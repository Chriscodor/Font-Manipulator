noseX = 0;
noseY = 0;

clownose = "";

function preload(){
    clownose = loadImage("https://i.postimg.cc/QC1xnPh9/nose1.gif");
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model is loaded🎊🎊")
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log(noseX,"this is nose x");
        console.log(noseY,"this is nose y");
    }
}

function draw(){
image(video,0,0 ,500,500);
fill(255,0,0);
stroke(255,0,0)
//circle(noseX-85,noseY,40);
image(clownose,noseX-118,noseY-25,70,70);


}

function take_snapshot(){
save("clown.png");
}

