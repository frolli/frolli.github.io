import{d as b,f as w,u as g,x as S,h as c,G as V,c as x,k as y,_ as k,r as p,o as f,a as h,b as s,H as B,e as v,n as C,t as P,j as T}from"../index34169.js";import{u as U,r as j,e as q}from"./index34169.js";import{s as z,e as E}from"./helpers34169.js";import{s as I,h as _}from"./loader34169.js";import{_ as N}from"./logo34169.js";const R=b({name:"ForgotPwdView",setup(){w(()=>{});const e=g(),t=S(),d=c(1),a=V({email:""}),u={email:{required:j,email:q}},r=c(!1),n=U(u,a),i=x(()=>e.user),o=l=>{r.value=!0,l&&(I(),$().then(m=>{_(),z(t,{message:m.message}),y.push({name:"login"})}).catch(m=>{_(),E(t,m)}))};async function $(){const l={email:a.email};return await e.requestPasswordReset(l)}return{formStep:d,formSubmitted:r,v$:n,currentUser:i,handleSubmit:o}},components:{}}),F={class:"flex justify-content-center align-items-center h-screen"},L={class:"p-4",style:{"max-width":"430px"}},M=s("div",{class:"m-2 text-center sm:mt-4"},[s("img",{src:N,alt:"logo"})],-1),A=s("h1",{class:"mb-2"},"Password dimenticata?",-1),D=s("p",{class:"font-normal mb-4"}," Ti verrà inviata un'email con le istruzioni per reimpostare la password. ",-1),G={class:"flex flex-column gap-2 field mb-0"},H=s("label",{for:"email"},"Email",-1),J={key:0,class:"p-error w-100"},K={class:"mt-2 text-right w-full mb-3"};function O(e,t,d,a,u,r){const n=p("InputText"),i=p("Button");return f(),h("div",F,[s("div",L,[M,s("div",null,[A,D,s("form",{class:"mt-4 flex flex-column",onSubmit:t[1]||(t[1]=B(o=>e.handleSubmit(!e.v$.$invalid),["prevent"]))},[s("div",G,[H,v(n,{id:"email",class:C({"p-invalid":e.v$.email.$invalid&&e.formSubmitted,"w-full":!0,"mb-1":!0}),modelValue:e.v$.email.$model,"onUpdate:modelValue":t[0]||(t[0]=o=>e.v$.email.$model=o)},null,8,["class","modelValue"]),e.formSubmitted&&e.v$.email.$errors.length>0?(f(),h("label",J,P(e.v$.email.$errors.map(o=>o.$message).join("<br />")),1)):T("",!0)]),s("div",K,[v(i,{type:"submit",label:"Invia",class:"w-full mt-4 capitalize"})])],32)])])])}const ee=k(R,[["render",O]]);export{ee as default};
