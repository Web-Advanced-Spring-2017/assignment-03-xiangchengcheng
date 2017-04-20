// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
var socket;

function setup(){
//   var canv = document.createElement('canvas');
// canvas.id = 'sketch';

// sketch.style.width = window.innerWidth + "px";
// sketch.style.height = window.innerHeight + "px";
// sketch.style.background-color = 51,51,51



  createCanvas(window.innerWidth,window.innerHeight)
  
  background(51)

  // canvas.width = window.innerWidth
  // canvas.height = window.innerHeight




  // var canvas = document.getElementById('viewport'),
  // context = canvas.getContext('2d');

  //   make_base();

  //   function make_base()
  // {
  //   base_image = new Image();
  //   base_image.src = 'sketchbook.jpg';
  //   base_image.onload = function(){
  //     context.drawImage(base_image, 1000, 1000);
  //   }
  // }


  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing)

}

function newDrawing(data){
  noStroke()
  fill(49,24,35)
  ellipse(data.x, data.y, 20, 20)
}


function mouseDragged(){
  console.log('sending:'+ mouseX + ',' + mouseY)
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data)

  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 20, 20)
}

function draw(){
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 20, 20)
}

