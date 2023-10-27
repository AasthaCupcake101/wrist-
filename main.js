function setup () {
    video=createCapture(VIDEO)
video.size(500,500)

canvas=createCanvas(550,550)
canvas.position(560,150)

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
noesX=0;
noesY=0;
diffrence=0;
rightWristX=0;
leftWristX=0
function draw(){
    background('#969A97')
   fill('#F90093')
   stroke('#F9009')
   square(noesX,noesY,diffrence);
}
function gotPoses (results){
if(results.length > 0)
{
    console.log(results)
    noesX = results[0].pose.nose.x;
    noesY = results[0].pose.nose.y;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    diffrence=floor(leftWristX - rightWristX);
}
}
