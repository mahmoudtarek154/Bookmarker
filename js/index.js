var SiteName = document.getElementById("SiteName");
var SiteURL = document.getElementById("SiteURL");
var fixidi = document.getElementById("fixidi")

var SiteList = [];
if (localStorage.getItem("list")) {
  SiteList = JSON.parse(localStorage.getItem("list"));
  siteInformationDisplay();
}

function siteInformationAdd() {
  var siteInformation = {
    Name: SiteName.value,
    URL: SiteURL.value,
  };
  SiteList.push(siteInformation);
  siteInformationDisplay();
  localStorage.setItem("list", JSON.stringify(SiteList));
}
function siteInformationDisplay() {
  var temp = "";
  for (var i = 0; i < SiteList.length; i++) {
    temp +=
      `   <tr>
            <td>${i + 1}</td>
            <td>${SiteList[i].Name}</td>
            <td>
             <a  href="
             ${
               SiteList[i].URL.startsWith("https://")
                 ? SiteList[i].URL
                 : "https://" + SiteList[i].URL
             }
             " target="_blank">  <button   style="background-color:  var(--main-color); border: 2px solid  var(--main-color) ;" id="buttonVisit" class="btn btn-primary"> <i class="fa-solid fa-plane-departure me-2"></i>Visit</button></a>
            </td>
            <td>
             <button " onclick="siteInformationDelet(` +
      i +
      `)" style="background-color: #dc2f2f; border: 2px solid #dc2f2f ;" id="buttonVisit" type="button" class="btn btn-primary"> <i class="fa-solid fa-trash me-2"></i>Delet</button>
            </td>
          </tr>`;
  }
  document.getElementById("TableBody").innerHTML = temp;
}


function siteInformationDelet(x) {
  SiteList.splice(x, 1);
  siteInformationDisplay();

  localStorage.setItem("list", JSON.stringify(SiteList));
}

function orangecolor (){
  document.documentElement.style.cssText="  --main-color : #ff894c "
}
function redcolor (){
  document.documentElement.style.cssText="  --main-color : #ffb6b9 "
}
function greencolor (){
  document.documentElement.style.cssText="  --main-color : #00adb5 "
}
function bluecolor (){
  document.documentElement.style.cssText="  --main-color : #2772db "
}
function lemoncolor (){
  document.documentElement.style.cssText="  --main-color : #a9c52f "
}
function purplecolor (){
  document.documentElement.style.cssText="  --main-color : #9d53c3 "
}
function pinkcolor (){
  document.documentElement.style.cssText="  --main-color : #ff347f "
}


function siteInformationAdd() {
  var urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([/\w \.-]*)*\/?$/;
var SiteNameinput = /[A-Za-z]{3,16}/;
  
if(!urlPattern.test(SiteURL.value) &&!SiteNameinput.test(SiteName.value)) {


  alert("Please enter a valid name and a valid URL ");
  return; 


} else if(!urlPattern.test(SiteURL.value)) {
    alert("Please enter a valid URL.");
  
    return; 
  }else if (!SiteNameinput.test(SiteName.value))  {

    alert("Please enter a valid name (3-16 charachter) ");

    return; 

  }

  var siteInformation = {
    Name: SiteName.value,
    URL: SiteURL.value,
  };

  SiteList.push(siteInformation);
  siteInformationDisplay();
  localStorage.setItem("list", JSON.stringify(SiteList));
}







