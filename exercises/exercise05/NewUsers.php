<?
  $host = "localhost";
  $user = "root";
  $password = "";

  $mysqli = new mysqli($host, $user, $password, "FavoriteFood");
  if ($mysqli->connect_errno) {
    die("Error: " . $mysqli->connect_errno);
  }
  $input_username = $_POST["username"];
  $input_password = $_POST["password"];


  $sql = "SELECT UserName FROM Users";
  $result = $mysqli->query($sql);

  while($row = $result->fetch_assoc()) {
      if ($input_username == $row['UserName']){
        echo"<a href='http://localhost/exercise05/index.html'>Return to login page</a>";
        exit("<p>User already existed</p>");
      }
    }

    $sql = "INSERT INTO Users (UserName, password) VALUES ('$input_username', '$input_password')";
    $mysqli->query($sql);

    echo"New User Added<br>";
    echo"<a href='http://localhost/exercise05/index.html'>Return to login page</a>";

?>
