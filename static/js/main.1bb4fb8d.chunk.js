(this["webpackJsonpmoviedb-react"]=this["webpackJsonpmoviedb-react"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),i=(a(19),a(7)),o=a(8),h=a(10),l=a(9),d=(a(20),a(21),a(29)),j=a(34),u=a(1),b=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleInputChange=function(t){e.props.onSearch(t.target.value)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"search-section",children:Object(u.jsx)("div",{className:"search-bar-div",children:Object(u.jsx)(d.a,{className:"mb-3 search-bar",children:Object(u.jsx)(j.a,{placeholder:"Search","aria-label":"Search","aria-describedby":"search-bar",name:"SearchVal",onChange:this.handleInputChange})})})})}}]),a}(n.Component),m=a(30),p=a(31),O=a(32),v=a(33),f=a(35);function g(e){return Object(u.jsxs)("div",{children:["   ",Object(u.jsxs)(v.a,{className:"movie-card",children:[Object(u.jsx)(v.a.Img,{className:"card-banner",variant:"top",src:e.search.Poster}),Object(u.jsxs)(v.a.Body,{className:"card-body",children:[Object(u.jsx)(v.a.Title,{className:"card-title",children:e.search.Title}),Object(u.jsx)(v.a.Text,{}),Object(u.jsx)(f.a,{className:"card-button",variant:"danger",children:"Read More"})]})]})]})}var x=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!1,searchList:[],error:null},e.fetchMovies=function(){fetch("https://www.omdbapi.com/?apikey=aea3bc9d&s=".concat(e.props.searchTerm)).then((function(e){return e.json()})).then((function(t){e.setState({searchList:t.Search,isLoading:!1})}),(function(t){e.setState({error:t})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"componentDidUpdate",value:function(e){e.searchTerm!==this.props.searchTerm&&this.props.searchTerm.length>=3&&(this.setState({isLoading:!0,searchList:[],error:null}),this.fetchMovies())}},{key:"render",value:function(){var e=this.state.searchList;return this.props.searchTerm.length>=3?e?Object(u.jsx)(m.a,{children:Object(u.jsx)(p.a,{children:e.map((function(e,t){return Object(u.jsxs)(O.a,{md:3,children:[Object(u.jsx)(g,{search:e})," "]},t)}))})}):!0===this.state.isLoading?Object(u.jsx)("div",{children:"Loading..."}):Object(u.jsx)("div",{children:"No results found! Type something else."}):Object(u.jsx)("div",{})}}]),a}(n.Component),y=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={searchTerm:""},e.handleSearch=function(t){e.setState({searchTerm:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{onSearch:this.handleSearch}),Object(u.jsx)(x,{searchTerm:this.state.searchTerm})]})}}]),a}(n.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),T()}},[[28,1,2]]]);
//# sourceMappingURL=main.1bb4fb8d.chunk.js.map