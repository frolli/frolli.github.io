import{d as k,f as L,u as P,x,h as f,G as B,c as U,k as w,_ as j,r as h,o as d,a as m,b as o,H as T,e as p,n as _,t as v,j as $}from"../index34169.js";import{s as b,e as I}from"./helpers34169.js";import{u as N,r as g,m as S}from"./index34169.js";import{s as z,h as V}from"./loader34169.js";import{_ as M}from"./logo34169.js";const q=k({name:"ChangePwdView",setup(){L(()=>{});const s=P(),e=x(),c=f(1),t=B({password_confirmation:"",password:""}),u={password:{required:g,minLength:S(8)},password_confirmation:{required:g,minLength:S(8)}},i=f(!1),n=N(u,t),r=U(()=>s.user),a=l=>{i.value=!0,l&&(t.password!=t.password_confirmation&&(b(e,{message:"Le due password non coincidono",error:!0}),t.password_confirmation="",t.password=""),z(),y().then(async()=>{b(e,{message:"Password aggiornata correttamente",error:!1}),V(),r.value.first_login?w.push({path:"/dati-utente"}):w.push({path:"/login"})}).catch(C=>{V(),I(e,C)}))};async function y(){const l={id:r.value.id,user:{password_confirmation:t.password_confirmation,password:t.password}};await s.changePassword(l)}return{formStep:c,formSubmitted:i,v$:n,currentUser:r,handleSubmit:a}},components:{}}),A={class:"flex justify-content-center align-items-center h-screen"},D={class:"p-3",style:{"max-width":"430px"}},E=o("div",{class:"m-2 text-center sm:mt-4"},[o("img",{src:M,alt:"logo"})],-1),G=o("h1",{class:"text-center mb-2"},"Cambia la password",-1),H=o("p",{class:"font-normal mb-4"}," Inserisci una nuova password di minimo 8 caratteri ",-1),R={class:"flex flex-column gap-2 field mb-0"},F=o("label",{for:"password"},"Password*",-1),J={key:0,class:"p-error w-100"},K={class:"w-full flex flex-column flex-1 mt-3 mb-1"},O={class:"flex flex-column gap-2 field mb-0"},Q=o("label",{for:"password_confirmation"},"Conferma password*",-1),W={key:0,class:"p-error col-5 p-0 m-0 w-full"},X={class:"mt-2 text-right w-full mb-3"};function Y(s,e,c,t,u,i){const n=h("InputText"),r=h("Button");return d(),m("div",A,[o("div",D,[E,o("div",null,[G,H,o("form",{class:"mt-4 flex flex-column",onSubmit:e[2]||(e[2]=T(a=>s.handleSubmit(!s.v$.$invalid),["prevent"]))},[o("div",R,[F,p(n,{id:"password",class:_({"p-invalid":s.v$.password.$invalid&&s.formSubmitted,"w-full":!0}),type:"password",modelValue:s.v$.password.$model,"onUpdate:modelValue":e[0]||(e[0]=a=>s.v$.password.$model=a)},null,8,["class","modelValue"]),s.formSubmitted&&s.v$.password.$errors.length>0?(d(),m("label",J,v(s.v$.password.$errors.map(a=>a.$message).join("<br />")),1)):$("",!0)]),o("div",K,[o("div",O,[Q,p(n,{id:"password_confirmation",class:_({"p-invalid":s.v$.password_confirmation.$invalid&&s.formSubmitted,"w-full":!0}),type:"password",modelValue:s.v$.password_confirmation.$model,"onUpdate:modelValue":e[1]||(e[1]=a=>s.v$.password_confirmation.$model=a)},null,8,["class","modelValue"]),s.formSubmitted&&s.v$.password_confirmation.$errors.length>0?(d(),m("label",W,v(s.v$.password_confirmation.$errors.map(a=>a.$message).join("<br />")),1)):$("",!0)])]),o("div",X,[p(r,{type:"submit",label:"Conferma password",class:"w-full mt-4 capitalize"})])],32)])])])}const ts=j(q,[["render",Y]]);export{ts as default};
