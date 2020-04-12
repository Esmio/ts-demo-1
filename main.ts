var div: HTMLDivElement = document.createElement('div');
div.style.border = '1px solid red';
div.style.height = '100px';
div.style.width = '100px';
div.id = 'demo';

document.body.appendChild(div);

var x = false;
var position: [number, number] = [0, 0];

div.onmousedown = (e: MouseEvent) => {
    x = true
    position = [e.clientX, e.clientY]
}

document.onmousemove = (e: MouseEvent) => {
    if(x) {
        var deltaX = e.clientX - position[0];
        var deltaY = e.clientY - position[1];
        var top = parseInt(div.style.top) || 0;
        var left = parseInt(div.style.left) || 0;
        console.log(top, left)
        div.style.top = top + deltaY + 'px';
        div.style.left = left + deltaX + 'px';
        position = [e.clientX, e.clientY];
    }
}

div.onmouseup = (e: MouseEvent) => {
    x = false;
}