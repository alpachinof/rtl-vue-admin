import{l as c,o as n,g as i,a as o}from"./index-7413310e.js";const d="fa",f={months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],shortMonths:["فرو","ارد","خرد","تیر","مرد","شهر","مهر","آبا","آذر","دی","بهمـ","اسفـ"],days:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],shortDays:["ی","د","س","چ","پ","ج","ش"],toolbar:{exportToSVG:"دانلود SVG",exportToPNG:"دانلود PNG",exportToCSV:"دانلود CSV",menu:"منو",selection:"انتخاب",selectionZoom:"بزرگنمایی انتخابی",zoomIn:"بزرگنمایی",zoomOut:"کوچکنمایی",pan:"پیمایش",reset:"بازنشانی بزرگنمایی"}},h={name:d,options:f},_={class:"bg-white shadow rounded-lg"},m={__name:"LinearChart",setup(l){const e=[{name:"Sales",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],t={chart:{type:"line",toolbar:{show:!1},locales:[h],defaultLocale:"fa"},forecastDataPoints:{count:7},stroke:{width:5,curve:"smooth"},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"],tickAmount:10,labels:{formatter:function(r,s,a){return a.dateFormatter(new Date(s),"dd MMM")}}},title:{text:"نمودار خطی",align:"center",style:{fontSize:"16px",color:"#666"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},yaxis:{min:-10,max:40}};return(r,s)=>{const a=c("apexchart");return n(),i("div",_,[o(a,{type:"line",options:t,series:e})])}}},b={class:"bg-white shadow rounded-lg"},u={__name:"ColumnChart",setup(l){const e={series1:"#2563eb",series2:"#d2b0ff",bg:"#e2e8f0"},t={chart:{offsetX:-10,stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},fill:{opacity:1},dataLabels:{enabled:!1},colors:[e.series1,e.series2],legend:{position:"top",horizontalAlign:"left",labels:{colors:"#dc2626"},markers:{offsetY:1,offsetX:3},itemMargin:{vertical:3,horizontal:10}},stroke:{show:!0,colors:["transparent"]},plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarRadius:10,backgroundBarColors:[e.bg,e.bg,e.bg,e.bg,e.bg]}}},grid:{borderColor:"#cbd5e1",xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:"#d1d5db"}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:"#2dd4bf"},categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12"],crosshairs:{stroke:{color:"#4f46e5"}},labels:{style:{colors:"#64748b"}}},title:{text:"نمودار ستونی",align:"center",style:{fontSize:"16px",color:"#666"}},responsive:[{breakpoint:600,options:{plotOptions:{bar:{columnWidth:"35%"}}}}]},r=[{name:"نمونه اول",data:[30,40,45,50,49,60,70,91]}];return(s,a)=>{const p=c("apexchart");return n(),i("div",b,[o(p,{type:"bar",options:t,series:r})])}}},g={class:"bg-white shadow rounded-lg"},x={__name:"PieChart",setup(l){const e=[44,55,13,43,22],t={chart:{type:"pie"},labels:["مک","ویندوز","لینوکس","اندروید","آیفون"],title:{text:"نمودار دایره ای",align:"center",style:{fontSize:"16px",color:"#666"}},legend:{position:"right",horizontalAlign:"left",markers:{offsetX:4,offsetY:3},labels:{colors:"#b45309"},itemMargin:{vertical:10,horizontal:10}}};return(r,s)=>{const a=c("apexchart");return n(),i("div",g,[o(a,{type:"pie",options:t,series:e})])}}},y={class:"bg-white shadow rounded-lg"},w={__name:"DonutChart",setup(l){const e={series1:"#fdd835",series2:"#00d4bd",series3:"#826bf8",series4:"#32baff",series5:"#ffa1a1"},t=[44,55,41,17],r={chart:{type:"donut"},stroke:{width:0},labels:["react","vue","angular","svelte"],colors:[e.series1,e.series5,e.series3,e.series2,e.series4],dataLabels:{enabled:!0,formatter:s=>`${parseInt(s,10)}%`},legend:{position:"bottom",markers:{offsetX:3},labels:{colors:"#b91c1c"},itemMargin:{vertical:5,horizontal:10}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.5rem"},value:{fontSize:"1.5rem",color:"#0f172a",formatter:s=>`${parseInt(s,10)}`},total:{show:!0,fontSize:"1.5rem",label:"frameworks",formatter:()=>"31%",color:"#64748b"}}}}},responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1rem"},value:{fontSize:"1rem"},total:{fontSize:"1rem"}}}}}}}],title:{text:"نمودار دونات",align:"center",style:{fontSize:"16px",color:"#666"}}};return(s,a)=>{const p=c("apexchart");return n(),i("div",y,[o(p,{type:"donut",options:r,series:t})])}}},k={class:"bg-white shadow rounded-lg"},z={__name:"PolarChart",setup(l){const e=[14,23,21,17,15,10,12,17,21],t=["Apple","Mango","Banana","Papaya","Orange"],r={chart:{type:"polarArea"},labels:["نمونه یک","نمونه دو","نمونه سه","نمونه چهار","نمونه پنج","نمونه شش","نمونه هفت","نمونه هشت","نمونه نه"],legend:{position:"right",horizontalAlign:"left",markers:{offsetX:4,offsetY:2},labels:{colors:"#b45309"},itemMargin:{vertical:2,horizontal:10}},stroke:{colors:["#fff"]},fill:{opacity:.8},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],title:{text:"نمودار قطبی",align:"center",style:{fontSize:"16px",color:"#666"}}};return(s,a)=>{const p=c("apexchart");return n(),i("div",k,[o(p,{type:"polarArea",options:r,series:e,labels:t})])}}},v={class:"bg-white shadow rounded-lg"},S={__name:"RadarChart",setup(l){const e=[{name:"نمونه اول",data:[80,50,30,40,100,20]},{name:"نمونه دوم",data:[20,30,40,80,20,80]},{name:"نمونه سوم",data:[44,76,78,13,43,10]}],t={chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1},toolbar:{show:!1}},legend:{position:"bottom",horizontalAlign:"left",markers:{offsetX:4,offsetY:3},labels:{colors:"#b45309"},itemMargin:{vertical:10,horizontal:10}},stroke:{width:2},fill:{opacity:.1},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},title:{text:"نمودار رادار",align:"center",style:{fontSize:"16px",color:"#666"}}};return(r,s)=>{const a=c("apexchart");return n(),i("div",v,[o(a,{type:"radar",height:"350",options:t,series:e})])}}},C={class:"bg-white shadow rounded-lg"},$={__name:"ScatterChart",setup(l){const e={series1:"#ff9f43",series2:"#7367f0",series3:"#28c76f"},t=[{name:"نمونه اول",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"نمونه دوم",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"نمونه سوم",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}],r={chart:{type:"scatter",parentHeightOffset:0,toolbar:{show:!1},zoom:{type:"xy",enabled:!0}},legend:{position:"top",horizontalAlign:"left",markers:{offsetX:4,offsetY:3},labels:{colors:"#b45309"},itemMargin:{vertical:10,horizontal:10}},colors:[e.series1,e.series2,e.series3],grid:{borderColor:"#cbd5e1",xaxis:{lines:{show:!0}}},yaxis:{labels:{style:{colors:"#cbd5e1"}}},xaxis:{tickAmount:10,axisBorder:{show:!1},axisTicks:{color:"#9333ea"},crosshairs:{stroke:{color:"#be123c"}},labels:{style:{colors:"#64748b"},formatter:s=>parseFloat(s).toFixed(1)}},title:{text:"نمودار پراکندگی",align:"center",style:{fontSize:"16px",color:"#666"}}};return(s,a)=>{const p=c("apexchart");return n(),i("div",C,[o(p,{type:"scatter",height:"350",options:r,series:t})])}}},O={class:"bg-white shadow rounded-lg"},J={__name:"MixedChart",setup(l){const e=[{name:"وبلاگ",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"شبکه های اجتماعی",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}],t={chart:{type:"line",toolbar:{show:!1},locales:[h],defaultLocale:"fa"},stroke:{width:[0,4]},title:{text:"Traffic Sources"},dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},yaxis:[{title:{text:"وبلاگ"}},{opposite:!0,title:{text:"شبکه های اجتماعی"}}],title:{text:"نمودار ترکیبی",align:"center",style:{fontSize:"16px",color:"#666"}}};return(r,s)=>{const a=c("apexchart");return n(),i("div",O,[o(a,{type:"line",height:"350",options:t,series:e})])}}},M={class:"mx-8 grid grid-cols-1 md:grid-cols-2 gap-4"},T={__name:"charts",setup(l){return(e,t)=>(n(),i("div",M,[o(m),o(u),o(x),o(w),o(z),o(S),o($),o(J)]))}};export{T as default};
