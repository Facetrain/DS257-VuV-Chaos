// ==UserScript==
// @name         W257 Karte fuer nette Menschen
// @version      1.4
// @description  draw on map
// @author       Shinko to Kuma, suilenroc
// @match        https://de257.die-staemme.de/game.php?*village=*screen=map*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Facetrain/DS257-VuV-Chaos/main/karte.user.js
// @updateURL    https://raw.githubusercontent.com/Facetrain/DS257-VuV-Chaos/main/karte.user.js
// ==/UserScript==
$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {

MapSdk.lines.push({x1: 399.5,y1: 390.5,x2: 600.5,y2: 390.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 390.5,x2: 600.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 410.5,x2: 399.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 410.5,x2: 399.5,y2: 390.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 390.5,x2: 399.5,y2: 380.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 380.5,x2: 600.5,y2: 380.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 380.5,x2: 600.5,y2: 390.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 475.5,x2: 399.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 415.5,y1: 469.5,x2: 415.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440.5,y1: 410.5,x2: 440.5,y2: 500.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440.5,y1: 500.5,x2: 415.5,y2: 469.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 455.5,y1: 410.5,x2: 454.5,y2: 548.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469.5,y1: 411.5,x2: 469.5,y2: 549.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 485.5,y1: 410.5,x2: 485.5,y2: 549.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 500.5,y1: 410.5,x2: 500.5,y2: 549.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 515.5,y1: 411.5,x2: 515.5,y2: 550.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 530.5,y1: 410.5,x2: 530.5,y2: 549.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 545.5,y1: 410.5,x2: 545.5,y2: 551.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 585.5,y1: 470.5,x2: 585.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 475.5,x2: 600.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564.5,y1: 515.5,x2: 600.5,y2: 475.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564.5,y1: 515.5,x2: 564.5,y2: 550.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 400.5,x2: 640.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 380.5,x2: 600.5,y2: 360.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600.5,y1: 360.5,x2: 640.5,y2: 360.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 640.5,y1: 360.5,x2: 640.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 400.5,x2: 360.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 380.5,x2: 399.5,y2: 359.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399.5,y1: 359.5,x2: 359.5,y2: 359.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 359.5,y1: 359.5,x2: 359.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 539.5,y1: 380.5,x2: 539.5,y2: 309.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 575.5,y1: 380.5,x2: 575.5,y2: 317.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 384.5,y1: 479.5,x2: 384.5,y2: 400.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 370.5,y1: 485.5,x2: 370.5,y2: 400.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 354.5,y1: 489.5,x2: 354.5,y2: 400.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 354.5,y1: 400.5,x2: 360.5,y2: 400.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434.5,y1: 515.5,x2: 399.5,y2: 475.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434.5,y1: 515.5,x2: 434.5,y2: 550.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 419.5,y1: 520.5,x2: 419.5,y2: 550.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404.5,y1: 525.5,x2: 404.5,y2: 549.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 390.5,y1: 530.5,x2: 354.5,y2: 489.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404.5,y1: 525.5,x2: 370.5,y2: 485.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 419.5,y1: 520.5,x2: 384.5,y2: 479.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 389.5,y1: 549.5,x2: 390.5,y2: 530.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 339.5,y1: 490.5,x2: 339.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 324.5,y1: 490.5,x2: 324.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 309.5,y1: 495.5,x2: 309.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 374.5,y1: 535.5,x2: 339.5,y2: 490.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 374.5,y1: 535.5,x2: 374.5,y2: 549.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 359.5,y1: 537.5,x2: 324.5,y2: 490.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 359.5,y1: 537.5,x2: 359.5,y2: 549.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 309.5,y1: 494.5,x2: 344.5,y2: 542.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 344.5,y1: 542.5,x2: 344.5,y2: 550.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614.5,y1: 480.5,x2: 614.5,y2: 400.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 630.5,y1: 484.5,x2: 630.5,y2: 400.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 580.5,y1: 520.5,x2: 580.5,y2: 550.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 580.5,y1: 520.5,x2: 614.5,y2: 480.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 590.5,y1: 530.5,x2: 590.5,y2: 549.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 590.5,y1: 530.5,x2: 630.5,y2: 484.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614.5,y1: 534.5,x2: 645.5,y2: 486.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614.5,y1: 534.5,x2: 614.5,y2: 550.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659.5,y1: 489.5,x2: 631.5,y2: 534.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 631.5,y1: 534.5,x2: 631.5,y2: 548.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 673.5,y1: 490.5,x2: 648.5,y2: 534.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 648.5,y1: 534.5,x2: 648.5,y2: 549.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 645.5,y1: 486.5,x2: 645.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659.5,y1: 489.5,x2: 659.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 673.5,y1: 490.5,x2: 673.5,y2: 400.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 565.5,y1: 494.5,x2: 565.5,y2: 410.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 565.5,y1: 494.5,x2: 585.5,y2: 470.5,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434.5,y1: 380.5,x2: 434.5,y2: 317.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469.5,y1: 380.5,x2: 469.5,y2: 307.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 504.5,y1: 380.5,x2: 504.5,y2: 306.5,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

MapSdk.texts.push({text:"FFA",x:500,y:387,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:500,y:398,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Egal",x:666,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Egal",x:666,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Egal",x:652,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Egal",x:652,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Egal",x:638,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Egal",x:638,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"TribalWars",x:622,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"TribalWars",x:622,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Raukada",x:607,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Raukada",x:607,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"RixeBike",x:592,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"RixeBike",x:592,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DrDantos",x:574,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"DrDantos",x:574,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Punisher",x:555,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Punisher",x:555,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"9",x:537,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"9",x:537,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"10",x:523,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"10",x:523,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"MrOcean",x:508,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"MrOcean",x:508,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Dahra",x:492,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Dahra",x:492,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"PaveLow",x:477,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"PaveLow",x:477,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"14",x:462,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"14",x:462,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"15",x:448,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"15",x:448,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"16",x:429,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"16",x:429,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Onkel",x:406,y:418,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Onkel",x:406,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"xsmoke",x:392,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"xsmoke",x:392,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Technoheini",x:377,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Technoheini",x:377,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Hellonym",x:362,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Hellonym",x:362,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DM",x:348,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"DM",x:348,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DM",x:332,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"DM",x:332,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DM",x:316,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"DM",x:316,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"24",x:383,y:388,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"25",x:415,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Kaioshin",x:451,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"FrankRost",x:487,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"B*tch-GaMer-Pro",x:522,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"KingSimon1",x:557,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"DS-Tyrann",x:587,y:364,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Reeo",x:613,y:388,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});



MapSdk.mapOverlay.reload();});
