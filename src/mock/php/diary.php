<?php
	session_start();
	include("db.php");
	$mydb=new FT("user");
	$myFT=new FT("diary");
	$phone=$_SESSION['Uphone'];
	$user=$mydb->find("Uphone='$phone'");
	$id=$user["id"];
	if(empty($_POST['first'])){
		header("Content-Type:text/json");
		$alldiary = $myFT->select("Did='$id' order by Dtime");
		echo json_encode($alldiary);
	}else{	
		$diary["Dcontent"] = $_POST["userComment"];
		$diary["Did"] = $id;
		$diary["Dname"]=$_SESSION["Uuser"];
		$diary["DTime"] = $_POST["commentTime"];
		if($diary["Dcontent"]!=""){
			$myFT->add($diary);	
		}
		$alldiary = $myFT->select("Did='$id' order by Dtime");
		header("Content-Type:text/json");
		echo json_encode($alldiary);
	}
?>