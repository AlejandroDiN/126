song ="";

function setup()
{
    canvas=createCanvas(600,600);
        canvas.center();


        video=createCapture(VIDEO);
        video.hide();

}

function preload()
{
    song=loadSound("Fruits Gaming.mp3");
}

function play()
{
    song.play();
}

function draw()
{
    image(video,0,0,600,600);
}