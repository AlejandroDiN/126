song ="";

leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup()
{
    canvas=createCanvas(600,600);
        canvas.center();


        video=createCapture(VIDEO);
        video.hide();

        poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("Completo");

}


function preload()
{
    song=loadSound("Fruits Gaming.mp3");
}

function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(2.5);

}

function draw()
{
    image(video,0,0,600,600);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX" + leftWristX);
        console.log("leftWristY" + leftWristY);

        rightWristY=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX" + rightWristX);
        console.log("rightWristY" + rightWristY);
    }
}