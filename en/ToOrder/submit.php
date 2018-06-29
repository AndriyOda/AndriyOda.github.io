<?php
if (!empty($_POST['name']) AND !empty($_POST['email'] ) {
	
	$headers = 'From: Andriy Oda';
	$theme   = 'New messeng'

	$letter  ='Name:'.$_POST['name'].'\r\n';
	$letter .='Email:'.$_POST['email'].'\r\n';
	$letter .='Email:'.$_POST['messeng'].'\r\n';


	mail('kolyaodri.ko@gmail.com', $theme, $letter)
     
	exit;              
} else {
 echo "Для отправки сообщения заполните все поля!";
      exit;
}