// ==UserScript==
// @name         W257
// @version      1.21
// @description  draw on map
// @author       Shinko to Kuma, suilenroc
// @match        https://de257.die-staemme.de/game.php?*village=*screen=map*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Facetrain/DS257-VuV-Chaos/main/karte.user.js
// @updateURL    https://raw.githubusercontent.com/Facetrain/DS257-VuV-Chaos/main/karte.user.js
// ==/UserScript==
$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {

MapSdk.lines.push({x1: 599.5,y1: 409.5,x2: 399.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 409.5,x2: 399.5,y2: 389.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 389.5,x2: 399.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 414.5,y1: 469.5,x2: 414.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 384.5,y1: 479.5,x2: 384.5,y2: 399.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 369.5,y1: 484.5,x2: 369.5,y2: 399.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 439.5,y1: 409.5,x2: 439.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 439.5,y1: 379.5,x2: 404.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 439.5,y1: 379.5,x2: 599.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404.5,y1: 379.5,x2: 404.5,y2: 354.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404.5,y1: 354.5,x2: 399.5,y2: 349.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 379.5,x2: 379.5,y2: 359.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 474.5,x2: 399.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 584.5,y1: 474.5,x2: 584.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564.5,y1: 489.5,x2: 584.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 599.5,y1: 399.5,x2: 619.5,y2: 399.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629.5,y1: 399.5,x2: 634.5,y2: 399.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629.5,y1: 399.5,x2: 614.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 649.5,y1: 399.5,x2: 639.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 644.5,y1: 484.5,x2: 644.5,y2: 444.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 554.5,y1: 409.5,x2: 554.5,y2: 479.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 554.5,y1: 479.5,x2: 544.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 599.5,y1: 379.5,x2: 599.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 589.5,y1: 379.5,x2: 589.5,y2: 364.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 589.5,y1: 364.5,x2: 599.5,y2: 364.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 599.5,y1: 364.5,x2: 599.5,y2: 264.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 609.5,y1: 399.5,x2: 609.5,y2: 264.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 619.5,y1: 399.5,x2: 619.5,y2: 269.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 634.5,y1: 399.5,x2: 634.5,y2: 279.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 649.5,y1: 399.5,x2: 649.5,y2: 289.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 489.5,y1: 379.5,x2: 489.5,y2: 239.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 349.5,x2: 399.5,y2: 249.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 379.5,y1: 359.5,x2: 379.5,y2: 264.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 414.5,y1: 469.5,x2: 434.5,y2: 519.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 474.5,x2: 419.5,y2: 534.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 384.5,y1: 479.5,x2: 404.5,y2: 529.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 369.5,y1: 484.5,x2: 389.5,y2: 529.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 449.5,y1: 519.5,x2: 449.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434.5,y1: 519.5,x2: 434.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 419.5,y1: 534.5,x2: 419.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404.5,y1: 529.5,x2: 404.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 389.5,y1: 529.5,x2: 389.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 429.5,y1: 459.5,x2: 429.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 449.5,y1: 519.5,x2: 429.5,y2: 459.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 474.5,y1: 504.5,x2: 474.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 489.5,y1: 409.5,x2: 489.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 399.5,x2: 349.5,y2: 399.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 334.5,y1: 399.5,x2: 334.5,y2: 494.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 349.5,y1: 399.5,x2: 349.5,y2: 489.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 319.5,y1: 399.5,x2: 319.5,y2: 494.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 349.5,y1: 489.5,x2: 369.5,y2: 529.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 334.5,y1: 494.5,x2: 354.5,y2: 529.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 319.5,y1: 494.5,x2: 339.5,y2: 529.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 369.5,y1: 529.5,x2: 369.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 354.5,y1: 529.5,x2: 354.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 339.5,y1: 529.5,x2: 339.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 579.5,y1: 379.5,x2: 579.5,y2: 259.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 559.5,y1: 379.5,x2: 559.5,y2: 249.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 539.5,y1: 379.5,x2: 539.5,y2: 244.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 499.5,y1: 409.5,x2: 499.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 514.5,y1: 409.5,x2: 514.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 544.5,y1: 484.5,x2: 544.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564.5,y1: 489.5,x2: 564.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 514.5,y1: 239.5,x2: 514.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 669.5,y1: 299.5,x2: 669.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469.5,y1: 469.5,x2: 469.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469.5,y1: 469.5,x2: 474.5,y2: 504.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 449.5,y1: 409.5,x2: 449.5,y2: 464.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 449.5,y1: 464.5,x2: 464.5,y2: 504.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 464.5,y1: 504.5,x2: 464.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 524.5,y1: 409.5,x2: 524.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 669.5,y1: 399.5,x2: 764.5,y2: 399.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 599.5,y1: 409.5,x2: 669.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659.5,y1: 484.5,x2: 659.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659.5,y1: 474.5,x2: 769.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 304.5,y1: 399.5,x2: 304.5,y2: 499.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 304.5,y1: 499.5,x2: 324.5,y2: 529.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 324.5,y1: 529.5,x2: 324.5,y2: 584.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 684.5,y1: 399.5,x2: 684.5,y2: 314.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434.5,y1: 379.5,x2: 434.5,y2: 244.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 599.5,y1: 444.5,x2: 644.5,y2: 444.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659.5,y1: 474.5,x2: 659.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659.5,y1: 449.5,x2: 644.5,y2: 449.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 644.5,y1: 449.5,x2: 644.5,y2: 444.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 559.5,y1: 334.5,x2: 549.5,y2: 334.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 549.5,y1: 334.5,x2: 549.5,y2: 244.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 569.5,y1: 409.5,x2: 569.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 554.5,y1: 409.5,x2: 554.5,y2: 379.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 284.5,y1: 354.5,x2: 284.5,y2: 454.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 534.5,y1: 589.5,x2: 534.5,y2: 479.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 534.5,y1: 479.5,x2: 539.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 539.5,y1: 474.5,x2: 539.5,y2: 409.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 674.5,y1: 474.5,x2: 674.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 674.5,y1: 509.5,x2: 679.5,y2: 509.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 679.5,y1: 509.5,x2: 679.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 674.5,y1: 509.5,x2: 674.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 689.5,y1: 474.5,x2: 689.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 719.5,y1: 474.5,x2: 719.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 719.5,y1: 499.5,x2: 689.5,y2: 499.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 744.5,y1: 474.5,x2: 744.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 579.5,y1: 589.5,x2: 579.5,y2: 494.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 579.5,y1: 494.5,x2: 599.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 609.5,y1: 499.5,x2: 609.5,y2: 594.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 594.5,y1: 499.5,x2: 614.5,y2: 474.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 624.5,y1: 494.5,x2: 624.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 639.5,y1: 494.5,x2: 639.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 649.5,y1: 494.5,x2: 649.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 639.5,y1: 494.5,x2: 644.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629.5,y1: 444.5,x2: 629.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 629.5,y1: 484.5,x2: 624.5,y2: 494.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 609.5,y1: 499.5,x2: 619.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 619.5,y1: 484.5,x2: 629.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 649.5,y1: 494.5,x2: 659.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 664.5,y1: 499.5,x2: 674.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 664.5,y1: 499.5,x2: 664.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 594.5,y1: 499.5,x2: 594.5,y2: 589.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

MapSdk.texts.push({text:"FFA",x:500,y:398,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:632,y:427,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:699,y:381,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:704,y:513,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Dobby",x:275,y:383,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"SCJA",x:291,y:383,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Rixebike",x:561,y:395,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"HLVTC",x:684,y:438,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Yasika",x:659,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"TGV",x:677,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:677,y:366,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Ohmykotito",x:677,y:368,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Haank",x:702,y:484,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:702,y:486,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Sunraku",x:702,y:488,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:702,y:490,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Conjack",x:702,y:492,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Stevil000",x:656,y:514,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"HLVCT",x:669,y:514,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"(Wotan)",x:669,y:516,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"HLVCT",x:682,y:514,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"(Bambus)",x:682,y:516,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"HLVCT",x:732,y:513,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"GHEDO",x:754,y:513,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Skullfull",x:642,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Skullfull",x:637,y:472,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Dark2Flow",x:652,y:472,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Raukada",x:606,y:472,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Knoblauchbrot",x:622,y:472,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Lernender",x:616,y:514,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"RixeBike",x:592,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DrDantos",x:569,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Drei",x:546,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"JayJay",x:519,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"UnderCover",x:532,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"bjrn202000",x:507,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"PP",x:495,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Exklusive",x:495,y:441,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Big Yahu",x:479,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Trump",x:458,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Mönch",x:423,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Megatron",x:440,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Onkel",x:406,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"xsmoke",x:392,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Technoheini",x:377,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DeffOnly",x:360,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Rudi",x:342,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Aragorn",x:327,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Alkaline",x:312,y:439,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});


MapSdk.texts.push({text:"FrankRost",x:375,y:379,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:375,y:381,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Dodge Challenger",x:375,y:383,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Crychotik",x:390,y:341,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Lizard",x:420,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:420,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Haethras",x:420,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Kaioshin",x:466,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:466,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Esrobald",x:466,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:466,y:356,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"KFC",x:466,y:358,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"PaveLow",x:502,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Einsamer Wolf",x:529,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:529,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Raphael",x:529,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"KingSimon1",x:569,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Drei",x:549,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Mevo",x:590,y:350,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:590,y:352,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Tranquillo777",x:590,y:354,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Rixe",x:605,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Ree0",x:614,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Raukada",x:627,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"&",x:627,y:366,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Koblauchbrot",x:627,y:368,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.mapOverlay.reload();});
