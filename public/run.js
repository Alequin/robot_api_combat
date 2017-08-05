window.addEventListener("load", function(){

  localStorage.clear();

  buildPanels();
  setNavBarEvents();
  onPressFightNav();

  testingbuildCountriesList();
  // buildCountriesList();

  produceFakeScoreData();
});

function produceFakeScoreData(){

  for(var country of allCountries){
    country.score.win = dice(1, 100);
    country.score.loss = dice(1, 100);
  }

}
