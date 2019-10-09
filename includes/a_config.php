<?php
	switch ($_SERVER["SCRIPT_NAME"]) {
		case "/php-template/about.php":
			$CURRENT_PAGE = "About"; 
			$PAGE_TITLE = "About Us";
			break;
		case "/php-template/contact.php":
			$CURRENT_PAGE = "Contact"; 
			$PAGE_TITLE = "Contact Us";
			break;
		case "/php-template/history.php":
			$CURRENT_PAGE = "History"; 
			$PAGE_TITLE = "History";
			break;
		case "/php-template/membership.php":
			$CURRENT_PAGE = "Membership"; 
			$PAGE_TITLE = "Membership";
			break;
		case "/php-template/online_membership_form.php":
			$CURRENT_PAGE = "Online Membership/Application Form"; 
			$PAGE_TITLE = "Online Membership/Application Form";
			break;

		default:
			$CURRENT_PAGE = "Index";
			$PAGE_TITLE = "448 Cadet";
	}
?>