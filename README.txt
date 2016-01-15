Includes
--------
	* functions.js - file contains all functions to get user data.
	* get.js - ajax call to Servlet to get recommendations.
	* js.cookie.js - https://github.com/js-cookie/js-cookie/
	* post.js - ajax call to Servlet to send user data.
	* recommend.js - add this file to append others.
	
How to user
-----------

	* Put recommender folder with JavaScript files into website's js folder.
	* If files are put into different folder, edit recommend.js file, to set proper path.
	* Add recommend.js to website's int <head> tag.
		<script type="text/javascript" src="%PATH%/recommend.js"></script>'
	* recommend.js will append other js files into <head> tag.
	
	* That's it. It should work.
	
TODO's
------

	* Sidebar with recommendations is made dynamically with JavaScript, it should be edited to make it look pretty.
	* Find way how to get visitor's IP address.