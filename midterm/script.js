
//document.addEventListener("DOMContentLoaded",function()){
$(document).ready(function(){

  var xhttp= new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
      var data = JSON.parse(this.responseText);
      var all_creatures = data.creatures;

      var generate_list = generated_list(all_creatures);
      $("#creatureArea").append(generate_list);
      $("#creatureArea").css("text-align", "center");

      var singleDiv = $("<div />");
      singleDiv.attr({"id":"JustOneDiv"});
      var changeDiv = $("<div/>");
      changeDiv.attr({"id":"changeDiv"});
      var TextDiv = $("<div/>");
      var ImgDiv = $("<img/>");
      var Header_Div = $("<h1/>");

      singleDiv.append(changeDiv);
      changeDiv.append(Header_Div);
      changeDiv.append(TextDiv);
      changeDiv.append(ImgDiv);

      $("#creatureArea").append(singleDiv);
      $("#creatureList").change(function() {
        var creature_name = this.value;
        for (var i = 0;i<all_creatures.length;i++){
          if (all_creatures[i].name == creature_name){
            Header_Div.attr({"class":"head"}).text(all_creatures[i].name);
            TextDiv.attr({"id":"TextDiv"}).text(all_creatures[i].description);
            ImgDiv.attr({"src":all_creatures[i].image});
            //ImgDiv.attr({"height":"500px"});
            ImgDiv.attr({"id":"singleDivImg"});
            }
          }
          $("#all_creature_div").replaceWith(changeDiv);

            });


    }
  };
  xhttp.open("GET","https://api.myjson.com/bins/17f3jl", true);
  xhttp.send();

var generated_list=function(all_creatures){
  var listDiv = $("<div/>");
  var selectArea =$("<select/>");
  selectArea.attr({'id':"creatureList"});

  for (var i = 0;i<all_creatures.length;i++){
    var each_creature = $("<option/>");
    each_creature.attr({'value': all_creatures[i].name}).text(all_creatures[i].name);
    selectArea.append(each_creature);
  }
  viewAllButton.click(function() {
    var AllDiv = $("<div />");
    AllDiv.attr({"id":"all_creature_div"});
    for (var i = 0;i<all_creatures.length;i++){
      var HeaderDiv = $("<h1/>");
      HeaderDiv.attr({"class":"head"}).text(all_creatures[i].name);
      var AllTextDiv = $("<div/>");
      AllTextDiv.text(all_creatures[i].description);
      var AllImgDiv = $("<img/>");
      AllImgDiv.attr({"src":all_creatures[i].image});
      AllImgDiv.attr({"id":"AllDivImg"});

      AllDiv.append(HeaderDiv);
      AllDiv.append(AllTextDiv);
      AllDiv.append(AllImgDiv);
    }

      $("#changeDiv").replaceWith(AllDiv);
  });
  listDiv.append(selectArea);
  return listDiv;
}

var viewAllButton = $("<button/>");
viewAllButton.text("View All")
$("#creatureArea").append(viewAllButton);


/*
var submitPressed = function(all_creatures){
  for (var i = 0;i<all_creatures.length;i++){
    var descriptionDiv = $("<div />");
    descriptionDiv.attr("id="+all_creatures[i].name);
    descriptionDiv.text(all_creatures.description);
    $("#creatureArea").append(descriptionDiv);
  }
}
*/

});
//}
