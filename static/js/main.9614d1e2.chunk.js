(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(77),l=t.n(r),c=(t(85),t(39)),i=t(40),u=t(75),s=t(41),d=t(76),h=t(79),m=function(){function e(e){return{id:e,drawnColor:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}}return{generatePixelConfigs:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=[],r=0;r<n;r++){for(var l=[],c=0;c<t;c++)l.push(Object(h.a)({},e(r+c,o),{col:r,row:c}));a.push(l)}return a}}}(),f=(t(87),t(78)),p=function(e){var n=e.primaryColor,t=e.handlePickColor;return a.a.createElement("div",{className:"control"},a.a.createElement("div",null,"Change Row"),a.a.createElement("div",null,"Change Column"),a.a.createElement(f.SketchPicker,{color:n,onChangeComplete:t}))},v=Object(o.lazy)(function(){return t.e(1).then(t.bind(null,251))}),g=function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).state={pixels:[],primaryColor:"#000",secondaryColor:"#fff"},t.handlePickColor=function(e,n){var o=e.rgb,a=o.r,r=o.g,l=o.b,c=o.a,i="rgba(".concat(a,", ").concat(r,", ").concat(l,", ").concat(c,")");t.setState({primaryColor:i})},t.componentDidMount=function(){t.setState({pixels:m.generatePixelConfigs()})},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Pixel Art Maker"),a.a.createElement(p,{primaryColor:this.state.primaryColor,handlePickColor:this.handlePickColor}),a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading")},a.a.createElement(v,this.state)))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,n,t){e.exports=t(246)},85:function(e,n,t){},87:function(e,n,t){}},[[80,3,2]]]);
//# sourceMappingURL=main.9614d1e2.chunk.js.map