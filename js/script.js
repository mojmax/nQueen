// var myMap = new Map();
// myMap.set(1 , new Array(1,2));
// myMap.set(2 , new Array(new Array(1,2), new Array(3,4)));
// for (let [key, value] of myMap)
//   console.log("key" + key + "value : " + value );  //visualizza gli elementi del Set


function solvePuzzle () {
  var dimension = null;
	var solutions = null;
	// array che conterra la scacchiera
  solutions = new Array();

	dimension = document.getElementById("nqueen").value;
	//console.log("Table Dimension" + dimension );
	dimension = Number(dimension);

  solutions = trovaSoluzioni(dimension );
	stampaSoluzioni(solutions);

};
//
document.addEventListener("DOMContentLoaded",
  function () {
  //  solve();
	// Unobtrusive event binding
	document.querySelector("button")
      .addEventListener("click", solvePuzzle);
  }
);
// Dimensiona correttamete la scacchiera secondo la dimensione specificata
var initTable = function(dim , caracter) {
	  'use sctrict'
		var chessTable = null;
		chessTable = new Array;
		for (var x=0; x < dim ; x++) {
		 chessTable[x] = new Array();
		}
		for (var x=0; x < dim; x++) {
			for (var y=0; y < dim; y++) {
			 chessTable[x][y] = caracter;
			}
		}
		for (var x=0; x < dim ; x++) {
				console.log("initTable() chessTable : " + chessTable[x] + "\n   ");
		}
		// restituisce l'arrau inizializzato
		return chessTable;
};
  //
	var trovaSoluzioni = function(dimension ) {
			'use sctrict'
		solutions = null;
		solutions = new Map();
		// array che conterra le soluzioni
		var chessTable = new Array();


		console.log("trovaSoluzioni() dimension : " + dimension);
		chessTable = initTable(dimension, "Q");
		console.log("trovaSoluzioni() chessTable Q : " + chessTable);
		solutions.set(1, chessTable);
		console.log("inserita soluzione : " + solutions.get(1));

		chessTable = initTable(dimension, "R");
		console.log("trovaSoluzioni() chessTable R : " + chessTable);
		solutions.set(2, chessTable);

		console.log("inserita soluzione : " + solutions.get(2));
		return solutions;
	};
  //
	var stampaSoluzioni = function(solutions) {
		'use strict'

		console.log("THIS SOLUTIONS" + solutions.get(1)) ;
		var opentable = "<table>";
	  var closetable ="</table>";
	  var openrow = "<tr>";
	  var closerow = "</tr>";
		var newline = "<br>";
	  var message = "";
		for ( let [key, value]  of solutions ) {
      message += "<p>Soluzione numero " + key + "</p>";
			message += opentable;
			var arr = new Array();
			console.log("THIS SOLUTION (" + key +") : " + value ) ;

			arr = value;
			for (var i=0; i < arr.length; i++ ) {
		    var row = openrow ;
				for (var y=0; y < arr.length; y++ ) {
				    console.log(arr[i][y]) ;
					row += "<td>" + arr[i][y] + "</td>";
				}
		    row += closerow;
		    message += row
			}
			message += closetable;
			//message += newline;
		};

		console.log("Html solution -> " + message)
		document.getElementById("solutions").innerHTML = message;
	};
