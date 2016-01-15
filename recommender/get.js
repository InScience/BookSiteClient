$(document).ready(function() {
 var getCookiesJSON = Cookies.getJSON('manoknyga');
	if(document.cookie.indexOf("manoknyga") >= 0) {
		cookiesId = getCookiesJSON.id;
	} else {
		cookiesId = "";
	}

	$.ajax({
		url: 'http://158.129.140.188:8484/RecommendationServlet/RecommendationServlet?id=' + cookiesId,
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			var book = data["book"];
			var div = document.createElement("DIV");
			div.setAttribute('id', 'sidebar');

			for (var i = 0; i < book.length; i++) {
				var span = document.createElement("SPAN");
				div.appendChild(span);   

				var p = document.createElement("P");  
				span.appendChild(p);  

				var title = document.createTextNode(book[i].title);  
				p.appendChild(title); 
				var br = document.createElement("br");
				p.appendChild(br);   

				var url = document.createElement("A");  
				url.setAttribute("href", book[i].url); 
				span.appendChild(url);

				var image = document.createElement("IMG"); 
				image.setAttribute('src', book[i].img);  
				url.appendChild(image);   

				document.body.appendChild(div); 
			}
		}

	});

});