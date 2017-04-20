<?
  //Connect to the database named "ClassDemo" that is hosted locally
  $host = "localhost";
  $user = "root";
  $password = "";

  $mysqli = new mysqli($host, $user, $password, "FavoriteFood");
  if ($mysqli->connect_errno) {
    die("Error: " . $mysqli->connect_errno);
  }

  $sql = "DELETE FROM Users";
  $result = $mysqli->query($sql);
  $sql = "DELETE FROM FavoriteFood";
  $result = $mysqli->query($sql);
  echo "done";
