canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
images_array = ["FLB_486265257EDR_F0481570FHAZ00323M_.jpeg","mars(2).jpeg","mars(3).jpeg","mars(4).jpeg"];
random_number = Math.floor(Math.random()*4);
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_image = "rover.png";
background_image = images_array[random_number];
console.log("background image is" + background_image);
function add() {
    background_ImgTag = new Image();
    background_ImgTag.onload = upload_background;
    background_ImgTag.src = background_image;
    rover_ImgTag = new Image();
    rover_ImgTag.onload = upload_rover;
    rover_ImgTag.src = rover_image;

    



}
function upload_background() {
    ctx.drawImage(background_ImgTag,0,0,canvas.width,canvas.height);


}
function upload_rover() {
    ctx.drawImage(rover_ImgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode;
console.log("keyPressed");
if(keyPressed =='38'){
    up();
    console.log("up");
}
if(keyPressed =='40'){
    down();
    console.log("down");
}
if(keyPressed =='37'){
    left();
    console.log("left");
}
if(keyPressed =='39'){
    right();
    console.log("right");
}
}
function up() {
    if(rover_y>=0) {
        rover_y = rover_y-10;
        console.log("when up pressed x = " + rover_x + "y = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function down() {
    if(rover_y<=500) {
        rover_y = rover_y+10;
        console.log("when down pressed x = " + rover_x + "y = " + rover_y);
        upload_background();
        upload_rover();
    }
}
function left() {
    if(rover_x>=0) {
        rover_x = rover_x-10;
        console.log("when left pressed x = " + rover_x + "y =" + rover_y);
        upload_background();
        upload_rover();
    }
}
function right() {
    if(rover_x>=500) {
        rover_x = rover_x+10;
        console.log("when right pressed x = " + rover_y + "y =" + rover_x);
        upload_background();
        upload_rover();
    }
}

