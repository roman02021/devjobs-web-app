import{_ as b,r,t as l,c as p,o as a,a as i,b as t,u as _,n as j,d as s,e as c,w as g,B as v,f as y,g as k,F as h,h as f,p as $,i as w,j as I,k as x}from"./index.49c6cc1c.js";const B=["src"],C={class:"header__info-container"},q={class:"header__left-info"},D={class:"header__title"},A=["href"],J=k("Company Site"),N={name:"JobHeader",props:{logo:String,logoBackground:String,company:String,website:String},setup(e){const n=e;r(l.isDark());const d=p(()=>new URL({}[`.${n.logo}`],self.location)),u=p(()=>({backgroundColor:n.logoBackground}));return(o,m)=>(a(),i("div",{class:y(["header",{"header--dark":_(l).isDark()}])},[t("div",{class:"header__logo-background",style:j(_(u))},[t("img",{class:"header__logo",src:_(d)},null,8,B)],4),t("div",C,[t("div",q,[t("h2",D,s(e.company),1),t("a",{class:"header__website",href:e.website},s(e.website),9,A)]),c(v,{variant:"secondary","external-link":e.website},{default:g(()=>[J]),_:1},8,["external-link"])])],2))}};var R=b(N,[["__scopeId","data-v-25e759e6"]]);const S=e=>($("data-v-a18ab460"),e=e(),w(),e),L={class:"job-description__info-container"},U={class:"job-description__info"},V={class:"job-description__info"},z={class:"job-description__header"},F={class:"job-description__top"},H={class:"job-description__title"},W={class:"job-description__location"},E=k("Apply Now"),T=S(()=>t("h3",null,"Requirements",-1)),Y={class:"list list--unordered"},G={class:"list__item"},K=S(()=>t("h3",null,"What You Will Do",-1)),M={class:"list list--ordered"},O={class:"list__item"},P={name:"JobDescription",props:{company:String,website:String,postedAt:String,position:String,apply:String,contract:String,location:String,description:String,requirementsContent:String,requirementsItems:Array,roleContent:String,roleItems:Array},setup(e){const n=e;return r(l.isDark()),p(()=>new URL({}[`.${n.logo}`],self.location)),p(()=>({backgroundColor:n.logoBackground})),(d,u)=>(a(),i("div",{class:y(["job-description",{"job-description--dark":_(l).isDark()}])},[t("div",L,[t("span",U,s(e.postedAt),1),t("span",V,s(e.contract),1)]),t("div",z,[t("div",F,[t("h1",H,s(e.position),1),t("div",W,s(e.location),1)]),c(v,{"external-link":e.apply},{default:g(()=>[E]),_:1},8,["external-link"])]),t("p",null,s(e.description),1),T,t("p",null,s(e.requirementsContent),1),t("ul",Y,[(a(!0),i(h,null,f(e.requirementsItems,o=>(a(),i("li",G,s(o),1))),256))]),K,t("p",null,s(e.roleContent),1),t("ol",M,[(a(!0),i(h,null,f(e.roleItems,o=>(a(),i("li",O,s(o),1))),256))])],2))}};var Q=b(P,[["__scopeId","data-v-a18ab460"]]);const X={class:"container h-100"},Z={class:"job-bar__inside-container"},ee={class:"job-bar__info"},te={class:"job-bar__title"},oe={class:"job-bar__company"},se=k("Apply Now"),ne={name:"JobBar",props:{company:String,position:String,apply:String},setup(e){return r(l.isDark()),(n,d)=>(a(),i("div",{class:y(["job-bar",{"job-bar--dark":_(l).isDark()}])},[t("div",X,[t("div",Z,[t("div",ee,[t("h3",te,s(e.position),1),t("div",oe,s(e.company),1)]),c(v,{class:"job-bar__apply","external-link":e.apply},{default:g(()=>[se]),_:1},8,["external-link"])])])],2))}};var ae=b(ne,[["__scopeId","data-v-f61a406e"]]);const ie={class:"container container--mb"},le={name:"Job",setup(e){const n=I(),d=r(x),u=r(n.params.id),o=r(d.value.find(m=>m.id===parseInt(u.value)));return(m,re)=>(a(),i(h,null,[t("div",ie,[c(R,{logo:o.value.logo,logoBackground:o.value.logoBackground,company:o.value.company,website:o.value.website},null,8,["logo","logoBackground","company","website"]),c(Q,{postedAt:o.value.postedAt,contract:o.value.contract,position:o.value.position,apply:o.value.apply,location:o.value.location,description:o.value.description,requirementsContent:o.value.requirements.content,requirementsItems:o.value.requirements.items,roleContent:o.value.role.content,roleItems:o.value.role.items},null,8,["postedAt","contract","position","apply","location","description","requirementsContent","requirementsItems","roleContent","roleItems"])]),c(ae,{position:o.value.position,company:o.value.company,apply:o.value.apply},null,8,["position","company","apply"])],64))}};export{le as default};
