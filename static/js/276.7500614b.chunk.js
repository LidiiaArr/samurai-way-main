"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[276],{2276:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t=r(5671),o=r(3144),i=r(136),u=r(5716),s=r(2791),l=r(885),a={selectedPage:"Paginator_selectedPage__CRNLp",pageNumber:"Paginator_pageNumber__7O7BU"},c=r(184),f=function(n){var e=n.totalUsersCount,r=n.currentPage,t=n.pageSize,o=n.onPageChanged,i=n.portionSize,u=(0,s.useState)(1),f=(0,l.Z)(u,2),g=f[0],p=f[1],d=Math.ceil(e/t);console.log(d);for(var h=[],v=1;v<=d;v++)h.push(v);var y=Math.ceil(d/i);console.log(y);var m=(g-1)*i+1,w=g*i;return(0,c.jsxs)("div",{className:a.paginator,children:[g>1&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("button",{onClick:function(){p(1)},children:[" ","<<"]}),(0,c.jsx)("button",{onClick:function(){p(g-1)},children:"prev"})]}),h.filter((function(n){return n>=m&&n<=w})).map((function(n){return(0,c.jsx)("span",{className:r===n?a.pageNumber+" "+a.selectedPage:a.pageNumber,onClick:function(){o(n)},children:n},n)})),g<y&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:function(){p(g+1)},children:"next"}),(0,c.jsx)("button",{onClick:function(){p(y)},children:"last"})]})]})},g="user_userPhoto__O53r0",p=r(2814),d=r(1523),h=function(n){var e,r=n.user;return(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(d.OL,{to:"/profile/"+r.id,children:(0,c.jsx)("img",{src:null!==r&&void 0!==r&&null!==(e=r.photos)&&void 0!==e&&e.small?r.photos.small:p,className:g,alt:"user photo"})})}),(0,c.jsx)("div",{children:r.followed?(0,c.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===r.id})),onClick:function(){n.unfollow(r.id)},children:"UnFollow"}):(0,c.jsx)("button",{disabled:n.followingInProgress.some((function(n){return n===r.id})),onClick:function(){n.follow(r.id)},children:"Follow"})})]}),(0,c.jsxs)("span",{children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("div",{children:r.name}),(0,c.jsx)("div",{children:r.status})]}),(0,c.jsxs)("span",{children:[(0,c.jsx)("div",{children:"user.location.city"}),(0,c.jsx)("div",{children:"user.location.country"})]})]})]})},v=function(n){return(0,c.jsxs)("div",{children:[(0,c.jsx)(f,{totalUsersCount:n.totalUsersCount,currentPage:n.currentPage,pageSize:n.pageSize,onPageChanged:n.onPageChanged,portionSize:10}),(0,c.jsx)("div",{children:n.users.map((function(e){return(0,c.jsx)(h,{user:e,follow:n.follow,followingInProgress:n.followingInProgress,unfollow:n.unfollow},e.id)}))})]})},y=r(364),m=r(2251),w=r(4374),P=r(7781),x="NOT_FOUND";var j=function(n,e){return n===e};function C(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?j:t,i=r.maxSize,u=void 0===i?1:i,s=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),a=1===u?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:x},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return x}return{get:t,put:function(e,o){t(e)===x&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,l);function c(){var e=a.get(arguments);if(e===x){if(e=n.apply(null,arguments),s){var r=a.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}a.put(arguments,e)}return e}return c.clearCache=function(){return a.clear()},c}function b(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function k(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(s=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var a=s,c=a.memoizeOptions,f=void 0===c?r:c,g=Array.isArray(f)?f:[f],p=b(t),d=n.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(g)),h=n((function(){for(var n=[],e=p.length,r=0;r<e;r++)n.push(p[r].apply(null,arguments));return i=d.apply(null,n)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:d,dependencies:p,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return o}var S=k(C),z=function(n){return n.usersPage},F=(S((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),function(n){return n.usersPage.pageSize}),U=function(n){return n.usersPage.totalUserCount},I=function(n){return n.usersPage.currentPage},_=function(n){return n.usersPage.isFetching},N=function(n){return n.usersPage.followingInProgress},Z=function(n){(0,i.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=e.call.apply(e,[this].concat(i))).onPageChanged=function(e){var r=n.props.pageSize;n.props.getUsers(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,c.jsxs)(c.Fragment,{children:[this.props.isFetching?(0,c.jsx)(w.Z,{}):null,(0,c.jsx)(v,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.usersPage.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),r}(s.Component),A=(0,P.qC)((0,y.$j)((function(n){return{usersPage:z(n),pageSize:F(n),totalUsersCount:U(n),currentPage:I(n),isFetching:_(n),followingInProgress:N(n)}}),{follow:m.ZN,unfollow:m.fv,setUsers:m.HM,setCurrentPage:m.D4,setTotalUsersCount:m.K1,toggleIsFetching:m.MO,toggleFollowingProgress:m.ZH,getUsers:m.D7}))(Z)},2814:function(n,e,r){n.exports=r.p+"static/media/single-user-icon-png-free--rLHSHx.c2b12d0011c453b98212.png"},885:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,i=[],u=!0,s=!1;try{for(r=r.call(n);!(u=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);u=!0);}catch(l){s=!0,o=l}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return i}}(n,e)||(0,t.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=276.7500614b.chunk.js.map