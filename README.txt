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
	
Urls
----

	Current Servlet URL:
		* http://158.129.140.188:8484/RecommendationServlet/RecommendationServlet
		* GET method sends back recommendations, so we add userId from cookies.
			Example: http://158.129.140.188:8484/RecommendationServlet/RecommendationServlet?id=c6bff625bdb0393992c9d4db0c6bbe45
		* POST method sends back md5 strings to write into visitor's cookies to identify.
	
TODO's
------

	* Sidebar with recommendations is made dynamically with JavaScript, it should be edited to make it look pretty.
	* Find way how to get visitor's IP address.