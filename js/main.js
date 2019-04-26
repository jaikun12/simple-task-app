// document.onload = getDate();

// function getDate(){
// 	var currentDateNode = document.getElementById("current-date");
// 	var today = new Date();
// 	var dateText = document.createTextNode(today.getMonth() + " - " + today.getDate() + " - " + today.getFullYear());
// 	currentDateNode.appendChild(dateText); 
// }


function addTask(){
	var task = null;
	task = document.getElementById("task-input").value;
	taskText = document.createTextNode(task);
	var listElement = document.createElement("li");
	listElement.appendChild(taskText);
	document.getElementById("task-list").appendChild(listElement);
}

var taskInput = document.getElementById("task-input");
taskInput.addEventListener("keyup", function(event) {
	if(event.keyCode === 13) {
		var task = null;
		event.preventDefault();
		document.getElementById("save-task").click();
	}
});

