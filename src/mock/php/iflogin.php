<?php
	session_start();
//	session_unset();session_destroy();
//	$method = $_SERVER["REQUEST_METHOD"];
//	
//	$login = $method == "POST"? $_POST["login"] :$_GET["login"];
//	if($login==0){
	if(!isset($_SESSION["Uuser"])) {
		$a["content"]="注册/登录";
		$a["href"] = "login.html";
	}else{
		$a["content"]=$_SESSION["Uuser"];
		$a["href"]="personal.html";
	}
	header("Content-Type:text/json");
	echo json_encode($a);
//	}else if($login==1){
//		echo (!isset($_SESSION["Uuser"])? flase : true);
//	}
	
?>