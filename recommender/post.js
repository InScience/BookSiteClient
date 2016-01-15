$(document).ready(function() {

// Getting items from cart
  var json = [];
  $("ul.cart_list > li > a").each(function () {
    var item = this.getAttribute('href');
    var str = '{"' + item.replace("\t", "").replace("\t", "").replace("\t", "").replace("\n", "").replace("\\","") + '"}';
    json.push(str);
  });
  var cart = JSON.stringify(json);

  var userAgent = getUserAgent(); // OK
  var browserPlugins = getBrowserPlugins(); // OK
  var headers = getHeaders(); // OK
  var timezone = getTimeZone(); // OK
  var screenProperties = getScreen(); // OK
  var enabledCookies = getEnabledCookies(); // OK
  var fonts = getFonts(); // OK
  var url = getVisitedUrl(); // OK
  var timestamp = getTimestamp(); // OK
  var ip = "";
  var cookiesId;
  var cookiesData;
  var getCookiesJSON = Cookies.getJSON('manoknyga');


  if(document.cookie.indexOf("manoknyga") >= 0) {
    console.log("Cookies are not empty");
    cookiesId = getCookiesJSON.id;
    cookiesData = getCookiesJSON.data;
  } else {
    console.log("Cookies are empty");
    cookiesId = "";
    cookiesData = ""; 
  }

  $.ajax({
    url: 'http://158.129.140.188:8484/RecommendationServlet/RecommendationServlet',
    type: 'POST',
    contentType: "application/json; charset=utf-8",
    data: 
      '{"userAgent" : "' + userAgent + '", \
      "headers" : ' + headers + ', \
      "screen" : ' + screenProperties + ', \
      "timezone" : ' + timezone + ', \
      "enabledCookies" : ' + enabledCookies + ', \
      "plugins" : ' + browserPlugins + ', \
      "fonts" : ' + fonts + ', \
      "cookiesId" : "' + cookiesId + '", \
      "cookiesData" : "' + cookiesData + '", \
      "ip" : "' + ip + '", \
      "timestamp" : ' + timestamp + ', \
      "url" : "' + url + '", \
      "cart" : ' + cart + ' \
      }',
    dataType: 'json',
    success: function(data) {
      // To get SUCCESS Servlet have to return JSON!!!
      //Cookies.remove('manoknyga');
      Cookies.set('manoknyga', {id: data.cookiesId, data: data.cookiesData}, {expires: 3650});
      console.log(data);
    },
    error: function(data) {
      //console.log("fail");
    }

  });

});