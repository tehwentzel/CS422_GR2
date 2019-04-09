var board = (function(){
	
	var getPuzzle = function(puzzle){
		var sudoku = [puzzle.slice(0,4),
		puzzle.slice(4,8),
		puzzle.slice(8,12),
		puzzle.slice(12,16)];
		console.log(sudoku);
		return sudoku;
	}
	
	var checkValid = function(state, move){
		return;
	}
	
	return {
		getPuzzle: getPuzzle
	}
})();