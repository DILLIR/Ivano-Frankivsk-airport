$('#parallax-window').parallax({imageSrc: 'img/about_us_first.png'});
$('#parallax-window-2').parallax({imageSrc: 'img/banner.png'});
$('#parallax-window-3').parallax({imageSrc: 'img/yeray-sanchez-ZKEjw7oLmQQ-unsplash.jpg'});
$('#parallax-window-4').parallax({imageSrc: 'img/bannerweston-mackinnon-oiBOjhQb2Ao-unsplash.png'});
$('#parallax-window-5').parallax({imageSrc: 'img/ticket_main.png'});

let hour = document.querySelector(".banner__hour");
let date = new Date();
if(date.getMinutes() < 10){
	hour.innerHTML = date.getHours() + ":0" + date.getMinutes();
}else{
	hour.innerHTML = date.getHours() + " : " + date.getMinutes();
}

function updateHour(){
	date = new Date();
	if(date.getMinutes() < 10){
		hour.innerHTML = date.getHours() + " :0" + date.getMinutes();
	}else{
		hour.innerHTML = date.getHours() + " : " + date.getMinutes();
	}
}

let x = setInterval(updateHour,60000)