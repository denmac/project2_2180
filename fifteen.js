// Javascript fie for fifteen puzzle game
var squares = [];
window.onload = function()
{
	loading();
};

function loading() {
	squares = $$('#puzzlearea div');
	var j = 0;
	var t = 3;
	for (var i = 0; i < squares.length; i++) {
		for (var x = 0; x <= t; x++) {
			squares[i].addClassName("puzzlepiece");
			squares[i].style.top = 100 * j + "px";
			squares[i].style.left = 100 * x  + "px";
			squares[i].style.backgroundPosition = -x * 100 + "px " + j * -100 + "px";
			//squares[i].observe("click", movepiece);
			squares[i].observe("mouseover", hover);
			i++;
		}
		j++;
		if (j > 2) {
			t = 2;
		}
		i--;
	}
};


function hover() {
	for (var i = 0; i < squares.length; i++) {	
		i.addClassName("movablepiece");	
}
};


function shuffle(){
	var left;
	var top;

	var p_list = $$('div#puzzlearea div');
	for (var r=0; r <10; r++){
		left = coor();
		top = coor();
		for (var i = 0; i < p_list.length; i++) {
			
			if ( (left == p_list[i].positionedOffset(p_list[i])[0]) && (top == p_list[i].positionedOffset(p_list[i])[1])){
				move(i);
			}
		}
	}

}