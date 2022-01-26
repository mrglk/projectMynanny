let errorCount = false;

const inputPhone = document.getElementById("phone");

const prefixNumber = (str) => {
  if (str === "7") {
    return "7 (";
  }
  if (str === "8") {
    return "8 (";
  }
  if (str === "9") {
    return "7 (9";
  }
  return "7 (";
};

inputPhone.addEventListener("input", (e) => {
  const value = inputPhone.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result;
  if (inputPhone.value.includes("+8") || inputPhone.value[0] === "8") {
    result = "";
  } else {
    result = "+";
  }

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        result += prefixNumber(value[i]);
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  inputPhone.value = result;
});

function showOther() {
  document.getElementById("myschedule").style.display = "block";
}

function noshowOther() {
  document.getElementById("myschedule").style.display = "none";
}

back = () => {
  window.location.href = "../index.html";
};

validate = () => {
  let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
  let indexFormat = /^\d{6}$/;

  let a = document.forms["nannyForm"]["Name"].value;
  if(a == "") {
    document.getElementById('errName').textContent="Обязательно для заполнения";
    document.getElementById('Name').classList.add('borderErr');
    document.getElementById('Name').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errName').textContent='';
    document.getElementById('Name').classList.remove('borderErr');
    document.getElementById('Name').classList.add('inputClass');
    errorCount = false;
  }

  let b = document.forms["nannyForm"]["LastName"].value;
  if(b == "") {
    document.getElementById('errSurname').textContent="Обязательно для заполнения";
    document.getElementById('LastName').classList.add('borderErr');
    document.getElementById('LastName').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errSurname').textContent='';
    document.getElementById('LastName').classList.remove('borderErr');
    document.getElementById('LastName').classList.add('inputClass');
    errorCount = false;
  }

  let с = document.forms["nannyForm"]["Email"].value;
  if(с == "") {
    document.getElementById('errEmail').textContent="Обязательно для заполнения";
    document.getElementById('Email').classList.add('borderErr');
    document.getElementById('Email').classList.remove('inputClass');
    errorCount = true;
  } else if( !document.getElementById('Email').value.match(mailFormat) ) {
      document.getElementById('errEmail').textContent="Неверный формат Email. Пример: example-678@mail.com";
      document.getElementById('Email').classList.add('borderErr');
      document.getElementById('Email').classList.remove('inputClass');
      document.getElementById('Email').value= '';
      errorCount = true;
      return false;
  } else {
    document.getElementById('errEmail').textContent='';
    document.getElementById('Email').classList.remove('borderErr');
    document.getElementById('Email').classList.add('inputClass');
    errorCount = false;
  }
  
  let d = document.forms["nannyForm"]["phone"].value;
  if(d == "") {
    document.getElementById('errMobile').textContent="Обязательно для заполнения";
    document.getElementById('phone').classList.add('borderErr');
    document.getElementById('phone').classList.remove('inputClass')
    errorCount = true;
  } else if( !document.getElementById('phone').value.match(phoneFormat) ) {
      document.getElementById('errMobile').textContent="Неверный формат телефона. Пример: +7 xxx xxx xx xx";
      document.getElementById('phone').classList.add('borderErr');
      document.getElementById('phone').classList.remove('inputClass');
      document.getElementById('phone').value = '';
      errorCount = true;
      return false;
  } else {
    document.getElementById('errMobile').textContent='';
    document.getElementById('phone').classList.remove('borderErr');
    document.getElementById('phone').classList.add('inputClass');
    errorCount = false;
  }

  let f = document.forms["nannyForm"]["kids-name"].value;
  if (f == "") {
    document.getElementById('errChild').textContent="Обязательно для заполнения";
    document.getElementById('kids-name').classList.add('borderErr');
    document.getElementById('kids-name').classList.remove('inputClass');
    document.getElementById('kids-name').value = '';
    errorCount = true;
  } else {
    document.getElementById('errChild').textContent='';
    document.getElementById('kids-name').classList.remove('borderErr');
    document.getElementById('kids-name').classList.add('inputClass');
    errorCount = false;
  }

  let g = document.forms["nannyForm"]["Date"].value;
  if (g == "") {
    document.getElementById('errBirth').textContent="Обязательно для заполнения";
    document.getElementById('Date').classList.add('borderErr');
    document.getElementById('Date').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errBirth').textContent='';
    document.getElementById('Date').classList.remove('borderErr');
    document.getElementById('Date').classList.add('inputClass');
    errorCount = false;
  }

  let h = document.forms["nannyForm"]["city"].value;
  if (h == "") {
    document.getElementById('errCity').textContent="Обязательно для заполнения";
    document.getElementById('city').classList.add('borderErr');
    document.getElementById('city').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errCity').textContent='';
    document.getElementById('city').classList.remove('borderErr');
    document.getElementById('city').classList.add('inputClass');
    errorCount = false;
  }

  let k = document.forms["nannyForm"]["post-index"].value;
  if (k == "") {
    document.getElementById('errIndex').textContent="Обязательно для заполнения";
    document.getElementById('post-index').classList.add('borderErr');
    document.getElementById('post-index').classList.remove('inputClass');
    errorCount = true;
  } else if( !document.getElementById('post-index').value.match(indexFormat) ) {
    document.getElementById('errIndex').textContent="Неверный формат индекса. Пример: 123654";
    document.getElementById('post-index').classList.add('borderErr');
    document.getElementById('post-index').classList.remove('inputClass');
    document.getElementById('post-index').value='';
    errorCount = true;
    return false;
  } else {
    document.getElementById('errIndex').textContent='';
    document.getElementById('post-index').classList.remove('borderErr');
    document.getElementById('post-index').classList.add('inputClass');
    errorCount = false;
  }

  let l = document.forms["nannyForm"]["address"].value;
  if (l == "") {
    document.getElementById('errAdress').textContent="Обязательно для заполнения";
    document.getElementById('address').classList.add('borderErr');
    document.getElementById('address').classList.remove('inputClass');
    errorCount = true;
  } else {
    document.getElementById('errAdress').textContent='';
    document.getElementById('address').classList.remove('borderErr');
    document.getElementById('address').classList.add('inputClass');
    errorCount = false;
  }

  return true;
}

