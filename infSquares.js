
maxLevel=5;
vel = 6;
length = 150;
X=20;
function setup() {
  createCanvas(500,500);
}

function draw() {
	background(0, 0,0);
	drawSquares(X+length*2,X+length*2,length*3,0);
	length -=1;
	X-=1;
	if(length<70){
		X = X+length*2;
		length = length*3;
	}
}
function drawSquares(x,y,l,level){
	rect(10+x,10+y,l,l);
	if(level == maxLevel){
		return;
	}
	l = l/3;
	drawSquares(x-2*l,y-2*l,l,level+1);
	drawSquares(x+l,y-2*l,l,level+1);
	drawSquares(x+4*l,y-2*l,l,level+1);

	drawSquares(x-2*l,y+l,l,level+1);
	drawSquares(x+4*l,y+l,l,level+1);

	drawSquares(x-2*l,y+4*l,l,level+1);
	drawSquares(x+l,y+4*l,l,level+1);
	drawSquares(x+4*l,y+4*l,l,level+1);
	return 0;
}
