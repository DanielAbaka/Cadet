<header class="header">

        <div class="container">
            <div class="header-wrapper clearfix">

                <!-- Navigation -->
                <div id="mobile-menu"></div>
                <nav class="navigation closed clearfix">
                    <a href="#" class="menu-toggle btn"><i class="fa fa-bars"></i></a>
                    <ul class="sf-menu nav">

                        <li>
                        	<a class="nav-link <?php if ($CURRENT_PAGE == "Index") {?>active<?php }?>" href="index.php">Home</a>
                        </li>
                        <li>
                        	<a class="nav-link <?php if ($CURRENT_PAGE == "About") {?>active<?php }?>" href="about.php">About Us</a>
                        </li>
                        <li>
                        	<a class="nav-link <?php if ($CURRENT_PAGE == "History") {?>active<?php }?>" href="history.php">History</a>
                        </li>
                        <li>
                        	<a class="nav-link <?php if ($CURRENT_PAGE == "Membership") {?>active<?php }?>" href="membership.php">Membership</a>
                            <ul class="sub-menu">
                                <li>
                                    <a class="nav-link <?php if ($CURRENT_PAGE == "Online Membership/Application Form") {?>active<?php }?>" href="online_membership_form.php">Online Membership/Application Form</a>
                                </li>
                                <li>
                                    <a class="nav-link <?php if ($CURRENT_PAGE == "Download Membership/Application Form") {?>active<?php }?>" href="assets/img/preview/Membership_Form.pdf" target="_blank">Download Membership/Application Form</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                        	<a class="nav-link <?php if ($CURRENT_PAGE == "Gallery") {?>active<?php }?>" href="#">Gallery</a>
                        </li>
						<li>
							<a class="nav-link <?php if ($CURRENT_PAGE == "Blog") {?>active<?php }?>" href="#">Blog & Events</a>
						</li>
                        <li>
                        	<a class="nav-link <?php if ($CURRENT_PAGE == "Contact Us") {?>active<?php }?>" href="contact.php">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <!-- /Navigation -->

            </div>
        </div>
    </header>
    <!-- /HEADER -->