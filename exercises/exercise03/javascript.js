
var createPersonEntry = function (person){
  var personEntry = document.createElement("div");
  var personNameHeading = document.createElement("h1");
  personNameHeading.className = "personTitle";
  personNameHeading.innerHTML = nameField.value;
  personEntry.appendChild(personNameHeading);

  return personEntry
}
/*
var buttonClicked = function(){
  var nameListDiv = document.getElementById("nameList");
  for (var i =0; i<people.length; i++){
    //nameListDiv.innerHTML += "<p>"+people[i].sayHello()+"</p>";
    var personEntry = createPersonEntry(people[i]);
    nameListDiv.appendChild(personEntry);

    //var pElement = document.createElement("p");
    //pElement.innerHTML = people[i].sayHello();
    //nameListDiv.appendChild(pElement);

  }
}
*/
var sumbitPressed = function (){
  var nameField = document.getElementById("nameField");
  var nameListDiv = document.getElementById("nameList");
  var personEntry = createPersonEntry(nameField.value);
  nameListDiv.appendChild(personEntry);

}
