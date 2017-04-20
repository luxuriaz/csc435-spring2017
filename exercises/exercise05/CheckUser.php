<?
  $host = "localhost";
  $user = "root";
  $password = "";
  $input_username="";
  $mysqli = new mysqli($host, $user, $password, "FavoriteFood");
  if ($mysqli->connect_errno) {
    die("Error: " . $mysqli->connect_errno);
  }

  $sql = "SELECT UserName, Password FROM Users";
  $result = $mysqli->query($sql);

  $input_username = $_POST["username"];
  $input_password = $_POST["password"];

  if($result->num_rows >= 1) {
    while($row = $result->fetch_assoc()) {
      if ($input_username == $row['UserName']){
        if($input_password == $row['Password']){
          echo "You are login<br>";

          $sql = "SELECT FavoriteFood1,FavoriteFood2,FavoriteFood3 FROM FavoriteFood WHERE UserName = '$input_username' ";
          $result = $mysqli->query($sql);
          $row = $result->fetch_assoc();
          if ($row == '' or $row['FavoriteFood1']==''){
            $x = "No Favorite yet<br>";
            $sql = "INSERT INTO FavoriteFood (UserName) VALUES ('$input_username')";
            $mysqli->query($sql);
            exit("<a href='http://localhost/exercise05/FavoriteFood.html'>Add Your favorite Food here</a>");
            echo "$x";
          }else{
            $FavoriteFood1 = $row['FavoriteFood1'];
            $FavoriteFood2 = $row['FavoriteFood2'];
            $FavoriteFood3 = $row['FavoriteFood3'];
            echo"Here are your favoritefoods, you can change it by going to the update page<br>";
            echo "<b>FavoriteFood1: </b>$FavoriteFood1<b> FavoriteFood2: </b>$FavoriteFood2<b> FavoriteFood3: </b>$FavoriteFood3<br>";
            $sql = "UPDATE FavoriteFood SET FavoriteFood1 = '', FavoriteFood2 = '', FavoriteFood3 = '' WHERE UserName = '$input_username' ";
            $result = $mysqli->query($sql);
            exit("<a href='http://localhost/exercise05/FavoriteFood.html'>Update Your favorite Food here</a>");

          }
        }
      }
    }
    echo "User not exist or wrong password<br>";
    echo"<a href='http://localhost/exercise05/index.html'>Return to login page</a>";
  }
?>
