<?php
	class FT
	{
		public $conn;
		public $table;
		public function __construct($table){
			$this->table = $table;
			$this->conn = mysqli_connect("localhost","root","","badmachine");
			mysqli_query($this->conn,"set names utf8");
		}
		public function find($data){
			$sql = "select * from $this->table where $data";
			$result = mysqli_query($this->conn,$sql);
			$row = mysqli_fetch_assoc($result);
			return $row;
		}
		public function select($data){
			if($data==""){
				$sql = "select * from $this->table";
			}else{
				$sql = "select * from $this->table where $data";
			}
			$result = mysqli_query($this->conn,$sql);
			$arr = array();
			while($row = mysqli_fetch_assoc($result)){
				$arr[] = $row;
			}
			return $arr;
		}
		public function add($data){
			$sql = "insert into $this->table set ";
			foreach ($data as $key => $value) {
				$sql .= "$key='$value',";
			}
			$sql = substr($sql,0,strlen($sql)-1);
			$result = mysqli_query($this->conn,$sql);
			return $result;
		}
		public function delete($data){
			$sql = "delete from $this->table where $data";
			$result = mysqli_query($this->conn,$sql);
			return $result;
		}
		public function update($data,$where){
			$sql = "update $this->table set ";
			foreach ($data as $key => $value) {
				//拼接要插入的值
				$sql .= "$key='$value',";
			}
			//去掉逗号
			$sql = substr($sql,0,strlen($sql)-1);
			$sql .= " where $where";
			$result = mysqli_query($this->conn,$sql);
			return $result;
		}
	}


		class DB{

		//属性：在构造函数中实例化出来的一个数据库对象
		public $conn;

		//该对象要操纵的表
		public $table;

		//构造函数，传入表名
		public function __construct($table)
		{

			$this->table = $table;

			$this->conn = mysqli_connect("localhost","root","","familyFitness");

			mysqli_query($this->conn,"set names utf8");
		}

		//用来查询一条数据
		public function find($sql)
		{

			$result = mysqli_query($this->conn,$sql);

			$row = mysqli_fetch_assoc($result);

			return $row;

		}

		//查询多条数据
		public function select($sql)
		{

			$result = mysqli_query($this->conn,$sql);

			$arr = array();

			while($row = mysqli_fetch_assoc($result)){
				$arr[] = $row;
			}

			return $arr;

		}

		//删除
		public function delete($sql)
		{
			$result = mysqli_query($this->conn,$sql);
			return $result;
		}

		//插入数据
		public function add($data)
		{
			$sql = "insert into $this->table set ";

			foreach ($data as $key => $value) {
				//拼接要插入的值
				$sql .= "$key='$value',";
			}

			//去掉逗号
			$sql = substr($sql,0,strlen($sql)-1);


			$result = mysqli_query($this->conn,$sql);
			return $result;

		}


		public function update($data,$where)
		{
			$sql = "update $this->table set ";

			foreach ($data as $key => $value) {
				//拼接要插入的值
				$sql .= "$key='$value',";
			}

			//去掉逗号
			$sql = substr($sql,0,strlen($sql)-1);

			$sql .= " where $where";

			$result = mysqli_query($this->conn,$sql);
			return $result;
		}

	}
	// 测试
	// $myPT = new PT("requirement");
	// $data["Rcycle"]="123";
	// print_r($data);
	// print_r($myPT->find("Rcate='Web'"));
	// mysqli_close($myPT->conn);
?>