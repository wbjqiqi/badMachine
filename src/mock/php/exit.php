<?php
	session_start();
	include("db.php");
	$myex=new FT("extime");
	$mydb=new FT("user");
	$phone=$_SESSION["Uphone"];
	$user=$mydb->find("Uphone=$phone");
	$id=$user["id"];
	$date=$_SESSION["date"];
	$time["Eofflinetime"]=time();
	$time["Eonlinetime"]=time()-$date;
	$myex->update($time,"Eid='$id' and Elogintime=$date");
	session_unset();
	session_destroy();
?>