/* Change the i elements for svg icons */
feather.replace();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let accountBtn = document.getElementsByClassName("account-btn");
let dropdownContent = document.getElementsByClassName("dropdown-content");

for (var i = 0; i < accountBtn.length; i++) {
	accountBtn[i].addEventListener('click', function () {
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	});
	
	accountBtn[i].addEventListener('focusout', function () {
		this.classList.remove("active");
		this.nextElementSibling.classList.remove("show");
	});	
}