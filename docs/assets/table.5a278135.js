import{e as ke,z as ve,s as Ee,r as Be,l as Ce,A as ye,j as Ve,q as P,N as xe,a as c,x as we,n as A,o as i,c as p,i as d,m as N,F as m,b as o,w as n,f as F,g as h,p as y,d as b,t as V,_ as Ie,Y as U,L as Te,Z as Le,$ as Oe,v as H,P as Q,Q as K,R as Ae,y as x,O as J,E as w,k as Y,a0 as Ue,a1 as Re,S as $e,U as qe}from"./index.f2a8992f.js";import{_ as Ge,a as ze}from"./vueFile.vue_vue_type_script_setup_true_lang.337f403d.js";const je={class:"design-container design-table"},Me={class:"components-list"},Se=d("div",{class:"title"},"\u53EF\u9009\u5B57\u6BB5",-1),Pe={class:"content"},Ne=d("div",{class:"title"},"\u5176\u4ED6\u5B57\u6BB5",-1),He={class:"content"},Qe=d("div",{class:"title"},"\u64CD\u4F5C\u6309\u94AE",-1),Ke={class:"content"},Je={class:"title"},Ye=b("\u7F16\u8F91\u81EA\u5B9A\u4E49\u5B57\u6BB5 "),Ze={class:"main-body"},We={class:"main-form main-table"},Xe=d("p",{style:{padding:"10px 0"}},"\u63D0\u793A\uFF1A\u70B9\u51FB\u8868\u5934\u53EF\u62D6\u52A8\u6539\u53D8\u987A\u5E8F",-1),et={class:"control-btn"},tt=["innerHTML"],at=d("i",{class:"icon-help"},null,-1),lt={key:1},ot=["onClick"],nt={class:"sidebar-tools"},ut=["onClick"],st=b("\u65B0\u589ETag\u6807\u7B7E\u663E\u793A"),it=b("\u7F16\u8F91\u4FA7\u680F\u6811\u5C5E\u6027 "),dt=b("\u7F16\u8F91\u8868\u683C\u5C5E\u6027 "),rt=b("\u8BBE\u7F6E\u6570\u636E\u5B57\u5178 "),ct=b("beforeRequest "),pt=b("afterResponse "),bt=["innerHTML"],ft={key:0,id:"editJson"},_t={class:"dialog-footer"},mt=b(" \u786E\u5B9A "),Ft=ke({__name:"table",setup(ht){const Z=ve(),R=Ee(),{proxy:W}=Re(),$=Be(),v=Ce(()=>R.query.type==="table"),e=ye({direction:"rtl",filedList:[],otherFiled:[{label:"\u52FE\u9009",prop:"__selection",type:"selection"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"70px"},{label:"\u64CD\u4F5C",prop:"__control"}],checkboxGroup:[],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary",size:"small",hide:v.value},{label:"\u5220\u9664",key:"del",size:"small"}],controlBtnGroup:[],tableData:{tableProps:{},columns:[],controlBtn:[]},editor:{},visibleDialog:!1,loading:!1,id:R.query.id,selectCheck:"",editIndex:"",dataList:[{}],dataTemp:{},attrObj:{},tagList:[],config:{},name:"",formId:"",dict:{},searchData:{},dialogTitle:"",treeData:{}}),X=["txt","title","table","component","upload"],I=l=>{l==null||l.list.forEach(t=>{var u;t.type==="grid"||t.type==="tabs"?t.columns.forEach(s=>{I(s)}):t.type==="card"?I(t):X.indexOf(t.type)===-1&&e.filedList.push({prop:t.name,label:(u=t.item)==null?void 0:u.label,help:t.config.help||""})})},ee=l=>{switch(l){case"del":e.tableData.columns=[],e.checkboxGroup=[];break;case"json":D(e.tableData);break;case"vue":$.value.openTable(e.tableData);break;case"save":ae();break}},q=l=>{e.checkboxGroup.indexOf(l.label)===-1?e.tableData.columns.forEach((u,s)=>{u.label===l.label&&u.prop===l.prop&&e.tableData.columns.splice(s,1)}):e.tableData.columns.push(l)},D=(l,t={})=>{e.direction=t.direction||"rtl",e.visibleDialog=!0,e.dialogTitle=t.title;let u=Q(l,!0);switch(t.type){case"dict":u=K(l,!0);break;case"beforeRequest":l||(u=qe);break;case"afterResponse":l||(u=$e);break}P(()=>{e.editor=Ae(u)})},te=()=>{try{const l=x(e.editor.getValue());switch(e.editIndex){case"columns":e.tableData.columns=l;break;case"tableConfig":e.tableData.tableProps=l;break;case"dict":e.dict=J(e.editor.getValue());break;case"beforeRequest":case"afterResponse":e.tableData.events||(e.tableData.events={}),e.tableData.events[e.editIndex]=l;break;case"tree":e.tableData.tree=l;break}e.editIndex!==""?e.tableData.columns[e.editIndex]=l:e.tableData=l,e.editIndex="",e.visibleDialog=!1}catch(l){w.error(l.message)}},ae=()=>{const l=e.name||e.dataTemp.name;if(!l){w.error(v.value?"\u8BF7\u8F93\u5165\u6570\u636E\u5217\u8868\u540D\u79F0":"\u8BF7\u8F93\u5165\u8868\u5355\u540D\u79F0");return}e.loading=!0;const t=Object.assign(e.dataTemp,{tableData:Q(e.tableData),id:e.id,name:l,formId:e.formId||e.dataTemp.formId,type:e.dataTemp.type||2,dict:K(e.dict)});Y("saveForm",t).then(u=>{console.log(u),w({message:u.data.message||"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}),Z.push({path:"/designform/formlist"}),e.loading=!1}).catch(u=>{w.error(u.data.message||"\u4FDD\u5B58\u5F02\u5E38"),e.loading=!1})},le=l=>{e.editIndex="",l()},k=l=>{switch(e.editIndex=l,l){case"dict":D(e.dict||{},{direction:"ltr",type:l});break;case"tableConfig":D(e.tableData.tableProps,{direction:"ltr"});break;case"columns":D(e.tableData.columns);break;case"beforeRequest":case"afterResponse":const t=e.tableData.events||{};D(t[l],{direction:"ltr",type:l});break;case"tree":let u=e.tableData.tree||{};Object.keys(u).length===1&&(u={show:!0,name:"\u552F\u4E00\u6807\u8BC6",request:"post",sourceFun:"\u8BF7\u6C42url"}),D(u,{direction:"ltr",title:"\u66F4\u591A\u53C2\u6570\u8BE6\u89C1ak-list\u7EC4\u4EF6"});break}},oe=l=>{let t={};e.tableData.columns.forEach((u,s)=>{u.prop===l&&(t=u,e.editIndex=s)}),D(t)},ne=l=>{var s;let t=(s=e.tableData)==null?void 0:s.controlBtn,u=-1;t?t.forEach((r,E)=>{(r.key===l.key||r.label===l.label)&&(u=E)}):e.tableData.controlBtn=[],u!==-1?e.tableData.controlBtn.splice(u,1):(delete l.hide,e.tableData.controlBtn.push(l))},ue=()=>{const l=W.$el.querySelector(".el-table__header-wrapper tr");Ue.create(l,{animation:180,delay:0,onEnd:t=>{const u=e.tableData.columns[t.oldIndex];e.tableData.columns.splice(t.oldIndex,1),e.tableData.columns.splice(t.newIndex,0,u)}})},se=()=>{e.id&&Y("getFormById",{id:e.id}).then(l=>{var t,u;if(l.data.code===200){const s=l.data.data;e.dataTemp=s,I(x(s.formData)),s.tableData&&(e.tableData=x(s.tableData)),s.searchData&&(e.searchData=x(s.searchData)),v.value&&(e.name=s.name,e.formId=s.formId),e.tableData.columns.forEach(r=>{e.checkboxGroup.push(r.label)}),(t=e.tableData.controlBtn)==null||t.forEach(r=>{e.controlBtnGroup.push(r.key||r.label)}),e.treeData=((u=e.tableData)==null?void 0:u.tree)||{},e.dict=J(s.dict)}})},ie=l=>{e.attrObj=l,e.config=l.config||{};const t=e.config.tagList;if(e.tagList=[],t)for(const u in t)e.tagList.push({value:u,type:t[u]})},de=l=>{e.tagList.splice(l,1),T()},re=()=>{e.tagList.push({value:"",type:"default"})},T=()=>{const l={};e.tagList.forEach(t=>{l[t.value]=t.type}),Object.keys(l).length?e.config.tagList=l:delete e.config.tagList,L()},L=()=>{Object.assign(e.attrObj,{config:e.config})},ce=l=>{e.tableData.tree||(e.tableData.tree={}),e.tableData.tree.show=l};return Ve(()=>{P(()=>{se(),ue()})}),xe(()=>{Object.keys(e.editor).length!==0&&(e.editor.destroy(),e.editor.container.remove())}),(l,t)=>{var z,j,M,S;const u=c("el-checkbox"),s=c("el-checkbox-group"),r=c("el-button"),E=c("el-tooltip"),pe=c("el-table-column"),be=c("el-table"),_=c("el-option"),O=c("el-select"),f=c("el-form-item"),B=c("el-input"),G=c("el-tab-pane"),fe=c("el-switch"),_e=c("QuestionFilled"),me=c("el-icon"),he=c("el-tabs"),ge=c("el-form"),De=c("el-drawer"),Fe=we("loading");return A((i(),p("div",je,[d("div",Me,[((z=e.filedList)==null?void 0:z.length)&&e.id&&!N(v)?(i(),p(m,{key:0},[Se,d("div",Pe,[o(s,{modelValue:e.checkboxGroup,"onUpdate:modelValue":t[0]||(t[0]=a=>e.checkboxGroup=a),size:"small"},{default:n(()=>[(i(!0),p(m,null,F(e.filedList,a=>(i(),h(u,{label:a.label,key:a.prop,onChange:g=>q(a)},null,8,["label","onChange"]))),128))]),_:1},8,["modelValue"])])],64)):y("",!0),Ne,d("div",He,[o(s,{modelValue:e.checkboxGroup,"onUpdate:modelValue":t[1]||(t[1]=a=>e.checkboxGroup=a),size:"small"},{default:n(()=>[(i(!0),p(m,null,F(e.otherFiled,a=>(i(),h(u,{label:a.label,key:a.prop,onChange:g=>q(a)},null,8,["label","onChange"]))),128))]),_:1},8,["modelValue"])]),Qe,d("div",Ke,[o(s,{modelValue:e.controlBtnGroup,"onUpdate:modelValue":t[2]||(t[2]=a=>e.controlBtnGroup=a),size:"small"},{default:n(()=>[(i(!0),p(m,null,F(e.controlBtn.filter(a=>!a.hide),a=>(i(),h(u,{label:a.key,key:a.prop,onChange:g=>ne(a)},{default:n(()=>[b(V(a.label),1)]),_:2},1032,["label","onChange"]))),128))]),_:1},8,["modelValue"])]),d("div",Je,[o(r,{size:"small",onClick:t[3]||(t[3]=a=>k("columns"))},{default:n(()=>[Ye]),_:1})])]),d("div",Ze,[o(Ge,{onClick:ee,type:"2"}),d("div",We,[Xe,(M=(j=e.searchData)==null?void 0:j.list)!=null&&M.length?(i(),h(Ie,{key:0,type:2,"form-data":e.searchData,dict:e.dict,requestUrl:!1},null,8,["form-data","dict"])):y("",!0),d("div",et,[(i(!0),p(m,null,F((S=e.tableData)==null?void 0:S.controlBtn,a=>(i(),h(r,U(a,{key:a.label}),{default:n(()=>[b(V(a.label),1)]),_:2},1040))),128))]),o(be,U({data:e.dataList},e.tableData.tableProps,{ref:"tableEl"}),{default:n(()=>[(i(!0),p(m,null,F(e.tableData.columns,a=>(i(),h(pe,Oe(U({key:a.prop||a.label},a)),Te({_:2},[a.help?{name:"header",fn:n(g=>[b(V(g.column.label)+" ",1),o(E,{placement:"top"},{content:n(()=>[d("span",{innerHTML:a.help},null,8,tt)]),default:n(()=>[at]),_:2},1024)])}:void 0,a.type!=="index"?{name:"default",fn:n(()=>[a.type==="selection"?(i(),h(u,{key:0})):a.prop==="__control"?(i(),p("span",lt,"\u7F16\u8F91 \u5220\u9664")):(i(),p("span",{key:2,onClick:Le(g=>ie(a),["stop"])},"\u8BBE\u7F6E",8,ot))])}:void 0]),1040))),128))]),_:1},16,["data"])])]),d("div",nt,[o(ge,{size:"small"},{default:n(()=>[o(he,{modelValue:"first"},{default:n(()=>[o(G,{label:"\u5B57\u6BB5\u5C5E\u6027",name:"first"},{default:n(()=>[o(f,{label:"\u9009\u62E9\u8868\u5934\u5B57\u6BB5"},{default:n(()=>[o(O,{modelValue:e.selectCheck,"onUpdate:modelValue":t[4]||(t[4]=a=>e.selectCheck=a),onChange:oe},{default:n(()=>[(i(!0),p(m,null,F(e.tableData.columns,a=>(i(),h(_,{key:a.prop,value:a.prop,label:a.label},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),A(d("div",null,[d("h3",null,V(e.attrObj.label)+"\u4E2A\u6027\u5316\u8BBE\u7F6E",1),o(f,{label:"\u65F6\u95F4\u683C\u5F0F\u5316"},{default:n(()=>[o(O,{modelValue:e.config.formatter,"onUpdate:modelValue":t[5]||(t[5]=a=>e.config.formatter=a),onChange:L},{default:n(()=>[o(_,{label:"{y}-{m}-{d} {h}:{i}:{s}",value:"{y}-{m}-{d} {h}:{i}:{s}"}),o(_,{label:"{y}-{m}-{d}",value:"{y}-{m}-{d}"}),o(_,{label:"{h}:{i}:{s}",value:"{h}:{i}:{s}"})]),_:1},8,["modelValue"])]),_:1}),o(f,{label:"\u503C\u5339\u914D\u5B57\u5178"},{default:n(()=>[o(B,{placeholder:"\u5B57\u5178\u5BF9\u5E94\u7684key",modelValue:e.config.dictKey,"onUpdate:modelValue":t[6]||(t[6]=a=>e.config.dictKey=a),onChange:L},null,8,["modelValue"])]),_:1}),(i(!0),p(m,null,F(e.tagList,(a,g)=>(i(),h(f,{key:g,class:"table-tag"},{default:n(()=>[o(B,{placeholder:"\u503C\u5BF9\u5E94\u7684\u7C7B\u578B",modelValue:a.value,"onUpdate:modelValue":C=>a.value=C,onChange:T},{append:n(()=>[o(O,{style:{width:"80px"},modelValue:a.type,"onUpdate:modelValue":C=>a.type=C,onChange:T},{default:n(()=>[o(_,{label:"default",value:"default"}),o(_,{label:"success",value:"success"}),o(_,{label:"info",value:"info"}),o(_,{label:"warning",value:"warning"}),o(_,{label:"danger",value:"danger"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"]),d("i",{class:"icon-del",onClick:C=>de(g)},null,8,ut)]),_:2},1024))),128)),o(f,null,{default:n(()=>[o(r,{onClick:re},{default:n(()=>[st]),_:1})]),_:1})],512),[[H,Object.keys(e.attrObj).length]])]),_:1}),o(G,{label:"\u6570\u636E\u5217\u8868\u914D\u7F6E",name:"second"},{default:n(()=>[N(v)?(i(),p(m,{key:0},[o(f,{label:"\u6570\u636E\u5217\u8868\u540D\u79F0"},{default:n(()=>[o(B,{modelValue:e.name,"onUpdate:modelValue":t[7]||(t[7]=a=>e.name=a),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u5217\u8868\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(f,{label:"\u6570\u636E\u6E90Id"},{default:n(()=>[o(B,{modelValue:e.formId,"onUpdate:modelValue":t[8]||(t[8]=a=>e.formId=a),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u6E90Id"},null,8,["modelValue"])]),_:1})],64)):y("",!0),o(f,{label:"\u5F00\u542F\u4FA7\u680F\u6811"},{default:n(()=>[o(fe,{modelValue:e.treeData.show,"onUpdate:modelValue":t[9]||(t[9]=a=>e.treeData.show=a),onChange:ce},null,8,["modelValue"])]),_:1}),A(o(f,null,{default:n(()=>[o(r,{onClick:t[10]||(t[10]=a=>k("tree"))},{default:n(()=>[it]),_:1})]),_:1},512),[[H,e.treeData.show]]),o(f,{class:"event-btn"},{default:n(()=>[o(r,{onClick:t[11]||(t[11]=a=>k("tableConfig"))},{default:n(()=>[dt]),_:1}),o(r,{onClick:t[12]||(t[12]=a=>k("dict"))},{default:n(()=>[rt,o(E,{content:"\u6570\u636E\u5B57\u5178\uFF0C\u7528\u4E8E\u5339\u914D\u591A\u9009\u7EC4\u3001\u4E0B\u62C9\u9009\u62E9\u7B49\uFF0C\u63D0\u4F9B\u52A8\u6001\u83B7\u53D6Options\u63A5\u53E3\u5B57\u5178\u6570\u636E\uFF0C\u4E00\u822C\u4E0D\u8BBE\u7F6E\uFF0C\u4ECE\u63A5\u53E3dict\u83B7\u53D6\u3002\u683C\u5F0F\uFF1A{0:'\u7537',1:'\u5973'}",placement:"top"},{default:n(()=>[o(me,null,{default:n(()=>[o(_e)]),_:1})]),_:1})]),_:1}),o(r,{onClick:t[13]||(t[13]=a=>k("beforeRequest"))},{default:n(()=>[ct]),_:1}),o(r,{onClick:t[14]||(t[14]=a=>k("afterResponse"))},{default:n(()=>[pt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),o(De,{modelValue:e.visibleDialog,"onUpdate:modelValue":t[15]||(t[15]=a=>e.visibleDialog=a),size:"60%",direction:e.direction,"custom-class":"ace-dialog","append-to-body":!0,"before-close":le},{header:n(()=>[d("div",{innerHTML:e.dialogTitle},null,8,bt)]),default:n(()=>[e.visibleDialog?(i(),p("div",ft)):y("",!0),d("div",_t,[o(r,{type:"primary",size:"small",onClick:te},{default:n(()=>[mt]),_:1})])]),_:1},8,["modelValue","direction"]),o(ze,{ref_key:"vueFileEl",ref:$},null,512)])),[[Fe,e.loading]])}}});export{Ft as default};
