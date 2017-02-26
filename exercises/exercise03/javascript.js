
var createPersonEntry = function (nameField,address,phoneNumber,picture,CCnumber){
  var personEntry = document.createElement("div");
  var personNameHeading = document.createElement("h1");
  var personAddress = document.createElement("p");
  var personPhoneNumber = document.createElement("p");
  var personCCnumber = document.createElement("p");
  var personPicture = document.createElement("img");
  personNameHeading.className = "personTitle";
  personNameHeading.innerHTML = nameField ;
  personAddress.className = "Address";
  personAddress.innerHTML = address;
  personPhoneNumber.className = "phoneNumber";
  personPhoneNumber.innerHTML = phoneNumber;
  personCCnumber.className = "CCnumber";
  personCCnumber.innerHTML = CCnumber;
  personPicture.className = "picture";
  personPicture.src = picture;
//  personNameHeading.innerHTML = address.value;
//  personNameHeading.innerHTML = phoneNumber.value;
  personEntry.appendChild(personNameHeading);
  personEntry.appendChild(personAddress);
  personEntry.appendChild(personPhoneNumber);
  personEntry.appendChild(personCCnumber);
  personEntry.appendChild(personPicture);

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
  var nameField = document.getElementById("nameField").value;
  var address = document.getElementById("address").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var picture = document.getElementById("picture").value;
  var CCnumber = document.getElementById("CCnumber").value;
  var nameListDiv = document.getElementById("nameList");
  var personEntry = createPersonEntry(nameField,address,phoneNumber,picture,CCnumber);
  nameListDiv.appendChild(personEntry);

}
