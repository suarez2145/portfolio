!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1);var o;o=0,document.querySelector(".desc_space").addEventListener("mouseenter",(function(){var e=document.getElementById("main-space");e.classList.add("animate__animated","animate__fadeOut"),e.offsetWidth})),document.querySelector(".desc_space").addEventListener("mouseleave",(function(){var e;o++;var t=document.getElementById("main-space");t.classList.remove("animate__animated","animate__fadeOut"),t.classList.add("animate__animated","animate__fadeIn"),console.log(o),1===o&&(console.log(t.classList),e='<h1 class="header-txt is-size-1 is-size-4-mobile desc">Father...</h1>',document.querySelector(".desc").remove(),document.querySelector(".desc_space").insertAdjacentHTML("beforeend",e)),o>1&&(console.log(t.classList),e='<h1 class="header-txt is-size-1 is-size-4-mobile desc">Seeker...</h1>',document.querySelector(".desc").remove(),document.querySelector(".desc_space").insertAdjacentHTML("beforeend",e),t.offsetWidth,console.log(t.classList)),3===o&&(o=0,console.log("time to change back!! "),document.querySelector(".desc").remove(),document.querySelector(".desc_space").insertAdjacentHTML("beforeend",'<h1 class="header-txt is-size-1 is-size-4-mobile desc">Web Developer...</h1>'))}));var c=function(){var e=document.getElementById("name1"),t=document.getElementById("email1"),n=document.getElementById("phone1"),o=document.getElementById("text1");e.value="",t.value="",n.value="",o.value=""};document.querySelector(".button").addEventListener("click",(function(){document.getElementById("main-modal").classList.add("is-active","is-clipped")})),document.querySelector(".modal-background").addEventListener("click",(function(){document.getElementById("main-modal").classList.remove("is-active"),c()})),document.querySelector(".modal-close").addEventListener("click",(function(){document.getElementById("main-modal").classList.remove("is-active"),c()}))},function(e,t,n){}]);