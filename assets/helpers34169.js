import"./loader34169.js";function o(s,e){s.add({detail:e.message,life:3e3,severity:e.error?"error":"success",summary:e.error?"Errore":e.title})}const t=function(s,e){let r="";e.data&&e.data.errors?r=Object.values(e.data.errors).join(`
`):e.data.error?r=e.data.error:e.data.info&&(r=e.data.info),o(s,{message:r,error:!0})};export{t as e,o as s};
