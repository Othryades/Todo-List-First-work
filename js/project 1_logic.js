var arrayOfNotes = [];

function getIndexById(nameOfNote1) {
	for (var i=0;i<arrayOfNotes.length;i++) {
		if (arrayOfNotes[i].id == nameOfNote1) {
			return i;
		}
	}	
	return -1;
}

function addItem(){
				//todo: 1) get the title from the DOM
				var titleDom = document.getElementById("title").value;	
					if (titleDom == "") {
						alert("title is missing")
						return;
					}
				//todo: 2) get the when from the DOM
				var whenDom = document.getElementById("when").value;
					if (whenDom == "") {
						alert("date is missing")
						return;
					}
				//todo: 3) get the description from the DOM
				var descriptionDom = document.getElementById("description").value;	
					if (descriptionDom == "") {
						alert("description is missing")
						return;
					}
				
				//todo: 4) add them to a object
				var note1 = new Note(titleDom, whenDom, descriptionDom);
				//todo: 5) add the item to the array
				
				arrayOfNotes.push(note1);
			
				//todo: 6) Draw the item in the DOM
				
				var li = document.createElement("li");
				var ul = document.getElementById("notesContainer");
				ul.appendChild(li);
				
				
				var xIcon = document.createElement("img");
				li.appendChild(xIcon);
				xIcon.src = "resources/icon-x.png";
				xIcon.className = "imgx";
				xIcon.onclick = function removeNote(event) {
									//todo 1) remove from DOM (using event.target)
									event.target.parentElement.remove();
					
									//1 )Iterate the array, and try to find the index of the item with 
									//an ID equals to note1.id in the array - save it in a variable
					
									var indexOfNote1InTheArray = getIndexById(note1.id);
									if (indexOfNote1InTheArray > -1) {
										arrayOfNotes.splice(indexOfNote1InTheArray, 1);
									}
					
									//2 ) Remove the element in the index found from the array using splice
									document.getElementById("counter").innerHTML = arrayOfNotes.length;
	
								}
						
				var h3Title = document.createElement("h3") ;
				
				var span1  = document.createElement("span");
				span1.innerHTML = "Title: ";
				span1.className = "labelFont";
				var span2  = document.createElement("span");
				span2.innerHTML = note1.title;
				h3Title.appendChild(span1);
				h3Title.appendChild(span2);
				li.appendChild(h3Title);
				
				
				var h3When = document.createElement("h3") ;
				
				var span1 = document.createElement("span");
				span1.innerHTML = "Date: ";
				span1.className = "labelFont";
				var span2 = document.createElement("span");
				span2.innerHTML = note1.when;
				h3When.appendChild(span1);			
				h3When.appendChild(span2);
				li.appendChild(h3When);
				
				
				var para = document.createElement("p");
				
				var span1 = document.createElement("span");
				span1.innerHTML = "Description: ";
				span1.className = "labelFont";
				var span2 = document.createElement("span");
				span2.innerHTML = note1.description;
				para.appendChild(span1);			
				para.appendChild(span2);
				li.appendChild(para);
				
				document.getElementById("counter").innerHTML = arrayOfNotes.length;
				
				document.getElementById("title").value = "";
				document.getElementById("when").value = "";
				document.getElementById("description").value = "";
				document.getElementById("title").focus();
				
}
			
