window.addEventListener("load", function(){

  localStorage.clear();

  buildPanels();
  setNavBarEvents();
  onPressFightNav();

  // testingbuildCountriesList();
  buildCountriesList();

});
