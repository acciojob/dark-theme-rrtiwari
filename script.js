let app=document.getElementById("app");
let ans=true;
document.getElementById("swap").addEventListener("click",(e)=>{
	if(ans){
		app.classList.remove("button_day");
		app.classList.add("button_night");
		app.classList.add("night");
		ans=false;
	}
    else{
		app.classList.remove("button_night")
		app.classList.remove("night")
		app.classList.add("button_day");
		ans=true;
	}
	   
})

