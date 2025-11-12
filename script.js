let app=document.getElementById("app");
let button=document.getElementById("swap")
let ans=true;
document.getElementById("swap").addEventListener("click",(e)=>{
	if(ans){
		app.classList.add("night");
		button.classList.remove("button_day");
		button.classList.remove("button_night");
		ans=false;
	}
    else{
		button.classList.add("button_night")
		button.classList.add("button_day");
		app.classList.remove("night")
		ans=true;
	}
	   
})

