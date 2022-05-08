"use strict";(self.webpackChunkymmobilier=self.webpackChunkymmobilier||[]).push([[773],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(n),c=a,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6064:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},p="Les Routes API",s={unversionedId:"organisation/routes",id:"organisation/routes",title:"Les Routes API",description:"L'API est compos\xe9e de diff\xe9rentes routes.",source:"@site/docs/organisation/routes.md",sourceDirName:"organisation",slug:"/organisation/routes",permalink:"/Doc-Ymmobilier/docs/organisation/routes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/organisation/routes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"La Base de Donn\xe9es",permalink:"/Doc-Ymmobilier/docs/organisation/bdd"},next:{title:"L'architecture MVC",permalink:"/Doc-Ymmobilier/docs/organisation/mvc"}},d={},m=[],u={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"les-routes-api"},"Les Routes API"),(0,i.kt)("p",null,"L'API est compos\xe9e de diff\xe9rentes routes.\nUne route est le nom qui est utilis\xe9 pour acc\xe9der \xe0 un endpoint, utilis\xe9 dans l'URL. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Plusieurs endpoints peuvent \xeatre accessibles \xe0 partir d'une route. Le choix du endpoint d\xe9pend de la m\xe9thode utilis\xe9e."))),(0,i.kt)("p",null,"La technologie utilis\xe9e pour la mise en place de l'application mobile (React Native) utilisera les routes suivantes pour acc\xe9der aux diff\xe9rentes donn\xe9es :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"M\xe9thode"),(0,i.kt)("th",{parentName:"tr",align:"left"},"URI"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/register         ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Cr\xe9ation de compte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/login            ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Connexion \xe0 un compte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/user             ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Afficher les informations de son compte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PUT"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/user/edit        ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Editer les informations de son compte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/properties       ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Afficher toutes les propri\xe9t\xe9s, leur type et ses images")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/properties/{idProperty}  ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Afficher une propri\xe9t\xe9 avec sa localisation, son type, ses images et toutes ses caract\xe9ristiques")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"PUT"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/favorites/{idProperty}   ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ajouter une propri\xe9r\xe9 en favoris")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/favorites        ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Afficher toutes les propri\xe9t\xe9s favorites de l'utilisateur connect\xe9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/reservations/{idProperty}")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Envoyer une demande de visite pour une propri\xe9t\xe9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/user/reservations")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Affiche les informations de l'utilisateur et les demandes qu'il a envoy\xe9es")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"api/logout           ")),(0,i.kt)("td",{parentName:"tr",align:"left"},"D\xe9connexion du compte")))))}c.isMDXComponent=!0}}]);