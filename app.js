const fileInput=document.getElementById('botfile');
const nameInput=document.getElementById('botname');
const tokenInput=document.getElementById('token');
const list=document.getElementById('botlist');
let bots=[];
fileInput.addEventListener('change',()=>{if(fileInput.files[0]&&!nameInput.value)nameInput.value=fileInput.files[0].name.replace(/\.py$/i,'')});
document.getElementById('addbot').addEventListener('click',()=>{
 const file=fileInput.files[0], name=nameInput.value.trim();
 const msg=document.getElementById('message');
 if(!file){msg.textContent='Please choose a .py file first.';return}
 if(!file.name.toLowerCase().endsWith('.py')){msg.textContent='Only .py files are accepted.';return}
 if(!name){msg.textContent='Please enter a bot name.';return}
 bots.push({name,file:file.name,status:'Queued'});
 render(); msg.textContent='Demo entry added. It has not been uploaded or started.';
 fileInput.value='';nameInput.value='';tokenInput.value='';
});
function render(){
 document.getElementById('total').textContent=bots.length;
 document.getElementById('running').textContent='0';
 document.getElementById('stopped').textContent=bots.length;
 document.getElementById('count').textContent=bots.length+' bots';
 if(!bots.length){list.className='empty';list.innerHTML='<div class="empty-icon">🤖</div><b>No bots added yet</b><span>Choose a Python file above to add a demo entry.</span>';return}
 list.className='';
 list.innerHTML=bots.map((b,i)=>`<div class="bot-row"><div><b>🤖 ${escapeHtml(b.name)}</b><small>${escapeHtml(b.file)} · ${b.status}</small></div><div class="bot-actions"><button data-remove="${i}">Remove</button></div></div>`).join('');
 list.querySelectorAll('[data-remove]').forEach(btn=>btn.addEventListener('click',()=>{bots.splice(Number(btn.dataset.remove),1);render()}));
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
