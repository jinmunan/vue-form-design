import{r as e,b as o,c as r,d as s,g as n}from"./index.b4d3cd99.js";const b={__name:"post",setup(p){const a=e({}),l=e({columns:[{label:"\u591A\u9009",type:"selection"},{label:"\u5E8F\u53F7",type:"index",width:70},{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{label:"\u72B6\u6001",prop:"status"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"updateTime"},{label:"\u64CD\u4F5C",prop:"__control"}],config:{expand:!0},controlBtn:[{label:"\u6DFB\u52A0",key:"add",type:"primary",size:"small",icon:"plus"},{label:"\u6279\u91CF\u5220\u9664",key:"del",type:"danger",size:"small",icon:"delete"}],operateBtn:[{label:"\u7F16\u8F91",key:"edit"},{label:"\u5220\u9664",key:"del"}]});return(c,i)=>{const t=o("ak-list");return r(),s("div",null,[n(t,{ref:"tableListEl",requestUrl:"",deleteUrl:"",searchData:a.value,tableData:l.value},null,8,["searchData","tableData"])])}}};export{b as default};
