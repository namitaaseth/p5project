function setup(){
    canvas=createCanvas(400,300)
    canvas.position(50,170)
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,50,50,300,200)
    fill("orange")
    circle(27,30,50)
    circle(27,270,50)
    circle(370,30,50)
    circle(370,270,50)
    fill("green")
    rect(53,260,292,25)
    rect(53,20,292,25)
    rect(15,55,25,192)
    rect(357,55,25,192)
}

function take_snapshot(){
    save("mypic.jpg")
}