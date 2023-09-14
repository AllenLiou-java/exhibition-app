import{E as S,a as V,z as $,r as f,H as C,b as F,d as c,f as s,I as B,J as D,q as e,g as E,i as I,F as T,K as q,c as d,G as w,t as _}from"./index-7e4dccfe.js";import{c as H,a as b,b as N}from"./index.esm-0b822089.js";const R=s("h2",{class:"border-bottom mb-4 fs-4 pb-3 fw-medium"},"修改密碼",-1),z={class:"row"},G={class:"col-md-9"},J={key:0,class:"d-flex gap-2 align-items-center"},K=s("label",{class:"form-label",for:"current_password"},"請先輸入目前密碼",-1),M={key:1},O={class:"d-flex flex-column"},U=s("label",{class:"form-label",for:"password"},"更改密碼",-1),j={class:"text-danger error-text"},A={class:"d-flex flex-column"},L=s("label",{class:"form-label",for:"confirmPassword"},"確認更改密碼",-1),Q={class:"text-danger error-text"},W=s("button",{class:"btn btn-dark ms-auto",type:"submit"}," 更改 ",-1),os={__name:"EditPassword",setup(X){const{errors:a,values:Y,setValues:Z,handleSubmit:h,defineInputBinds:i,setErrors:v}=S({initialValues:{password:"",confirmPassword:""},validationSchema:H({password:b().required("請勿空白"),confirmPassword:b().oneOf([N("password")],"請確認密碼是否相同")})}),g=V(),u=$(),n=f(""),l=f(!1),x=i("password"),P=i("confirmPassword"),k=async(t,o)=>{console.log("[change]",t,o);const r=await q({email:t,password:o,returnSecureToken:!0});r.data?(l.value=!0,localStorage.setItem("token",r.data.idToken)):l.value=!1},y=h(async t=>{(await C(localStorage.getItem("token"),t.password)).data?(u.logout(),alert("密碼更改成功, 請重新登入！"),g.push({name:"Home"})):v({server:["伺服器錯誤, 請聯絡開發人員！"]})});return(t,o)=>{const r=F("VeeForm");return d(),c(T,null,[R,s("div",z,[s("div",G,[l.value===!1?(d(),c("div",J,[s("div",null,[K,B(s("input",{"onUpdate:modelValue":o[0]||(o[0]=m=>n.value=m),placeholder:"請輸入目前密碼",class:"form-control",type:"password",id:"current_password"},null,512),[[D,n.value]])]),s("button",{onClick:o[1]||(o[1]=m=>{var p;return k((p=e(u).userData)==null?void 0:p.email,n.value)}),type:"button",class:"btn btn-dark mt-auto"}," 確認 ")])):(d(),c("div",M,[E(r,{class:"d-flex flex-column gap-3",onSubmit:e(y)},{default:I(()=>[s("div",O,[U,s("input",w({class:`form-control ${e(a).password&&"is-invalid"}`},e(x),{type:"password",name:"password",id:"password",placeholder:"請輸入更改密碼"}),null,16),s("small",j,_(e(a).password&&e(a).password),1)]),s("div",A,[L,s("input",w({class:`form-control ${e(a).confirmPassword&&"is-invalid"}`},e(P),{type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"請次確認更改密碼"}),null,16),s("small",Q,_(e(a).confirmPassword&&e(a).confirmPassword),1)]),W]),_:1},8,["onSubmit"])]))])])],64)}}};export{os as default};
