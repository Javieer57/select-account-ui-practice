feather.replace();let accountBtn=document.getElementsByClassName("account-btn"),dropdownContent=document.getElementsByClassName("dropdown-content");for(var i=0;i<accountBtn.length;i++)accountBtn[i].addEventListener("click",(function(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show")})),accountBtn[i].addEventListener("focusout",(function(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("show")}));
//# sourceMappingURL=script.js.map