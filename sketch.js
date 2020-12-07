var ball;
var database;
var position;




function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //.ref() is used to reffer to location of the datbase p
    var locationofchild=database.ref('ball/position')
    locationofchild.on("value",readPosition,showError);

    //.on is used creates a listner wich keeps them litsining
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+3);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x : ball.x + x,
        y : ball.y + y,
    })
   
}
function readPosition(data){
    position=data.val();
    console.log(position.x)
    console.log(position.y)
    ball.x=position.x
    ball.y=position.y
}
function showError(){
console.log("error in reading and writing to the database")
}