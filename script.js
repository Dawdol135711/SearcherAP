const search = document.querySelector(".search");
const items = document.querySelectorAll("li");

const searchfunc = (e) => {
	const text = e.target.value.toLowerCase();
	

	items.forEach(el => {

        const task = el.textContent
		if (task.toLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

search.addEventListener("keyup", searchfunc);
