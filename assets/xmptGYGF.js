import{x as g,y as u}from"./DrNZrxmd.js";const m=g("TaskStore",()=>{const s=u([{id:1,title:"Task 1",text:"Text text text text 1",status:!0},{id:2,title:"Task 2",text:"Text text text text 2",status:!0},{id:3,title:"Task 3",text:"Text text text text 3",status:!1},{id:4,title:"Task 4",text:"Text text text text 4",status:!1},{id:5,title:"Task 5",text:"Text text text text 5",status:!1}]),e=u({title:"",text:""}),a=u({title:"",text:""}),i=u({search:"",select:"all"}),r=u(0),n=u(!1),v=u(!1),c=t=>{let l={textDecoration:"none"};return t&&(l.textDecoration="line-through"),l},x=()=>s.value.filter(t=>{if(i.value.select==="all")return t;if(i.value.select==="completed")return t.status;if(i.value.select==="unfinished")return!t.status}),d=()=>x().filter(t=>t.title.toLowerCase().includes(i.value.search.toLowerCase().trim())),f=t=>{s.value.map(l=>{l.id===t&&(l.status=!l.status)})},T=t=>s.value.filter(l=>l.id==t)[0],k=()=>{e.value.title===""?a.value.title="Заполните название":a.value.title="",e.value.text===""?a.value.text="Заполните описание":a.value.text="",a.value.title===""&&a.value.text===""&&(s.value.push({id:Date.now(),title:e.value.title,text:e.value.text,status:!1}),e.value={title:"",text:""},n.value=!1)},h=()=>{s.value=s.value.map(t=>t.id===r.value?{...t,...e.value}:t),o()},o=t=>{t?(r.value=t.id,e.value.title=t.title,e.value.text=t.text):(r.value=null,e.value={title:"",text:""}),n.value=!n.value};return{task:e,tasks:s,query:i,taskAdd:k,loading:v,taskDelete:t=>{s.value=s.value.filter(l=>l.id!==t)},taskEdit:h,taskError:a,idEditTask:r,showTaskForm:n,openTaskForm:o,getTaskById:T,getTextDecor:c,getSortedTasks:x,changeTaskStatus:f,getSortedAndSearchedTasks:d}});export{m as u};
