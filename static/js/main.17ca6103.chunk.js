(this["webpackJsonpchronos-ais"]=this["webpackJsonpchronos-ais"]||[]).push([[0],{191:function(e,t,n){},209:function(e,t){},211:function(e,t){},221:function(e,t){},223:function(e,t){},248:function(e,t){},250:function(e,t){},251:function(e,t){},256:function(e,t){},258:function(e,t){},277:function(e,t){},289:function(e,t){},292:function(e,t){},297:function(e,t){},299:function(e,t){},322:function(e,t){},417:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(4),s=n.n(r),i=n(185),c=n.n(i),l=(n(191),n(10)),o=n.p+"static/media/akademis.ed1856e1.png",d=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2);n[0],n[1];return Object(a.jsx)("nav",{className:"bg-gray-200 dark:bg-gray-900 transition",children:Object(a.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(a.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(a.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:justify-start",children:[Object(a.jsx)("img",{src:o,className:"h-10 ml-2 mr-auto sm:ml-0 sm:mr-4"}),Object(a.jsx)("p",{className:"font-sans font-bold hidden sm:block light:text-black dark:text-white transition",children:"Assignment Tracker - Chronos 2020"})]}),Object(a.jsxs)("div",{className:"flex-1 flex items-center justify-end",children:[Object(a.jsx)("p",{className:"dark:text-white transition",children:"Dark Mode"}),Object(a.jsx)("div",{className:"w-8 py-1 ml-5 relative my-1 cursor-pointer",children:Object(a.jsx)("div",{className:"h-5 bg-gray-300 dark:bg-gray-600 rounded-full",onClick:function(){e.darkHandler[0](!e.darkHandler[1]),localStorage.setItem("darkMode",!e.darkHandler[1])},children:Object(a.jsx)("div",{className:"-ml-3 dark:ml-3 w-6 h-6 absolute transition-all transform ease-linear duration-100 flex items-center justify-center rounded-full bg-white dark:bg-blue-400 shadow-toggle border-gray-300 top-0 left-4 top-a-bit"})})})]})]})})})},u=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),s=(n[0],n[1],Object(r.useState)(e.filterNow)),i=Object(l.a)(s,2),c=i[0],o=i[1],d=function(t){e.onFilterHandler(t),o(t)};return Object(a.jsx)("nav",{className:"bg-gray-100 dark:bg-gray-800 transition",children:Object(a.jsx)("div",{className:"max-w-7xl mx-auto",children:Object(a.jsxs)("div",{className:"relative flex flex-col lg:flex-row-reverse items-center justify-between min-h-8 px-2",children:[Object(a.jsxs)("div",{className:"flex-1 flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-end py-3",children:[Object(a.jsx)("p",{className:"text-white md:hidden font-light mb-2",children:"Search"}),Object(a.jsx)("input",{type:"search",className:"bg-gray-300 dark:bg-gray-700 text-white shadow rounded p-2 transition",placeholder:"search tugas",onChange:function(t){return function(t){e.onSearchHandler(t.target.value)}(t)}})]}),Object(a.jsxs)("div",{className:"flex-1 flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-start pb-3 lg:py-3",children:[Object(a.jsx)("p",{className:"py-2 px-4 text-black dark:text-white transition text-sm my-auto font-extrabold",children:"Filter:"}),Object(a.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-purple-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(0==c?"bg-gray-300 dark:bg-gray-700":""," transition"),role:"menuitem",onClick:function(){return d(0)},children:"Semua Jurusan"}),Object(a.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-pink-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(1==c?"bg-gray-300 dark:bg-gray-700":""," transition"),role:"menuitem",onClick:function(){return d(1)},children:"Ilmu Komputer"}),Object(a.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(2==c?"bg-gray-300 dark:bg-gray-700":""," transition"),role:"menuitem",onClick:function(){return d(2)},children:"Sistem Informasi"}),Object(a.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(3==c?"bg-gray-300 dark:bg-gray-700":""," transition"),role:"menuitem",onClick:function(){return d(3)},children:"Saved"}),Object(a.jsx)("a",{className:"cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 ".concat(4==c?"bg-gray-300 dark:bg-gray-700":""," transition"),role:"menuitem",onClick:function(){return d(4)},children:"Finished"})]})]})})})},m=n(42),b=n.n(m),g=n(65),f=(n(193),function(e){var t=e.digitType,n=e.digitValue;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"flex justify-center items-center rounded-lg bg-gray-500 dark:bg-gray-800 h-14 w-14 mx-2 select-none transition",children:Object(a.jsx)("p",{className:"font-sans font-black text-xl text-white",children:n})}),Object(a.jsx)("p",{class:"dark:text-white text-center transition",children:t})]})}),j=function(e){var t=e.endTime,n=Object(r.useState)({}),s=Object(l.a)(n,2),i=s[0],c=s[1];return Object(r.useEffect)((function(){var e=setInterval((function(){!function(e){var t=+new Date(e)-+new Date(Date.now()),n={days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)};c(n)}(t)}),100);return function(){return clearInterval(e)}}),[i,t]),Object(a.jsxs)("div",{className:"countdown p-3 flex justify-center items-center rounded-t-none",children:[Object(a.jsx)(f,{digitType:"Hari",digitValue:i.days}),Object(a.jsx)(f,{digitType:"Jam",digitValue:i.hours}),Object(a.jsx)(f,{digitType:"Menit",digitValue:i.minutes}),Object(a.jsx)(f,{digitType:"Detik",digitValue:i.seconds})]})},x=["All Jurusan","Ilmu Komputer","Sistem Informasi"],h=function(e){switch(e){case"0":return"text-purple-500";case"1":return"text-pink-500";case"2":return"text-blue-500"}},p=function(e){var t=e.data,n=e.title,s=e.subtitle,i=e.description,c=e.endDate,o=e.jurusan,d=e.materi,u=e.link_scele,m=e.kelas,f=e.saveHandler,p=e.isSaved,y=(e.savedArray,Object(r.useState)(!1)),O=Object(l.a)(y,2),v=O[0],k=O[1];return Object(r.useEffect)(Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.next=3,p(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(a.jsxs)("div",{className:"flex flex-col row-span-2 rounded-lg bg-gray-200 dark:bg-gray-900 shadow-lg transition select-none",children:[Object(a.jsxs)("div",{className:"w-min-full rounded-lg rounded-b-none bg-gray-200 dark:bg-gray-900 p-5 select-none transition",id:"card-head",children:[Object(a.jsx)("p",{className:"".concat(h(o)," font-sans font-medium text-md transition"),id:"card-subsubtitle",children:x[o]}),Object(a.jsx)("p",{className:"dark:text-white font-sans font-bold text-xl transition",id:"card-title",children:n}),Object(a.jsxs)("p",{className:"dark:text-white font-sans font-medium text-md transition",id:"card-subtitle",children:[s," - ",m]}),Object(a.jsx)("p",{className:"dark:text-white font-sans font-medium text-sm transition",id:"card-subtitle",children:d})]}),Object(a.jsx)("div",{className:"p-5 pb-5 bg-gray-200 dark:bg-gray-900 rounded-md rounded-t-none rounded-b-none flex-grow transition select-none",children:Object(a.jsx)("p",{className:"dark:text-white font-sans font-light text-sm text-justify transition",children:i})}),Object(a.jsx)(j,{endTime:c}),u?Object(a.jsx)("a",{href:u,target:"__blank",children:Object(a.jsx)("div",{className:"px-5 select-none py-3 bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md rounded-t-none text-center flex justify-center transition",children:Object(a.jsx)("p",{className:"text-blue-600 dark:text-blue-400 transition font-sans font-medium text-sm text-justify",children:"Link Tugas"})})}):"",Object(a.jsx)("div",{className:"px-5 py-3 select-none cursor-pointer bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md rounded-t-none text-center flex justify-center transition",onClick:function(){return f(t)},children:v?Object(a.jsx)("p",{className:"text-blue-600 dark:text-blue-400 transition font-sans font-medium text-sm text-justify",children:"Remove From Saved"}):Object(a.jsx)("p",{className:"text-blue-600 dark:text-blue-400 transition font-sans font-medium text-sm text-justify",children:"Save"})})]})},y=function(e){var t=e.filterMode,s=e.search,i=Object(r.useState)([]),c=Object(l.a)(i,2),o=c[0],d=c[1],u=Object(r.useState)(0),m=Object(l.a)(u,2),f=m[0],j=(m[1],Object(r.useState)(localStorage.getItem("saveData")&&JSON.parse(localStorage.getItem("saveData"))||[])),x=Object(l.a)(j,2),h=x[0],y=x[1],O=Object(r.useState)(!1),v=Object(l.a)(O,2),k=v[0],N=v[1],w=function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h;case 2:return n=e.sent,e.abrupt("return",n.some((function(e){return t.no==e.no})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){n(413)({sheetId:"1uSu85WmJdeJZviBWatZ3HpSWpH4tULet7QTJH5hnvUU",sheetNumber:4,returnAllResults:!1},(function(e){d(e),localStorage.setItem("results",JSON.stringify(e))})).catch((function(e){var t=localStorage.getItem("results");d(JSON.parse(t))}))},D=function(e){var t=h;t.some((function(t){return t.no==e.no}))?(N(!0),t.splice(t.indexOf(e),1),y(t),localStorage.setItem("saveData",JSON.stringify(t)),setTimeout((function(){N(!1)}),50)):(N(!0),t.push(e),y(t),localStorage.setItem("saveData",JSON.stringify(t)),setTimeout((function(){N(!1)}),50))};return Object(r.useEffect)((function(){S();var e=setInterval((function(){S()}),15e3);return function(){return clearInterval(e)}}),[]),Object(a.jsx)("div",{children:k?"":Object(a.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-6 p-5",children:function(e,t){switch(e){case 0:return t.sort((function(e,t){return Date.parse(e.tanggal_selesai)>Date.parse(t.tanggal_selesai)?1:Date.parse(e.tanggal_selesai)<Date.parse(t.tanggal_selesai)?-1:0}));case 1:return t.sort((function(e,t){return e["nama pr"]>t["nama pr"]?1:e["nama pr"]<t["nama pr"]?-1:0}));default:return t.sort((function(e,t){return Date.parse(e.tanggal_selesai)>Date.parse(t.tanggal_selesai)?1:Date.parse(e.tanggal_selesai)<Date.parse(t.tanggal_selesai)?-1:0}))}}(f,function(e,t){return 3==e?JSON.parse(localStorage.getItem("saveData")):4==e?o.filter((function(e){return Date.parse(e.tanggal_selesai)<Date.now()})):o.filter((function(n){var a=new RegExp(t,"i");if(Date.now()<Date.parse(n.tanggal_selesai))return 0==e?n["nama pr"].match(a):n.jurusan==e&&n["nama pr"].match(a)||0==n.jurusan}))}(t,s)).map((function(e){return Object(a.jsx)(p,{data:e,title:e["nama pr"],jurusan:e.jurusan,subtitle:e["nama matkul"],description:e.deskripsi,endDate:Date.parse(e.tanggal_selesai),materi:e.materi,link_scele:e.link_scele,kelas:e.kelas,saveHandler:D,isSaved:w,savedArray:h})}))})})};var O=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),c=Object(l.a)(i,2),o=c[0],m=c[1],b=Object(r.useState)(!0),g=Object(l.a)(b,2),f=g[0],j=g[1];return Object(r.useEffect)((function(){localStorage.getItem("darkMode")&&"true"!=localStorage.getItem("darkMode")?j(!1):j(!0)}),[f]),Object(r.useEffect)((function(){localStorage.getItem("saveData")||localStorage.setItem("saveData","[]")})),Object(a.jsxs)("div",{className:"".concat(f?"dark":""),children:[Object(a.jsxs)("div",{className:"App light:bg-white dark:bg-gray-700 min-h-screen transition",children:[Object(a.jsx)(d,{darkHandler:[j,f]}),Object(a.jsx)(u,{onFilterHandler:s,onSearchHandler:m,filterNow:n}),Object(a.jsx)("div",{className:"container items-center justify-center py-2",children:Object(a.jsx)(y,{filterMode:n,search:o})})]}),Object(a.jsx)("footer",{class:"footer relative pt-1 mb-0 text-center transition dark:bg-gray-700",children:Object(a.jsxs)("p",{class:"text-xs text-black dark:text-white font-medium pb-2",children:["developed by Adrian Ardizza / ",Object(a.jsx)("a",{href:"https://github.com/chronos2020/ais",target:"__blank",class:"text-blue-500",children:"source code"})]})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,418)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),v()}},[[417,1,2]]]);
//# sourceMappingURL=main.17ca6103.chunk.js.map