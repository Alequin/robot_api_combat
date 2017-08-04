function buildCountriesList(){
  var request = new XMLHttpRequest();
  request.addEventListener("load", onRequest);
  request.open("GET", "https://restcountries.eu/rest/v2/all");
  request.send();
}

function onRequest(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);

  populateList(countries);
}

function populateList(countries){

}

function buildCountryElement(country){
  
}
