
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece;
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	


function changeBGImage() {
	
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function StartDrag() { 
	console.log('Drag this puzzle piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function DragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('Drag over me'); 
}




function ToggleDrop(e) { 
    e.preventDefault();
    console.log('Drop a puzzle piece on me');
    
    // Check if the drop zone already contains a puzzle piece
    if (this.children.length === 0) {
        this.appendChild(draggedPiece);
    } else {
        console.log('Puzzle piece is already is contained');
        // Append the dragged piece back to the puzzle-pieces container
        document.querySelector('.puzzle-pieces').appendChild(draggedPiece);
    }
}




function r3set() {
    // Remove all puzzle pieces from drop zones and append them back to puzzle-pieces container
    dropZones.forEach(zone => {
        if (zone.firstChild) {
            const puzzlePieces = Array.from(zone.children);
            puzzlePieces.forEach(piece => {
                document.querySelector('.puzzle-pieces').appendChild(piece);
            });
        } else {
            // Do nothing cause i don't need it
        }
    });
}



function changingImage() {
    let bgImagePath = `url(images/backGround${this.id}.jpg)`;
    puzzleBoard.style.backgroundImage = bgImagePath;
    
	puzzlePieces.forEach((piece, index) => {
		if (index === 0) {
		  piece.src = `images/topLeft${this.id}.jpg`;
		} else if (index === 1) {
		  piece.src = `images/topRight${this.id}.jpg`;
		} else if (index === 2) {
		  piece.src = `images/bottomLeft${this.id}.jpg`;
		} else if (index === 3) {
		  piece.src = `images/bottomRight${this.id}.jpg`;
		}
	  });


	  r3set();

   
}


theButtons.forEach(button => button.addEventListener("click", changingImage));


puzzlePieces.forEach(piece => piece.addEventListener("dragstart", StartDrag));


dropZones.forEach(zone => zone.addEventListener("dragover", DragOver));


dropZones.forEach(zone => zone.addEventListener("drop", ToggleDrop));


// res3t.addEventListener('click', resetDropZones);