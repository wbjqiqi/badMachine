<?php
	$method = $_SERVER["REQUEST_METHOD"];
	include("db.php");
	$mydb = new FT("allmachine");
	if($content["model"]==0){
		$mydb = new FT("news");
	}else if($content["model"]==1){
		$mydb = new FT("muscle");
	}else if($content["model"]==2){
		$mydb = new FT("plan");
	}else if($content["model"]==3){
		$mydb = new FT("recipe");
	}else if($content["model"]==4){
		$mydb = new FT("video");
	};
	if(isset($content["sort"])){
		if($content["sort"]==0){
			$AllNews = $mydb->select("Nid!='0' order by Nhot");
		}else if($content["sort"]==1){
			$AllNews = $mydb->select("Nid!='0' order by Ngood");
		}
	}else{
		$AllNews = $mydb->select("Nid!='0' order by Nhot");
	}
	
	header("Content-Type:text/json");
	echo json_encode($AllNews);
?>