
//document.addEventListener("DOMContentLoaded",function()){
$(document).ready(function(){

  var xhttp= new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      var all_creatures = data.creatures;
      for (var i = 0;i<data.creatures.length;i++){
        var each_creature = $("<option/>");
        each_creature.attr({'value': data.creatures[i].name}).text(data.creatures[i].name);
        $("#creatureList").append(each_creature);
      }
      $("#creatureList").change(function() {
        var creature_name = this.value;
        console.log(all_creatures.length)
        for (var i = 0;i<all_creatures.length;i++){
          if (all_creature[i].name == creature_name){
            var descriptionDiv = $("<div />");
            descriptionDiv.attr("id="+creature_name);
            $("#creatureArea").text = data.creatures[i].description;
        //    var pictureDiv = $("<div/>");
          //    pictureDiv ("<img src ='"+data.dogs[i].image +"'>");
          //    $("#dogsDiv").append(dogDiv);
}
}

              //This code will run when the select changes
              //this.value will contain the string that was selected in the drop down list (select element)
            });
    }
  };
  xhttp.open("GET","https://api.myjson.com/bins/17f3jl", true);
  xhttp.send();





});
//}
