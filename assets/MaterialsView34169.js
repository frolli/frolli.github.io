import{u as N,a as S}from"./material34169.js";import{d as v,_ as b,o as r,a as l,b as n,j as M,n as C,t as A,v as F,z as T,f as V,c as $,r as h,e as u,F as w,l as k,h as L}from"../index34169.js";import{s as E,h as B}from"./loader34169.js";const H=v({name:"MaterialCard",props:["material"],setup(){return{openFile:function(a){window.open(a.url,"_blank")}}}});const j={class:"flex h-full flex-column md:flex-row"},q={key:0,class:"col-12 h-14rem md:h-full md:col-4 p-0"},z=["src"],R={key:0,class:"font-normal text-500 mt-0"},D=["innerHTML"],P=["innerHTML"],x={key:1,class:"md:h-full flex align-items-center col-2 justify-content-end wrapper-circle cursor-pointer"},G=n("i",{class:"pi download-icon"},null,-1),I=[G];function J(e,a,i,c,p,f){return r(),l("div",{class:C(["bg-white surface-border border-round-xl slide material align-self-stretch relative",{"slide-no-image":!e.material.image}])},[n("div",j,[e.material.image?(r(),l("div",q,[n("img",{src:e.material.image,alt:"",class:"w-full h-14rem md:h-full border-round-xl md:border-noround-right carousel-img"},null,8,z)])):M("",!0),n("div",{class:C(["p-4 relative col-12",{"md:col-6":e.material.image,"md:col-10":!e.material.image}])},[e.material.category?(r(),l("p",R,A(e.material.category.name),1)):M("",!0),n("div",{class:"font-semibold text-black mb-0",innerHTML:e.material.title},null,8,D),n("div",{class:"font-normal desc mt-1",innerHTML:e.material.description},null,8,P)],2),e.material.file_url?(r(),l("div",x,[n("div",{class:"circle flex align-items-center justify-content-center md:mr-3",onClick:a[0]||(a[0]=o=>e.openFile(e.material.file_url))},I)])):M("",!0)])],2)}const K=b(H,[["render",J]]),O=v({name:"MaterialList",setup(){const e=F(),a=T();V(()=>{if(e.params.id){let t=document.querySelector('[data="'+e.params.id+'"]');t&&t.click()}else s(new Map),c.fetchMaterialCategories()});const i=N(),c=S(),p=$(()=>i.allMaterials),f=$(()=>c.allMaterialCategories),o=function(t,_){const d=new Map;t&&t.name?(a.replace({path:"/materiali/"+t.name}),d.set("category_id",t.id)):a.replace({path:"/materiali"}),i.fetchAllMaterials(d),m(_)},m=function(t){for(var _=document.getElementsByClassName("filters"),d=_[0].getElementsByClassName("p-button"),g=0;g<d.length;g++)d[g].classList.remove("category-active");var y=t.target;t.target.tagName=="SPAN"&&(y=t.target.parentElement),y.classList.add("category-active")},s=async function(t){E(),await i.fetchAllMaterials(t).then(()=>{B()}).catch(_=>{B()})};return{materials:p,categories:f,filterCategory:o}},components:{MaterialCard:K}});const Q={class:"flex flex-wrap gap-3 md:gap-5 mt-6 material"},U={class:"w-full filters flex no-wrap"},W={key:1};function X(e,a,i,c,p,f){const o=h("Button"),m=h("MaterialCard");return r(),l("div",Q,[n("div",U,[u(o,{label:"Tutti",rounded:"",outlined:"",class:"mr-3 bg-white",onClick:a[0]||(a[0]=s=>e.filterCategory(null,s))}),(r(!0),l(w,null,k(e.categories,s=>(r(),l("span",{key:s.id},[u(o,{label:s.name,rounded:"",outlined:"",class:"mr-3 bg-white",data:s.name,onClick:t=>e.filterCategory(s,t)},null,8,["label","data","onClick"])]))),128))]),e.materials&&e.materials.length>0?(r(!0),l(w,{key:0},k(e.materials,s=>(r(),l("div",{key:s.id,class:"flex element p-0"},[u(m,{material:s},null,8,["material"])]))),128)):(r(),l("i",W,"Nessun materiale presente per questa categoria "))])}const Y=b(O,[["render",X]]),Z=v({name:"MaterialsView",setup(){const e=L({icon:"pi pi-home",to:"/"}),a=L([{label:"Materiali"}]);return{home:e,items:a}},components:{MaterialsList:Y}}),ee=n("h2",{class:"mb-1"},"Materiali",-1);function te(e,a,i,c,p,f){const o=h("Breadcrumb"),m=h("MaterialsList");return r(),l("div",null,[u(o,{home:e.home,model:e.items,class:"m-0 p-0"},null,8,["home","model"]),ee,u(m)])}const le=b(Z,[["render",te]]);export{le as default};
