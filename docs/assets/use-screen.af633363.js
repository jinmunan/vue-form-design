import{J as c,i as l,M as p,P as h,c as d,d as i,L as u}from"./index.b4d3cd99.js";const o=l({components:{},setup(t){const n=[],e=p({});return{toggleCode:s=>{const a="vdpv_"+s;e[a+"Height"]===0?e[a+"Height"]=(n[s].value?n[s].value.offsetHeight:0)||0:e[a+"Height"]=0},...h(e)}}});o.$vd={matter:{},toc:[{content:"\u53EF\u89C6\u5316\u6570\u636E\u5927\u5C4F",anchor:"\u53EF\u89C6\u5316\u6570\u636E\u5927\u5C4F",level:1},{content:"\u7EC4\u4EF6",anchor:"\u7EC4\u4EF6",level:2},{content:"\u56FE\u5C42",anchor:"\u56FE\u5C42",level:2},{content:"\u5927\u5C4F\u914D\u7F6E",anchor:"\u5927\u5C4F\u914D\u7F6E",level:2},{content:"\u5168\u5C40\u6570\u636E",anchor:"\u5168\u5C40\u6570\u636E",level:3},{content:"\u4F4D\u7F6E\u5C5E\u6027",anchor:"\u4F4D\u7F6E\u5C5E\u6027",level:2},{content:"\u6570\u636E",anchor:"\u6570\u636E",level:2},{content:"beforeRequest",anchor:"beforerequest",level:3},{content:"afterResponse",anchor:"afterresponse",level:3}]};const f=o,m={class:"vuedoc"},j=u(`<h1 id="\u53EF\u89C6\u5316\u6570\u636E\u5927\u5C4F" data-source-line="1"><a class="markdownIt-Anchor" href="#\u53EF\u89C6\u5316\u6570\u636E\u5927\u5C4F">#</a> \u53EF\u89C6\u5316\u6570\u636E\u5927\u5C4F</h1><h2 id="\u7EC4\u4EF6" data-source-line="3"><a class="markdownIt-Anchor" href="#\u7EC4\u4EF6">#</a> \u7EC4\u4EF6</h2><p data-source-line="5">\u6240\u652F\u6301\u7684\u8BBE\u8BA1\u7EC4\u4EF6</p><h2 id="\u56FE\u5C42" data-source-line="7"><a class="markdownIt-Anchor" href="#\u56FE\u5C42">#</a> \u56FE\u5C42</h2><p data-source-line="8">\u5927\u5C4F\u8BBE\u8BA1\u7684\u6240\u6709\u7EC4\u4EF6\u56FE\u5C42\uFF0C\u53EF\u5BF9\u5F53\u524D\u7EC4\u4EF6\u8FDB\u884C\u9690\u85CF\u3001\u9501\u5B9A\u3001\u5220\u9664\u64CD\u4F5C</p><h2 id="\u5927\u5C4F\u914D\u7F6E" data-source-line="11"><a class="markdownIt-Anchor" href="#\u5927\u5C4F\u914D\u7F6E">#</a> \u5927\u5C4F\u914D\u7F6E</h2><p data-source-line="13">\u8BBE\u8BA1\u5927\u5C4F\u5BBD\u9AD8\u80CC\u666F\u8272\u53CA\u5927\u5C4F\u5168\u5C40\u6837\u5F0F</p><h3 id="\u5168\u5C40\u6570\u636E" data-source-line="15"><a class="markdownIt-Anchor" href="#\u5168\u5C40\u6570\u636E">#</a> \u5168\u5C40\u6570\u636E</h3><p data-source-line="17">\u5F53\u6570\u636E\u5927\u5C4F\u5F15\u7528\u7EC4\u4EF6\u6BD4\u8F83\u591A\u65F6\uFF0C\u82E5\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5355\u72EC\u4ECE\u63A5\u53E3\u83B7\u53D6\u6570\u636E\uFF0C\u8FD9\u79CD\u505A\u6CD5\u660E\u663E\u4E0D\u5408\u7406\uFF0C\u540E\u7AEF\u540C\u5B66\u53EF\u80FD\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u63D0\u4F9B\u3002\u56E0\u6B64\u5F15\u5165\u5168\u5C40\u6570\u636E\u8BF7\u6C42\u63A5\u53E3\uFF0C\u5C06\u6570\u636E\u63A5\u53E3\u5904\u7406\u597D\u63D0\u4F9B\u7ED9\u6BCF\u4E2A\u7EC4\u4EF6\u8C03\u7528\u3002\u5982\u53EF\u5728<code>afterResponse</code>\u4E2D\u5BF9\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u5904\u7406\u3002\u8FD9\u91CCreturn\u7684res\u53EF\u5728\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u5168\u5C40\u6216\u52A8\u6001\u6570\u636E\u65B9\u6CD5\u4E2D\u83B7\u53D6</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span>
{
  <span class="hljs-comment">// res\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E</span>
  <span class="hljs-keyword">return</span> res;
}
</code></pre><h2 id="\u4F4D\u7F6E\u5C5E\u6027" data-source-line="27"><a class="markdownIt-Anchor" href="#\u4F4D\u7F6E\u5C5E\u6027">#</a> \u4F4D\u7F6E\u5C5E\u6027</h2><p data-source-line="29">\u53EF\u7F16\u8F91\u5F53\u524D\u7EC4\u4EF6\u7684\u76F8\u5173\u5C5E\u6027</p><h2 id="\u6570\u636E" data-source-line="31"><a class="markdownIt-Anchor" href="#\u6570\u636E">#</a> \u6570\u636E</h2><h3 id="beforerequest" data-source-line="33"><a class="markdownIt-Anchor" href="#beforerequest">#</a> beforeRequest</h3><p data-source-line="35">\u5F53\u524D\u7EC4\u4EF6\u6570\u636E\u8BF7\u6C42\u524D\u4E8B\u4EF6\uFF0C\u53EF\u5BF9\u6DFB\u52A0\u8BF7\u6C42\u53C2\u6570</p><h3 id="afterresponse" data-source-line="37"><a class="markdownIt-Anchor" href="#afterresponse">#</a> afterResponse</h3><p data-source-line="39">\u6570\u636E\u8BF7\u6C42\u7ED3\u679C\u5B8C\u6210\u4E8B\u4EF6\uFF0C\u9700\u8981\u6B64\u4E8B\u4EF6\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002\u4F7F\u7528\u6B64\u65B9\u6CD5\u5BF9\u7EC4\u4EF6\u8BBE\u7F6E\uFF0C\u53EF\u6EE1\u8DB3\u5404\u79CD\u56FE\u8868\u6570\u636E\u5C55\u793A\uFF0C\u800C\u65E0\u9700\u5BF9echarts\u8FDB\u884C\u5C42\u5C42\u5C01\u88C5\uFF0C\u53EF\u76F4\u63A5\u4ECEecharts\u5B98\u7F51\u5C06\u56FE\u8868\u914D\u7F6E\u597D\uFF0C\u590D\u5236\u8FC7\u6765\u66FF\u6362\u597D\u63A5\u53E3\u6570\u636E\u5373\u53EF\u3002\u51CF\u5C11\u5B66\u4E60\u6210\u672C</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = <span class="hljs-function">(<span class="hljs-params">data, option, <span class="hljs-built_in">global</span></span>) =&gt;</span>
{
  <span class="hljs-comment">// data\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E</span>
  <span class="hljs-comment">//\u3000options\u5F53\u524D\u7EC4\u4EF6\u6240\u9700\u6570\u636E\uFF0C\u56FE\u8868\u65F6\u76F4\u63A5\u4FEE\u6539option\u4E2D\u7684\u6570\u636E\u5373\u53EF\uFF0C\u5982</span>
  <span class="hljs-comment">// global\u5927\u5C4F\u5168\u5C40\u6570\u636E\u8FD4\u56DE\u7684\u5185\u5BB9</span>
  option.xAsis.data = data.xAsis
  option.series.data = data.series
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;afterResponse&quot;</span>, data, option, <span class="hljs-built_in">global</span>);
  <span class="hljs-keyword">return</span> option;
}
</code></pre>`,20),_=[j];function v(t,n,e,r,s,a){return d(),i("div",m,_)}const k=c(f,[["render",v]]);export{k as default};
