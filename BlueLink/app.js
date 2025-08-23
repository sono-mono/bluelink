// Basic utilities shared across pages
function $(sel, ctx=document){return ctx.querySelector(sel)}
function $all(sel, ctx=document){return Array.from(ctx.querySelectorAll(sel))}

function toast(msg,type="info"){
  const t=document.createElement("div");
  t.textContent=msg;
  t.style.cssText="position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:10px 14px;border-radius:10px;z-index:9999;opacity:.95";
  if(type==="success") t.style.background="#16a34a";
  if(type==="error") t.style.background="#dc2626";
  document.body.appendChild(t); setTimeout(()=>t.remove(),2200);
}

function save(key,val){localStorage.setItem(key,JSON.stringify(val))}
function load(key,def=null){try{return JSON.parse(localStorage.getItem(key)) ?? def}catch{ return def }}

// Simple mock data
const MOCK_JOBS = load("jobs", [
  {id:1,title:"Plumber for leak repair",trade:"Plumber",pay:"₹800/day",distance:"2.5 km",shift:"Tomorrow 10am-6pm",verified:true,employer:"A1 Constructions"},
  {id:2,title:"Mason for wall work",trade:"Mason",pay:"₹900/day",distance:"4.1 km",shift:"Mon-Fri",verified:false,employer:"RK Builders"},
  {id:3,title:"Carpenter for cupboard fitting",trade:"Carpenter",pay:"₹1,200/day",distance:"1.2 km",shift:"Weekend",verified:true,employer:"HomeFix"},
]);

const MOCK_NOTIFS = load("notifs", [
  {id:101,type:"match",text:"3 new jobs near Andheri for Plumber"},
  {id:102,type:"update",text:"Your application for 'Wall work' was viewed"},
  {id:103,type:"safety",text:"Beware of advance fee requests. Report scams."}
]);

// Navigation helpers for demos
function go(url){location.href = url}
