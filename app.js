"use strict";
const names={lucien:"リュシアン",odile:"オディール",lost7:"LOST-7",dress:"おひめさまのドレス屋さん"};
const dialog=document.querySelector('#image-dialog');
for(const button of document.querySelectorAll('[data-image]'))button.addEventListener('click',()=>{
 const key=button.dataset.image;
 document.querySelector('#image-title').textContent=names[key];
 const img=document.querySelector('#large-image');img.src=button.querySelector('img').src;img.alt=names[key]+'のスマートフォン画面';
 dialog.showModal();dialog.scrollTop=0;
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
