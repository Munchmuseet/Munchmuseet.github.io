var settings = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5000-Malerier/Assets/Arkiv/M0112_20190403.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};

$.ajax(settings).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[6].href;
  $("#FotoWeb1").attr("src",$jpg);
  console.log($jpg);
});