document.getElementById("sendButton").addEventListener("click", (event) => {
  let resultValidate = validate();
  if (resultValidate && !errorCount) {
    submitForm();
  } else {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  location.hash = 'Moscow';
  document.getElementById("h1Text").innerHTML = "Найти няню в Москве";
  document.getElementById("city").value = "Москва";
  
});

openCity = (cityName) => {
  if(cityName === 'Moscow') {
    location.hash = 'Moscow';
    document.getElementById("h1Text").innerHTML = "Найти няню в Москве";
    document.getElementById("city").value = "Москва";
  } else if(cityName === 'SaintPetersburg') {
    location.hash = 'SaintPetersburg';
    document.getElementById("h1Text").innerHTML = "Найти няню в Санкт-Петербурге";
    document.getElementById("city").value = "Санкт-Петербург";
  } else if(cityName === 'NaberezhnyeChelny') {
    location.hash = 'NaberezhnyeChelny';
    document.getElementById("h1Text").innerHTML = "Найти няню в Набережных челнах";
    document.getElementById("city").value = "Набережные Челны";
  } else if(cityName === 'Kazan') {
    location.hash = 'Kazan';
    document.getElementById("h1Text").innerHTML = "Найти няню в Казани";
    document.getElementById("city").value = "Казань";
  } else if(cityName === 'Barnaul') {
    location.hash = 'Barnaul';
    document.getElementById("h1Text").innerHTML = "Найти няню в Барнауле";
    document.getElementById("city").value = "Барнаул";
  }
}

dataError = (item) => {
  if(errorCount){
    document.getElementById(item).textContent=""
  }
}

submitForm = (event) => {
  formData = new FormData(formElementQuestionnaire);

  for(let value of formData.values()) {
    console.log(value);
  }
  
  fetch('https://api.star-c.ru/webhook/mynanny', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
      })
      
      .then(data => {
        console.log(data);
        document.getElementById("applicationSent").classList.remove("applicationSentOff");
        document.getElementById("applicationSent").classList.add("applicationSent");
        document.getElementById("tabCity").classList.add("formOff");
        document.getElementById("formElementQuestionnaire").classList.add("formOff");
    })

      .catch(error =>{
        if(error){                
          console.log(error.message);
          console.log(error.name);
          document.getElementById("errorSent").classList.remove("errorSentOff");
          document.getElementById("errorSent").classList.add("errorSent");
          document.getElementById("tabCity").classList.add("formOff");
          document.getElementById("formElementQuestionnaire").classList.add("formOff");
        }  
  });
  event.preventDefault();
}