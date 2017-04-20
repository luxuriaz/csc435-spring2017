<?
  $host = "localhost";
  $user = "root";
  $password = "";
  $mysqli = new mysqli($host, $user, $password, "FavoriteFood");
  if ($mysqli->connect_errno) {
    die("Error: " . $mysqli->connect_errno);
  }
  $FavoriteFood1 = $_POST["FavoriteFood1"];
  $FavoriteFood2 = $_POST["FavoriteFood2"];
  $FavoriteFood3 = $_POST["FavoriteFood3"];

  $sql = "SELECT UserName,FavoriteFood1 FROM FavoriteFood";
  $result = $mysqli->query($sql);
  while($row = $result->fetch_assoc()) {
      if ($row['UserName']!=""){
        if ($row['FavoriteFood1'] == ""){
          $username = $row['UserName'];
          break;
        }
      }
    }
  $sql = "UPDATE FavoriteFood SET FavoriteFood1 = '$FavoriteFood1', FavoriteFood2 = '$FavoriteFood2', FavoriteFood3 = '$FavoriteFood3' WHERE UserName = '$username' ";
  $result = $mysqli->query($sql);
  echo" Your favorite food has added!<br>";
  echo"<a href='http://localhost/exercise05/index.html'>Return to login page</a>";
