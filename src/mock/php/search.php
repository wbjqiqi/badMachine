<?php

header("Content-Type:application/json");

@$kw = $_REQUEST['kw'];
@$model = $_REQUEST['model'];
@$range = $_REQUEST['range'];
if(empty($kw))
{
    echo '[]';
    return ;
}

$conn = mysqli_connect("localhost","root","","familyFitness");
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

if($range==1){
	$output = array();
	for($i=0;$i<=4;$i++){
		$model=$i;
		if($model==0){
			$sql = "SELECT * FROM news WHERE Ntitle LIKE '%$kw%' order by Nhot";
		}else if($model==1){
			$sql = "SELECT * FROM muscle WHERE Ntitle LIKE '%$kw%' order by Nhot";
		}else if($model==2){
			$sql = "SELECT * FROM plan WHERE Ntitle LIKE '%$kw%' order by Nhot";
		}else if($model==3){
			$sql = "SELECT * FROM recipe WHERE Ntitle LIKE '%$kw%' order by Nhot";
		}else if($model==4){
			$sql = "SELECT * FROM video WHERE Ntitle LIKE '%$kw%' order by Nhot";
		}
		$result = mysqli_query($conn,$sql);

		while(true)
		{
		    $row = mysqli_fetch_assoc($result);
		    if(!$row)
		    {
		        break;
		    }
		    $output[] = $row;
		}
	}
	echo json_encode($output);
}else{
	if($model==0){
		$sql = "SELECT * FROM news WHERE Ntitle LIKE '%$kw%' order by Nhot";
	}else if($model==1){
		$sql = "SELECT * FROM muscle WHERE Ntitle LIKE '%$kw%' order by Nhot";
	}else if($model==2){
		$sql = "SELECT * FROM plan WHERE Ntitle LIKE '%$kw%' order by Nhot";
	}else if($model==3){
		$sql = "SELECT * FROM recipe WHERE Ntitle LIKE '%$kw%' order by Nhot";
	}else if($model==4){
		$sql = "SELECT * FROM video WHERE Ntitle LIKE '%$kw%' order by Nhot";
	}else{
		echo '[]';
	    return ;
	}
	$result = mysqli_query($conn,$sql);
	
	
	$output = array();
	while(true)
	{
	    $row = mysqli_fetch_assoc($result);
	    if(!$row)
	    {
	        break;
	    }
	    $output[] = $row;
	}
	
	echo json_encode($output);
}

?>