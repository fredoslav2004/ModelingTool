// This file uses jQuery
// Draw a sample shape on the canvas

let canvas;
let ctx;

$(document).ready(function () {
  c = $("#mainCanvas")[0];
  ctx = c.getContext("2d");
});

class IRenderable
{    
    render() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function renderAll() {
    ctx.clearRect(0, 0, c.width, c.height);
}
