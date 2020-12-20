/*
	* Matiz Resize Image Map - Styleship Dynamic USEMAP Javascript - jQuery Templete
	* Version 1.0.0
	* www.styleship.com
	* By Woos / Multimedia team Director;
	*
	* 본 소스는 법으로 보호되는 Styleship의 지적재산으로서
	* 본 제작자와 회사의 허가를 받지 않은 사용자 혹은 사이트에서 무단 사용시  
	* 민형사상의 처벌 및 배상의 책임이 있습니다.
	* 
	ⓒ Styleship inc. All Right Reserved. 
*/

var MatizResizeMap;(function(a){jQuery.matizResizeMap=function(){var c=this;var e;var d;var f;c.start=function(){e=new Array();d=new Array();jQuery(document).find("img.resizemap").each(function(){var h=jQuery(this);if(!h.attr("usemap")){return}var l=h.attr("usemap").split("#").join("");var m;var k=0;var j=0;if(h.attr("width")&&h.attr("width").split("%").length==1){k=Number(h.attr("width"));h.attr("width-init",k)}else{if(Number(h.attr("width-init"))>1){k=Number(h.attr("width-init"))}}if(h.attr("height")&&h.attr("height").split("%").length==1){k=Number(h.attr("height"));h.attr("height-init",k)}else{if(Number(h.attr("height-init"))>1){k=Number(h.attr("height-init"))}}if(!k&&!j){return}m=jQuery('map[name="'+l+'"]');if(m.size()==0){return}h.data("map",m);b(m);e.push(h);d.push(m)});f=setInterval(g,1000)};function b(h){h.children("area").each(function(){var j=jQuery(this);j.attr("coords-init",j.attr("coords"))})}function g(){c.refreshAllMaps()}c.refreshAllMaps=function(){for(var h=0;h<d.length;h++){c.refreshMap(e[h])}};c.refreshMap=function(k){var j;var h;var l;var m=k.data("map");if(k.attr("width-init")){j=k.width()/Number(k.attr("width-init"))}else{if(k.attr("height-init")){j=e[i].height()/Number(k.attr("height-init"))}else{return}}m.children("area").each(function(){h=jQuery(this).attr("coords-init").split(",");l=new Array();for(var n=0;n<h.length;n++){l[n]=Math.round(Number(h[n])*j)}jQuery(this).attr("coords",l.join(","))})};c.resetMap=function(k){var j;var h;var l;var m=k.data("map");if(k.attr("width-init")){j=Number(k.attr("width-init"))/k.width()}else{j=Number(k.attr("height-init"))/e[i].height()}m.children("area").each(function(){jQuery(this).attr("coords",jQuery(this).attr("coords-init"))})};return c};MatizResizeMap=new jQuery.matizResizeMap();jQuery(document).ready(function(){MatizResizeMap.start()})})(jQuery);