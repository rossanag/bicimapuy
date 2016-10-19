(function(b){var a;if("function"===typeof define&&define.amd)define(["leaflet"],b);else if("undefined"!==typeof module)a=require("leaflet"),module.exports=b(a);else{if("undefined"===typeof window.L)throw"Leaflet must be loaded first";b(window.L)}})(function(b){b.Control.Geocoder=b.Control.extend({options:{showResultIcons:!1,collapsed:!0,expand:"click",position:"topright",placeholder:"Search...",errorMessage:"No se encontr\u00f3 nada.",city:""},_callbackId:0,initialize:function(a){b.Util.setOptions(this,
a);this.options.geocoder||(this.options.geocoder=new b.Control.Geocoder.Nominatim)},onAdd:function(a){var c=b.DomUtil.create("div","leaflet-control-geocoder"),f=b.DomUtil.create("div","leaflet-control-geocoder-icon",c),g=this._form=b.DomUtil.create("form","leaflet-control-geocoder-form",c);this._map=a;this._container=c;a=this._input=b.DomUtil.create("input");a.type="text";a.placeholder=this.options.placeholder;b.DomEvent.addListener(a,"keydown",this._keydown,this);this._errorElement=document.createElement("div");
this._errorElement.className="leaflet-control-geocoder-form-no-error";this._errorElement.innerHTML=this.options.errorMessage;this._alts=b.DomUtil.create("ul","leaflet-control-geocoder-alternatives leaflet-control-geocoder-alternatives-minimized");g.appendChild(a);g.appendChild(this._errorElement);c.appendChild(this._alts);b.DomEvent.addListener(g,"submit",this._geocode,this);this.options.collapsed?"click"===this.options.expand?b.DomEvent.addListener(f,"click",function(a){0===a.button&&2!==a.detail&&
this._toggle()},this):(b.DomEvent.addListener(f,"mouseover",this._expand,this),b.DomEvent.addListener(f,"mouseout",this._collapse,this),this._map.on("movestart",this._collapse,this)):this._expand();b.DomEvent.disableClickPropagation(c);return c},_geocodeResult:function(a){b.DomUtil.removeClass(this._container,"leaflet-control-geocoder-throbber");if(1===a.length)this._geocodeResultSelected(a[0]);else if(0<a.length){this._alts.innerHTML="";this._results=a;b.DomUtil.removeClass(this._alts,"leaflet-control-geocoder-alternatives-minimized");
for(var c=0;c<a.length;c++)this._alts.appendChild(this._createAlt(a[c],c))}else b.DomUtil.addClass(this._errorElement,"leaflet-control-geocoder-error")},setInputValue:function(a){this._input.value=a},getInputValue:function(){return this._input.value},markGeocode:function(a){this._map.fitBounds(a.bbox);this._geocodeMarker&&this._map.removeLayer(this._geocodeMarker);this._geocodeMarker=(new b.Marker(a.center)).bindPopup(a.html||a.name).addTo(this._map).openPopup();return this},_geocode:function(a){b.DomEvent.preventDefault(a);
b.DomUtil.addClass(this._container,"leaflet-control-geocoder-throbber");this._clearResults();this.options.geocoder.geocode(this._input.value+" "+this.options.city,this._geocodeResult,this);return!1},_geocodeResultSelected:function(a){this.options.collapsed?this._collapse():this._clearResults();this.markGeocode(a)},_toggle:function(){0<=this._container.className.indexOf("leaflet-control-geocoder-expanded")?this._collapse():this._expand()},_expand:function(){b.DomUtil.addClass(this._container,"leaflet-control-geocoder-expanded");
this._input.select()},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-geocoder-expanded","");b.DomUtil.addClass(this._alts,"leaflet-control-geocoder-alternatives-minimized");b.DomUtil.removeClass(this._errorElement,"leaflet-control-geocoder-error")},_clearResults:function(){b.DomUtil.addClass(this._alts,"leaflet-control-geocoder-alternatives-minimized");this._selection=null;b.DomUtil.removeClass(this._errorElement,"leaflet-control-geocoder-error")},
_createAlt:function(a,c){var f=document.createElement("li"),g=b.DomUtil.create("a","",f),k=this.options.showResultIcons&&a.icon?b.DomUtil.create("img","",g):null,e=a.html?void 0:document.createTextNode(a.name);k&&(k.src=a.icon);g.href="#";g.setAttribute("data-result-index",c);a.html?g.innerHTML=a.html:g.appendChild(e);b.DomEvent.addListener(f,"click",function(c){b.DomEvent.preventDefault(c);this._geocodeResultSelected(a)},this);return f},_keydown:function(a){var c=this,f=function(a){c._selection&&
(b.DomUtil.removeClass(c._selection.firstChild,"leaflet-control-geocoder-selected"),c._selection=c._selection[0<a?"nextSibling":"previousSibling"]);c._selection||(c._selection=c._alts[0<a?"firstChild":"lastChild"]);c._selection&&b.DomUtil.addClass(c._selection.firstChild,"leaflet-control-geocoder-selected")};switch(a.keyCode){case 27:this.options.collapsed&&this._collapse();break;case 38:f(-1);b.DomEvent.preventDefault(a);break;case 40:f(1);b.DomEvent.preventDefault(a);break;case 13:this._selection&&
(f=parseInt(this._selection.firstChild.getAttribute("data-result-index"),10),this._geocodeResultSelected(this._results[f]),this._clearResults(),b.DomEvent.preventDefault(a))}return!0}});b.Control.geocoder=function(a,c){return new b.Control.Geocoder(a,c)};b.Control.Geocoder.callbackId=0;b.Control.Geocoder.jsonp=function(a,c,f,g,k){var e="_l_geocoder_"+b.Control.Geocoder.callbackId++;c[k||"callback"]=e;window[e]=b.Util.bind(f,g);f=document.createElement("script");f.type="text/javascript";f.src=a+b.Util.getParamString(c);
f.id=e;document.getElementsByTagName("head")[0].appendChild(f)};b.Control.Geocoder.getJSON=function(a,c,f){var g=new XMLHttpRequest;g.open("GET",a+b.Util.getParamString(c),!0);g.send(null);g.onreadystatechange=function(){4==g.readyState&&(200!=g.status&&304!=req.status||f(JSON.parse(g.response)))}};b.Control.Geocoder.template=function(a,c,f){return a.replace(/\{ *([\w_]+) *\}/g,function(a,k){var e=c[k];void 0===e?e="":"function"===typeof e&&(e=e(c));return b.Control.Geocoder.htmlEscape(e)})};b.Control.Geocoder.htmlEscape=
function(){function a(a){return g[a]}var b=/[&<>"'`]/g,f=/[&<>"'`]/,g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};return function(g){if(null==g)return"";if(!g)return g+"";g=""+g;return f.test(g)?g.replace(b,a):g}}();b.Control.Geocoder.Nominatim=b.Class.extend({options:{serviceUrl:"//nominatim.openstreetmap.org/",geocodingQueryParams:{},reverseQueryParams:{},htmlTemplate:function(a){a=a.address;var c=[];(a.road||a.building)&&c.push("{building} {road} {house_number}");
(a.city||a.town||a.village)&&c.push('<span class="'+(0<c.length?"leaflet-control-geocoder-address-detail":"")+'">{postcode} {city}{town}{village}</span>');(a.state||a.country)&&c.push('<span class="'+(0<c.length?"leaflet-control-geocoder-address-context":"")+'">{state} {country}</span>');return b.Control.Geocoder.template(c.join("<br/>"),a,!0)}},initialize:function(a){b.Util.setOptions(this,a)},geocode:function(a,c,f){b.Control.Geocoder.jsonp(this.options.serviceUrl+"search/",b.extend({q:a,limit:5,
format:"json",addressdetails:1},this.options.geocodingQueryParams),function(a){for(var k=[],e=a.length-1;0<=e;e--){for(var d=a[e].boundingbox,h=0;4>h;h++)d[h]=parseFloat(d[h]);k[e]={icon:a[e].icon,name:a[e].display_name,html:this.options.htmlTemplate?this.options.htmlTemplate(a[e]):void 0,bbox:b.latLngBounds([d[0],d[2]],[d[1],d[3]]),center:b.latLng(a[e].lat,a[e].lon),properties:a[e]}}c.call(f,k)},this,"json_callback")},reverse:function(a,c,f,g){b.Control.Geocoder.jsonp(this.options.serviceUrl+"reverse/",
b.extend({lat:a.lat,lon:a.lng,zoom:Math.round(Math.log(c/256)/Math.log(2)),addressdetails:1,format:"json"},this.options.reverseQueryParams),function(a){var c=[],d;a&&a.lat&&a.lon&&(d=b.latLng(a.lat,a.lon),c.push({name:a.display_name,html:this.options.htmlTemplate?this.options.htmlTemplate(a):void 0,center:d,bounds:b.latLngBounds(d,d),properties:a}));f.call(g,c)},this,"json_callback")}});b.Control.Geocoder.nominatim=function(a){return new b.Control.Geocoder.Nominatim(a)};b.Control.Geocoder.Bing=b.Class.extend({initialize:function(a){this.key=
a},geocode:function(a,c,f){b.Control.Geocoder.jsonp("//dev.virtualearth.net/REST/v1/Locations",{query:a,key:this.key},function(a){for(var k=[],e=a.resourceSets[0].resources.length-1;0<=e;e--){var d=a.resourceSets[0].resources[e],h=d.bbox;k[e]={name:d.name,bbox:b.latLngBounds([h[0],h[1]],[h[2],h[3]]),center:b.latLng(d.point.coordinates)}}c.call(f,k)},this,"jsonp")},reverse:function(a,c,f,g){b.Control.Geocoder.jsonp("//dev.virtualearth.net/REST/v1/Locations/"+a.lat+","+a.lng,{key:this.key},function(a){for(var c=
[],d=a.resourceSets[0].resources.length-1;0<=d;d--){var h=a.resourceSets[0].resources[d],l=h.bbox;c[d]={name:h.name,bbox:b.latLngBounds([l[0],l[1]],[l[2],l[3]]),center:b.latLng(h.point.coordinates)}}f.call(g,c)},this,"jsonp")}});b.Control.Geocoder.bing=function(a){return new b.Control.Geocoder.Bing(a)};b.Control.Geocoder.RaveGeo=b.Class.extend({options:{querySuffix:"",deepSearch:!0,wordBased:!1},jsonp:function(a,c,f){var g="_l_geocoder_"+b.Control.Geocoder.callbackId++,k=[];a.prepend=g+"(";a.append=
")";for(var e in a)k.push(e+"="+escape(a[e]));window[g]=b.Util.bind(c,f);a=document.createElement("script");a.type="text/javascript";a.src=this._serviceUrl+"?"+k.join("&");a.id=g;document.getElementsByTagName("head")[0].appendChild(a)},initialize:function(a,c,f){b.Util.setOptions(this,f);this._serviceUrl=a;this._scheme=c},geocode:function(a,c,f){b.Control.Geocoder.jsonp(this._serviceUrl,{address:a+this.options.querySuffix,scheme:this._scheme,outputFormat:"jsonp",deepSearch:this.options.deepSearch,
wordBased:this.options.wordBased},function(a){for(var k=[],e=a.length-1;0<=e;e--){var d=a[e],h=b.latLng(d.y,d.x);k[e]={name:d.address,bbox:b.latLngBounds([h]),center:h}}c.call(f,k)},this)}});b.Control.Geocoder.raveGeo=function(a,c,f){return new b.Control.Geocoder.RaveGeo(a,c,f)};b.Control.Geocoder.MapQuest=b.Class.extend({initialize:function(a){this._key=decodeURIComponent(a)},_formatName:function(){var a=[],b;for(b=0;b<arguments.length;b++)arguments[b]&&a.push(arguments[b]);return a.join(", ")},
geocode:function(a,c,f){b.Control.Geocoder.jsonp("//www.mapquestapi.com/geocoding/v1/address",{key:this._key,location:a,limit:5,outFormat:"json"},function(a){var k=[],e,d;if(a.results&&a.results[0].locations)for(var h=a.results[0].locations.length-1;0<=h;h--)e=a.results[0].locations[h],d=b.latLng(e.latLng),k[h]={name:this._formatName(e.street,e.adminArea4,e.adminArea3,e.adminArea1),bbox:b.latLngBounds(d,d),center:d};c.call(f,k)},this)},reverse:function(a,c,f,g){b.Control.Geocoder.jsonp("//www.mapquestapi.com/geocoding/v1/reverse",
{key:this._key,location:a.lat+","+a.lng,outputFormat:"json"},function(a){var c=[],d,h;if(a.results&&a.results[0].locations)for(var l=a.results[0].locations.length-1;0<=l;l--)d=a.results[0].locations[l],h=b.latLng(d.latLng),c[l]={name:this._formatName(d.street,d.adminArea4,d.adminArea3,d.adminArea1),bbox:b.latLngBounds(h,h),center:h};f.call(g,c)},this)}});b.Control.Geocoder.mapQuest=function(a){return new b.Control.Geocoder.MapQuest(a)};b.Control.Geocoder.Mapbox=b.Class.extend({options:{service_url:"https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/"},
initialize:function(a){this._access_token=a},geocode:function(a,c,f){b.Control.Geocoder.getJSON(this.options.service_url+encodeURIComponent(a)+".json",{access_token:this._access_token},function(a){var k=[],e,d,h;if(a.features&&a.features.length)for(var l=0;l<=a.features.length-1;l++)e=a.features[l],d=b.latLng(e.center.reverse()),h=e.hasOwnProperty("bbox")?b.latLngBounds(b.latLng(e.bbox.slice(0,2).reverse()),b.latLng(e.bbox.slice(2,4).reverse())):b.latLngBounds(d,d),k[l]={name:e.place_name,bbox:h,
center:d};c.call(f,k)})},reverse:function(a,c,f,g){b.Control.Geocoder.getJSON(this.options.service_url+encodeURIComponent(a.lng)+","+encodeURIComponent(a.lat)+".json",{access_token:this._access_token},function(a){var c=[],d,h,l;if(a.features&&a.features.length)for(var m=0;m<=a.features.length-1;m++)d=a.features[m],h=b.latLng(d.center.reverse()),l=d.hasOwnProperty("bbox")?b.latLngBounds(b.latLng(d.bbox.slice(0,2).reverse()),b.latLng(d.bbox.slice(2,4).reverse())):b.latLngBounds(h,h),c[m]={name:d.place_name,
bbox:l,center:h};f.call(g,c)})}});b.Control.Geocoder.mapbox=function(a){return new b.Control.Geocoder.Mapbox(a)};b.Control.Geocoder.Google=b.Class.extend({options:{service_url:"https://maps.googleapis.com/maps/api/geocode/json"},initialize:function(a){this._key=a},geocode:function(a,c,f){a={address:a};this._key&&this._key.length&&(a.key=this._key);b.Control.Geocoder.getJSON(this.options.service_url,a,function(a){var k=[],e,d,h;if(a.results&&a.results.length)for(var l=0;l<=a.results.length-1;l++)e=
a.results[l],d=b.latLng(e.geometry.location),h=b.latLngBounds(b.latLng(e.geometry.viewport.northeast),b.latLng(e.geometry.viewport.southwest)),k[l]={name:e.formatted_address,bbox:h,center:d};c.call(f,k)})},reverse:function(a,c,f,g){a={latlng:encodeURIComponent(a.lat)+","+encodeURIComponent(a.lng)};this._key&&this._key.length&&(a.key=this._key);b.Control.Geocoder.getJSON(this.options.service_url,a,function(a){var c=[],d,h,l;if(a.results&&a.results.length)for(var m=0;m<=a.results.length-1;m++)d=a.results[m],
h=b.latLng(d.geometry.location),l=b.latLngBounds(b.latLng(d.geometry.viewport.northeast),b.latLng(d.geometry.viewport.southwest)),c[m]={name:d.formatted_address,bbox:l,center:h};f.call(g,c)})}});b.Control.Geocoder.google=function(a){return new b.Control.Geocoder.Google(a)};return b.Control.Geocoder});