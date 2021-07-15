canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_img = "mars.jpg";
rover_img = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_img2 = new Image();
    background_img2.onload = upload_mars;
    background_img2.src = background_img;

    rover_img2 = new Image();
    rover_img2.onload = upload_rover;
    rover_img2.src = rover_img;

}

function upload_mars() {
    ctx.drawImage(background_img2, 0, 0, canvas.width, canvas.height);
}

function upload_rover() {
    ctx.drawImage(rover_img2, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", myevent)

function myevent(e) {
    key_press = e.keyCode;
    if (key_press == '37') {
        screenLeft();
        console.log("left arrow pressed")
    }

    if (key_press == '38') {
        screenUp();
        console.log("up arrow pressed")
    }

    if (key_press == '39') {
        screenRight();
        console.log("right arrow pressed")
    }

    if (key_press == '40') {
        screenDown();
        console.log("down arrow pressed")
    }
}

function screenUp(){
if (rover_y >= 0) {
    rover_y -= 10;
    console.log("rovers new x and y" + rover_x, rover_y);
    upload_mars();
    upload_rover();
}
}
function screenDown(){
if (rover_y <= 500) {
    rover_y += 10;
    console.log("rovers new x and y" + rover_x, rover_y);
    upload_mars();
    upload_rover();
}
}
function screenRight(){
if (rover_x <= 700) {
    rover_x += 10;
    console.log("rovers new x and y" + rover_x, rover_y);
    upload_mars();
    upload_rover();
}
}
function screenLeft(){
if (rover_x >= 0) {
    rover_x -= 10;
    console.log("rovers new x and y" + rover_x, rover_y);
    upload_mars();
    upload_rover();
}
}