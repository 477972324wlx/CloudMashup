function getWeather(pt)
{
    var url = "https://devapi.qweather.com/v7/weather/now?location="
    var loc = String(pt.lng) + "," + String(pt.lat);
    var key = "&key=1c4968ef55e0434499eb6f9671a0179b"
    var query = url+loc+key;
    var ret = httpGet(query);
    var json = JSON.parse(ret);
    return json["now"];
}
