<?php
	session_start();
	include("db.php");
	$method = $_SERVER["REQUEST_METHOD"];
	$content = $method == "POST"? $_POST :$_GET;
	if($content['username']==='yzj' && $content['pwd'==='123456']){
		$_SESSION["username"]='yzj';
		echo json_encode({'msg':'success','name': 'yzj','unit': '无锡','phone': '123'})
	}else{
		echo json_encode({'msg':'failed'})
	}
?>