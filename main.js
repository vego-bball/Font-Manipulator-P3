noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw()
{
    background('#969A97');
    document.getElementById("font_size").innerHTML = "The Size of the Font Will Be = " + difference + "px";
    fill('#F90093');
    textSize(difference);
    text('Veer', 30, 300)
}

function modelLoaded()
{
    console.log("Model is Loaded")
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("Left Wrist X = " + leftwristX + "Right Wrist X = " + rightwristX + "Difference = " + difference);
    }
}