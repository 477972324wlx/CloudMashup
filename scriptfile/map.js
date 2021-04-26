//document.write("<script language=javascript src=’Weather.js’></script>");

var map = new BMapGL.Map('container');
map.centerAndZoom(new BMapGL.Point(116.404, 39.928), 15);
map.enableScrollWheelZoom(true);
var geoc = new BMapGL.Geocoder();


function Center(name){
    map.centerAndZoom(name, 12);
}


