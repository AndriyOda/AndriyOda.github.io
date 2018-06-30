<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Andriy Oda - FeedBack</title>
	<link rel="stylesheet" href="css/style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
	<meta name="description" content="Andriy Oda - private web-site. I am freelancer. And in this web-site I want to talk about me...">
	<meta name="Keywords" content="HTML, CSS, JS, Frontend, Backend, freelance,Andriy Oda, Andriy Oda - private web-site"> 
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Exo+2:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
</head>
<body>


<div id="particles-js"></div>


<div class="wrepper">
	
<?php
  //Если форма отправлена
  if(isset($_POST['submit'])) {
 //Проверка Поля ИМЯ
  if(trim($_POST['name']) == '') {
  $hasError = true;
  } else {
  $name = trim($_POST['name']);
  }

 //Проверка правильности ввода EMAIL
  if(trim($_POST['email']) == '')  {
  $hasError = true;
  } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
  $hasError = true;
  } else {
  $email = trim($_POST['email']);
  }
 //Проверка наличия ТЕКСТА сообщения
  if(trim($_POST['message']) == '') {
  $hasError = true;
  } else {
  if(function_exists('stripslashes')) {
  $comments = stripslashes(trim($_POST['message']));
  } else {
  $comments = trim($_POST['message']);
  }
  }
 //Если ошибок нет, отправить email
  if(!isset($hasError)) {
  $emailTo = 'name@yourdomain.com'; //Сюда введите Ваш email
  $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments";
  $headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
 mail($emailTo, $subject, $body, $headers);
  $emailSent = true;
  }
  }
  ?>	



		

		<div class="shy-menu">
		  <a class="shy-menu-hamburger">
		    <span class="layer top"></span>
		    <span class="layer mid"></span>
		    <span class="layer btm"></span>
		  </a>
	  <div class="shy-menu-panel">
	    <ul>
	      <li><a href="https://andriyoda.github.io/en/FeedBack/">EN</a></li>
	      <li><a href="https://andriyoda.github.io/ru/FeedBack/">RU</a></li>
	      <br>
	      <br>
	      <br>
	      <br>
	      <br>
	      <li><a href="https://andriyoda.github.io/en/Home/">Home</a></li>
	      <br>
	      <br>
	      <li><a href="https://andriyoda.github.io/en/AboutMe/">About me</a></li>
	      <br>
	      <br>
	      <li><a href="https://andriyoda.github.io/en/ToOrder/">To order</a></li>
	      <br>
	      <br>
	      <li><a href="https://andriyoda.github.io/en/MyWorks/">My works</a></li>
	      <br>
	      <br>
	      <li><a href="https://andriyoda.github.io/en/FeedBack/">Feedback</a></li>
	    </ul>
	  </div>
	</div>

<div class="menu open">
  <a class="hamburger">
    <span class="layer top"></span>
    <span class="layer mid"></span>
  	<span class="layer btm"></span>
  </a><!-- /hamburger -->
</div>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
	<div class="form d-flex">
		<div class="title"><h2>You have questions? Ok!</h2></div>
		<input class="input" name="name" type="text" placeholder="Your name">
		<input class="input" name="email" type="text" placeholder="Your Email">
		<textarea class="input" name="message" placeholder="Your questions"></textarea>
		<input class="btn" type="submit" value="Send">

		<div class="f-b">
			<p align="center">E-mail: kolyaodri.ko@gmail.com</p>
		</div>

	</div>
</form>

<div class="jquery-script-ads" style="position:absolute; top: 80px; left:150px; z-index:-9999;">
</script>
<script type="text/javascript"
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(function() {
	
	initDropDowns($("div.shy-menu"));

});

function initDropDowns(allMenus) {

	allMenus.children(".shy-menu-hamburger").on("click", function() {
		
		var thisTrigger = jQuery(this),
			thisMenu = thisTrigger.parent(),
			thisPanel = thisTrigger.next();

		if (thisMenu.hasClass("is-open")) {

      		thisMenu.removeClass("is-open");
			
      		jQuery(document).off("click");                                 
      		thisPanel.off("click");

		} else {			
			
    		allMenus.removeClass("is-open");	
			thisMenu.addClass("is-open");
	
			jQuery(document).on("click", function() {
				allMenus.removeClass("is-open");
			});
			thisPanel.on("click", function(e) {
				e.stopPropagation();
			});
		}
		
		return false;
	});
}
</script>

			<footer>
				<div class="fab">
				  	<span class="fab-action-button">
				        <i class="fab-action-button__icon"></i>
				    </span>
					  <ul class="fab-buttons">
					    <li class="fab-buttons__item">
					      <a href="#" class="fab-buttons__link" data-tooltip="Facebook">
					        <i class="icon-material icon-material_fb"></i>
					      </a>
					    </li>
					    <li class="fab-buttons__item">
					      <a href="#" class="fab-buttons__link" data-tooltip="Twitter">
					        <i class="icon-material icon-material_tw"></i>
					      </a>
					    </li>
					    <li class="fab-buttons__item">
					      <a href="#" class="fab-buttons__link" data-tooltip="Linkedin">
					        <i class="icon-material icon-material_li"></i>
					      </a>
					    </li>
					    <li class="fab-buttons__item">
					      <a href="#" class="fab-buttons__link" data-tooltip="Google+">
					        <i class="icon-material icon-material_gp"></i>
					      </a>
					    </li>
					  </ul>
				</div>
			</footer>
		</div>


	</div>

<script type="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../particles.js"></script>
<script src="js/app.js"></script>
<script src="js/common.js"></script>



</body>
</html>