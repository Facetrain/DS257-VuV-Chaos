// ==UserScript==
// @name         W257 Karte fuer nette Menschen
// @version      1.1
// @description  draw on map
// @author       Shinko to Kuma, suilenroc
// @match        https://de257.die-staemme.de/game.php?*village=*screen=map*
// @grant        none
// @downloadURL  https://github.com/Facetrain/DS257-VuV-Chaos/raw/refs/heads/main/karte.user.js
// @updateURL    https://github.com/Facetrain/DS257-VuV-Chaos/raw/refs/heads/main/karte.user.js
// ==/UserScript==
$.getScript("https://shinko-to-kuma.com/scripts/mapSdk.js").done(function() {

MapSdk.lines.push({x1: 399,y1: 390,x2: 600,y2: 390,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 390,x2: 600,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 410,x2: 399,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 410,x2: 399,y2: 390,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 390,x2: 399,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 380,x2: 600,y2: 380,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 380,x2: 600,y2: 390,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 475,x2: 399,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 415,y1: 469,x2: 415,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440,y1: 410,x2: 440,y2: 500,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 440,y1: 500,x2: 415,y2: 469,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 455,y1: 410,x2: 454,y2: 548,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469,y1: 411,x2: 469,y2: 549,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 485,y1: 410,x2: 485,y2: 549,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 500,y1: 410,x2: 500,y2: 549,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 515,y1: 411,x2: 515,y2: 550,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 530,y1: 410,x2: 530,y2: 549,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 545,y1: 410,x2: 545,y2: 551,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 585,y1: 470,x2: 585,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 475,x2: 600,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564,y1: 515,x2: 600,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 564,y1: 515,x2: 564,y2: 550,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 400,x2: 640,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 380,x2: 600,y2: 360,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 600,y1: 360,x2: 640,y2: 360,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 640,y1: 360,x2: 640,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 400,x2: 360,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 380,x2: 399,y2: 359,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 399,y1: 359,x2: 359,y2: 359,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 359,y1: 359,x2: 359,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 539,y1: 380,x2: 539,y2: 309,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 575,y1: 380,x2: 575,y2: 317,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 384,y1: 479,x2: 384,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 370,y1: 485,x2: 370,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 354,y1: 489,x2: 354,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 354,y1: 400,x2: 360,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434,y1: 515,x2: 399,y2: 475,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434,y1: 515,x2: 434,y2: 550,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 419,y1: 520,x2: 419,y2: 550,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404,y1: 525,x2: 404,y2: 549,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 390,y1: 530,x2: 354,y2: 489,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 404,y1: 525,x2: 370,y2: 485,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 419,y1: 520,x2: 384,y2: 479,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 389,y1: 549,x2: 390,y2: 530,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 339,y1: 490,x2: 339,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 324,y1: 490,x2: 324,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 309,y1: 495,x2: 309,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 374,y1: 535,x2: 339,y2: 490,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 374,y1: 535,x2: 374,y2: 549,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 359,y1: 537,x2: 324,y2: 490,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 359,y1: 537,x2: 359,y2: 549,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 309,y1: 494,x2: 344,y2: 542,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 344,y1: 542,x2: 344,y2: 550,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614,y1: 480,x2: 614,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 630,y1: 484,x2: 630,y2: 400,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 580,y1: 520,x2: 580,y2: 550,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 580,y1: 520,x2: 614,y2: 480,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 590,y1: 530,x2: 590,y2: 549,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 590,y1: 530,x2: 630,y2: 484,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614,y1: 534,x2: 645,y2: 486,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 614,y1: 534,x2: 614,y2: 550,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 489,x2: 631,y2: 534,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 631,y1: 534,x2: 631,y2: 548,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 673,y1: 490,x2: 648,y2: 534,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 648,y1: 534,x2: 648,y2: 549,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 645,y1: 486,x2: 645,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 659,y1: 489,x2: 659,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 673,y1: 490,x2: 673,y2: 400,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 565,y1: 494,x2: 565,y2: 410,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 565,y1: 494,x2: 585,y2: 470,styling:{main: {"strokeStyle": "#FFFF00","lineWidth": 2},mini: {"strokeStyle": "#FFFF00","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 434,y1: 380,x2: 434,y2: 317,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 469,y1: 380,x2: 469,y2: 307,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});
MapSdk.lines.push({x1: 504,y1: 380,x2: 504,y2: 306,styling:{main: {"strokeStyle": "#FF8000","lineWidth": 2},mini: {"strokeStyle": "#FF8000","lineWidth": 2}},drawOnMini: true,drawOnMap: true,});

MapSdk.texts.push({text:"FFA",x:500,y:387,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"FFA",x:500,y:398,font:"47px Arial",miniFont: "20px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Egal",x:666,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Egal",x:666,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Egal",x:652,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Egal",x:652,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"Egal",x:638,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"Egal",x:638,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

MapSdk.texts.push({text:"TribalWar",x:622,y:408,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});
MapSdk.texts.push({text:"TribalWar",x:622,y:471,font:"38px Arial",miniFont: "12px Arial",color: "yellow",drawOnMap: true,drawOnMini: true,});

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
