import{r as f,e as B,u as Q,a as q,o as I,w as K,b as x,c as d,d as e,n as c,F as V,f as w,g as y,h as L,t as i,i as C,j as W,k as r,l as P}from"./index-58b38f74.js";const j={class:"d-flex position-relative"},H=["checked"],T=e("p",{for:"date-valid",class:"pb-1"}," 顯示已結束展覽 ",-1),U={class:"mb-3"},N=e("p",{class:"fw-bold mb-2"},"類型",-1),R={class:"type-list rounded-3 border mb-1"},z={class:"border-bottom p-2"},O=["checked"],G=e("span",{for:"type-all"},"全部",-1),J=["onClick"],X=["id","value","checked"],Y=["for"],Z={class:"d-flex px-1"},ee={class:"mb-2"},te=e("p",{class:"fw-bold mb-2"},"展覽期間",-1),ae=e("p",{class:"mb-2 fw-bold"},"價格",-1),le={class:"d-flex flex-column"},oe=e("p",{class:"mb-1 fs-7"},"最小票價",-1),se={key:1,class:"errorMessage"},ne={class:"d-flex flex-column"},re=e("p",{class:"mb-1 fs-7"},"最大票價",-1),ie={key:1,class:"errorMessage"},de={class:"fs-7 mb-2 fw-bold"},ce={class:"city-list border rounded-3"},ue={class:"p-2 border-bottom"},pe=["checked"],ve=e("span",{for:"all"},"全部",-1),ye=["onClick"],me=["id","value","checked"],be=["for"],_e={class:"container"},he=e("div",{class:"my-4 p-4 border rounded-3"},[e("input",{type:"search",name:"",id:""})],-1),ke={__name:"SearchExhibition",setup(fe){const $=o=>{o.preventDefault()},u=f(B()),m=Q(),S=q(),p=f(!1),A=()=>{p.value=!p.value},k=["臺北","新北","桃園","臺中","臺南","高雄","新竹","苗栗","彰化","南投","雲林","嘉義","屏東","宜蘭","花蓮","臺東","澎湖","金門","連江","基隆"],s=f({typeArr:[],cityArr:k,cityKeyWord:"",typeQuantity:5}),a=f({dateValid:!1,type:"all",startDate:0,endDate:new Date().getTime()+365*24*60*60*100,minPrice:1,maxPrice:1e5,city:"all"});I(async()=>{u.value.exhibitionList.length===0&&await u.value.getAllExhibitionData(),F(),console.log("[BeforeMount]",u.value.exhibitionList),console.log("[BeforeMount]",m.query),K(a.value,()=>{typeof a.value.startDate=="object"&&(a.value.startDate=new Date(a.value.startDate).getTime()),typeof a.value.endDate=="object"&&(a.value.endDate=new Date(a.value.endDate).getTime()),S.replace({name:"SearchExhibition",query:a.value})})});const F=()=>{if(s.value.typeArr=Array.from(new Set(u.value.exhibitionList.map(o=>o.type))),Object.keys(m.query).length>0){const{dateValid:o,type:l,startDate:b,endDate:_,minPrice:h,maxPrice:g,city:t}=m.query,n={dateValid:o==="true",type:l,startDate:parseInt(b),endDate:parseInt(_),minPrice:parseInt(h),maxPrice:parseInt(g),city:t};a.value={...a.value,...n}}},v=(o,l)=>{console.log("click",o,l),a.value[`${o}`]=l,console.log("[fetch Data]",123)},M=o=>{o.preventDefault(),s.value.cityKeyWord=o.target.value,o.target.value===""&&(s.value.cityArr=k),console.log(s.value.cityArr.filter(l=>l.includes(o.target.value))),s.value.cityArr=k.filter(l=>l.includes(o.target.value))},D=o=>{switch(o){case"add":s.value.typeQuantity+=5;break;case"reset":s.value.typeQuantity=5;break}};return(o,l)=>{const b=x("DatePicker"),_=x("VeeField"),h=x("ErrorMessage"),g=x("VeeForm");return r(),d("div",j,[e("div",{class:c(`side border-end ${p.value?"w-0":"border-none"}`)},[e("div",{class:c(`m-4 ${p.value&&"d-none"}`)},[e("div",{onClick:l[0]||(l[0]=t=>v("dateValid",!a.value.dateValid)),class:"d-flex gap-2 align-items-center border-bottom pb-4 mb-4 px-3"},[e("input",{id:"date-valid",type:"checkbox",name:"checkbox",checked:a.value.dateValid},null,8,H),T]),e("div",U,[N,e("ul",R,[e("li",z,[e("div",{onClick:l[1]||(l[1]=t=>v("type","all"))},[e("input",{class:"me-2",id:"type-all",type:"radio",name:"type",value:"all",checked:a.value.type==="all"},null,8,O),G])]),(r(!0),d(V,null,w(s.value.typeArr.slice(0,s.value.typeQuantity),(t,n)=>(r(),d("li",{class:"p-2 border-bottom",key:n},[e("div",{onClick:E=>v("type",t)},[e("input",{class:"me-2",id:t,type:"radio",name:"type",value:t,checked:a.value.type===t},null,8,X),e("span",{class:"",for:t},i(t),9,Y)],8,J)]))),128))]),e("div",Z,[e("button",{class:c(`border-0 bg-transparent fw-bold ${s.value.typeQuantity<6&&"d-none"}`),type:"button",onClick:l[2]||(l[2]=t=>D("reset"))}," 收回 ",2),e("button",{onClick:l[3]||(l[3]=t=>D("add")),class:c(`border-0 bg-transparent fw-bold ms-auto ${s.value.typeArr.length<5&&"d-none"}`),type:"button"}," 顯示更多 ",2)])]),e("div",ee,[te,y(b,{modelValue:a.value.startDate,"onUpdate:modelValue":l[4]||(l[4]=t=>a.value.startDate=t),class:"mb-2",type:"number",placeholder:"開始時間"},null,8,["modelValue"]),y(b,{placeholder:"結束時間",modelValue:a.value.endDate,"onUpdate:modelValue":l[5]||(l[5]=t=>a.value.endDate=t)},null,8,["modelValue"])]),ae,y(g,{onSubmit:$},{default:L(({errors:t})=>[e("div",le,[oe,y(_,{modelValue:a.value.minPrice,"onUpdate:modelValue":l[6]||(l[6]=n=>a.value.minPrice=n),class:c(`border rounded py-1 px-2 ${t.最小價格?"border-danger":"border"}`),placeholder:"最小價格",name:"最小價格",type:"number",oninput:"value=value.replace(/[^\\d]/g,'')",rules:{min_value:0,max_value:a.value.maxPrice,numeric:!0}},null,8,["modelValue","class","rules"]),t.最小價格?(r(),P(h,{key:0,as:"p",class:"text-danger errorMessage",name:"最小價格"})):(r(),d("p",se))]),e("div",ne,[re,y(_,{modelValue:a.value.maxPrice,"onUpdate:modelValue":l[7]||(l[7]=n=>a.value.maxPrice=n),class:c(`border rounded py-1 px-2 ${t.最大價格?"border-danger":"border"}`),placeholder:"最大價格",name:"最大價格",type:"number",oninput:"value=value.replace(/[^\\d]/g,'')",rules:{min_value:a.value.minPrice,max_value:1e5,numeric:!0}},null,8,["modelValue","class","rules"]),t.最大價格?(r(),P(h,{key:0,as:"p",class:"text-danger errorMessage",name:"最大價格"})):(r(),d("p",ie))])]),_:1}),e("div",null,[e("p",de,"城市 "+i(s.value.cityKeyWord),1),e("input",{onInput:M,class:"border w-100 rounded px-2 py-1 mb-2",type:"search",placeholder:"篩選城市名稱",name:"cityKeyWord",id:"cityKeyWord"},null,32),e("ul",ce,[e("li",ue,[e("div",{onClick:l[8]||(l[8]=t=>v("city","all"))},[e("input",{class:"me-2",id:"all",type:"radio",name:"city",value:"all",checked:a.value.city==="all"},null,8,pe),ve])]),(r(!0),d(V,null,w(s.value.cityArr,(t,n)=>(r(),d("li",{class:"p-2 border-bottom",key:n},[e("div",{onClick:E=>v("city",t)},[e("input",{class:"me-2",id:t,type:"radio",name:"city",value:t,checked:a.value.city===t},null,8,me),e("span",{class:"",for:t},i(t),9,be)],8,ye)]))),128))])])],2)],2),e("div",_e,[he,e("button",{class:"btn border",type:"button",onClick:A}," Filter "+i(p.value),1),C(" "+i(new Date(a.value.endDate))+" ",1),e("p",null,"篩選器 "+i(a.value),1),e("p",null,"展覽資料 "+i(u.value.exhibitionList.map(t=>t.location.country)),1),C(" "+i(W(m).query),1)])])}}};export{ke as default};