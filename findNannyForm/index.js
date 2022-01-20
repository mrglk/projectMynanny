function showOther(){
	document.getElementById("other").style.visibility = "visible";
} 
function noshowOther(){
	document.getElementById("other").style.visibility = "hidden";
} 

back = () => {
  window.location.href = '../index.html';
}

function validate(){
	let a = document.forms["nannyForm"]["name"].value;
  if (a == "") {
	alert("Укажите ваше имя");
	return false;
  }
  let b = document.forms["nannyForm"]["surname"].value;
  if (b == "") {
	alert("Укажите вашу фамилию");
	return false;
  }
  let с = document.forms["nannyForm"]["email"].value;
  if (с == "") {
	alert("Укажите ваш Е-майл");
	return false;
  }
  let d = document.forms["nannyForm"]["mobile"].value;
  if (d == "") {
	alert("Укажите ваш телефон");
	return false;
  }
  let f = document.forms["nannyForm"]["child"].value;
  if (f == "") {
	alert("Укажите имя вашего ребенка");
	return false;
  }
  let g = document.forms["nannyForm"]["birth"].value;
  if (g == "") {
	alert("Укажите ждату рождения ребенка");
	return false;
  }
  let h = document.forms["nannyForm"]["city"].value;
  if (h == "") {
	alert("Укажите город");
	return false;
  }
  let k = document.forms["nannyForm"]["index"].value;
  if (k == "") {
	alert("Укажите почтовый индекс");
	return false;
  }
  let l = document.forms["nannyForm"]["adress"].value;
  if (l == "") {
	alert("Укажите адрес проживания");
	return false;
  }
  }

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}