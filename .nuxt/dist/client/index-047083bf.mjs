import{_ as f}from"./nav-bar-8aedbc5e.mjs";import{_ as p,d as h,a as v,r as u,E as x,G as k,b as w,c as C,e as n,f as i,t as M,w as s,x as d,l as N,m as c}from"./entry-f1ebb262.mjs";const b=h({__name:"index",setup(m,{expose:_}){_(),v({title:"hotel menu",viewport:"width=device-width, initial-scale=1, maximum-scale=1",charset:"utf-8",meta:[{name:"description",content:"My amazing site."}],link:[{rel:"icon",href:d}]});const l=u(null);function e(){l.value.classList.toggle("height")}function r(){a.value=o.params.filter}const o=x(),a=u(o.params.filter),t={nav:l,toggleMenu:e,watchTitle:r,route:o,title:a};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),y={class:"everything"},B=i("img",{src:d,alt:"",srcset:""},null,-1),S=c("Main Meals"),P=c("Bevarages"),T=c("snacks"),V=c("Salads");function E(m,_,l,e,r,o){const a=f,t=N,g=k("NuxtPage");return w(),C("div",y,[n(a),i("div",{class:"arrow-down",onClick:e.toggleMenu},[B,i("p",null,M(e.title)+"s",1)]),i("div",{class:"navigations",ref:"nav",onClick:e.watchTitle},[n(t,{to:"/menu/main-meal",onClick:e.toggleMenu},{default:s(()=>[S]),_:1}),n(t,{to:"/menu/beverage",onClick:e.toggleMenu},{default:s(()=>[P]),_:1}),n(t,{to:"/menu/snack",onClick:e.toggleMenu},{default:s(()=>[T]),_:1}),n(t,{to:"/menu/salad",onClick:e.toggleMenu},{default:s(()=>[V]),_:1})],512),n(g)])}var z=p(b,[["render",E]]);export{z as default};
