
//1
textlength.oninput = function countLength() {
  var usertext = document.getElementById('textlength').value;
  sumlength.innerHTML = usertext.length;
  }

//2 Craete img tag
 function createNewPic (Path) {
    let MyImg = document.createElement('img');
      MyImg.src = Path;
    return MyImg;
  }
  //create array and pastle pics
  let arrImg = ['1', '2', '3', '4']
    arrImg.forEach((name) => {
    let img = createNewPic('img/' + name + '.jpg');
    addedimg.appendChild(img);
  })

//3
gomodif.onclick = function ModifUrl() {
  let userurl = document.getElementById('userurl').value;
  //check http & HTTP
  if (userurl.substring(1,7) == "ttp://" || 
      userurl.substring(1,7) == "TTP://") {
   resurl.innerHTML = 'Link: ' + userurl.substring(7);
  }
    //check https & HTTPS
  else if (userurl.substring(1,8) == "ttps://" || 
      userurl.substring(1,8) == "TTPS://") {
   resurl.innerHTML = 'Link: ' + userurl.substring(8);
}
  else {
    resurl.innerHTML = ' ';
    alert('Please enter your url in standart "http://url.dom" ');
  }
}

//4
domodif.onclick = function ChandeUrl() {
  let changeArr = ['http://', 'https://', 'www.']; //erraised symb
  let elem = document.getElementById('userurl').value;
    changeArr.forEach((replaceStr) => {
      elem = elem.replace(replaceStr, '');
    })
    if (elem == '') {
      alert('Please enter your url'); //not empty
    }
    else if (~elem.indexOf(".ua")) {  //check .ua
      resurl.innerHTML = elem;
    }
    else {
      resurl.innerHTML = elem + '.ua'; //add .ua
    }
  }

 //5
userData.onclick = function UserDataChecker() { //delate spases
  let name = document.getElementById('uerName').value.replace(/^\s+|\s+$/gm,'');
  let surname = document.getElementById('uerSurname').value.replace(/^\s+|\s+$/gm,'');
  let pass = document.getElementById('uerPass').value.replace(/^\s+|\s+$/gm,'');
  let mail = document.getElementById('uerEmail').value.replace(/^\s+|\s+$/gm,'');
  
  let ArrData = [name, surname, pass, mail];

  for (var i=0; i < ArrData.length; i++) { //check for empty
    if (ArrData[i].length == 0) {
      userDataRes.innerHTML = 'Please enter all fields';
    }
    else if(ArrData[2].length < 5){ //check pass
       userDataRes.innerHTML = 'Your password is less than 5 symbols';
    }
    //check mail
    else if (mail.indexOf("@") <= 0 || ~mail.indexOf(" ")) { 
       userDataRes.innerHTML = 'Please check your mail';
    }
    else{userDataRes.innerHTML = 'True!!!'; //Yes :)
    }
  }
   console.log(ArrData);
}

//6 unicode
  uerSymb.oninput = function uerSymbCoder() {
  var usersymbol = document.getElementById('uerSymb').value;
  codeOfSymb.innerHTML = 'Code: ' + usersymbol.charCodeAt(0);
  }