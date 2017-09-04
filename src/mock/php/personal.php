<?php
	session_start();
	header("Content-type:text/html;charset=UTF-8");
	$method = $_SERVER["REQUEST_METHOD"];
	$personal = $method == "POST"? $_POST :$_GET;
	include("db.php");
	$mydb = new FT("user");
	$myex = new FT("extime");
	$phone = $_SESSION["Uphone"];
	if($personal["personal"]==0){
		$myInfomation = $mydb->find("Uphone='$phone'");
		header("Content-Type:text/json");
		echo json_encode($myInfomation);
	}else if($personal["personal"]==1){
		unset($personal["personal"]);
		$mydb->update($personal,"Uphone='$phone'");
		$myInfomation = $mydb->find("Uphone='$phone'");
		header("Content-Type:text/json");
		echo json_encode($myInfomation);
	}else if($personal["personal"]==2){
//		$myInfomation = $mydb->find("Uphone='$phone'");
//		$id = $myInfomation["id"];
//		$date=$_SESSION["date"];
//		$time=$myex->find("Eid='$id' and Elogintime='$date'" );
//		header("Content-Type:text/json");
		echo ($_SESSION["date"]);
	}else if($personal["personal"]==3){
		$mydy=new FT("diary");
		$Dcommentid=$personal["Dcommentid"];
		$mydy->delete("Dcommentid='$Dcommentid'");
	}
	
?>