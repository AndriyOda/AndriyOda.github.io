<?php
if (!empty($_POST['name']) AND !empty($_POST['email'] ) {
	
	$headers = 'From: Andriy Oda';
	$theme   = 'New messeng'

	$letter  ='Name:'.$_POST['name'].'\r\n';
	$letter .='Email:'.$_POST['email'].'\r\n';
	$letter .='Email:'.$_POST['messeng'].'\r\n';


	if (mail('kolyaodri.ko@gmail.com', $theme, $letter)){
      header("Location: /ToOrder/thankyou.html");
    } else {
      header("Location: /ToOrder/error.html");
    }  
              
} else {
  header("Location: /ToOrder/no-s.html");
}