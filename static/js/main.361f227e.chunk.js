(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(8),o=n.n(i),c=n(2),r=n(3),s=n(5),l=n(4),p=(n(13),n(0));var m=function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{alt:e.name,src:e.image})}),Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:"Name:"})," ",e.name]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:"Occupation:"})," ",e.occupation]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:"Location:"})," ",e.location]})]})}),Object(p.jsx)("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove",children:"\ud835\ude05"})]})};n(15);var h=function(e){return Object(p.jsx)("div",{className:"wrapper",children:e.children})};n(16);var u=function(e){return Object(p.jsx)("h1",{className:"title",children:e.children})},g=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"form",children:[Object(p.jsx)("input",{value:this.props.search,name:"name",onChange:this.props.handleInputChange,type:"text",placeholder:"Employee Name"}),Object(p.jsxs)("select",{onChange:this.props.handleCategoryChange,children:[Object(p.jsx)("option",{id:"0",children:"name"}),Object(p.jsx)("option",{od:"1",children:"occupation"})]})]})}}]),n}(a.Component),d=n(6),b=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={employees:d,search:"",searchBy:"name",backup:d},e.removeEmployee=function(t){var n=e.state.employees.filter((function(e){return e.id!==t}));e.setState({employees:n})},e.compareName=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0},e.handleInputChange=function(t){var n=t.target.value,a=[e.state.searchBy];e.setState({name:n});var i=e.state.backup.filter((function(e){return e[a].toLowerCase().includes(n.toLowerCase())}));e.setState({employees:i,search:n})},e.sortByName=function(t){console.log(t),e.setState(t.sort(e.compareName))},e.handleCategoryChange=function(t){var n=t.target.value;e.setState({searchBy:n})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(h,{children:[Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["searching by ",this.state.searchBy," for ",this.state.search]}),Object(p.jsx)(g,{handleCategoryChange:this.handleCategoryChange,handleInputChange:this.handleInputChange,search:this.state.search})]}),"        ",Object(p.jsx)(u,{children:"Employee Directory"}),Object(p.jsx)("button",{onClick:function(){return e.sortByName(d)},children:"Sort by Name"}),this.state.employees.map((function(t){return Object(p.jsx)(m,{removeEmployee:e.removeEmployee,id:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location},t.id)}))]})}}]),n}(a.Component);n(17);o.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.361f227e.chunk.js.map