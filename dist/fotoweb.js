var fw1 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5026-Malerier/Arkiv/MM.M.00495_20191118.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};
var fw2 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5000-Malerier/Assets/Arkiv/MM.G.00612-27.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};
var fw3 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5000-Malerier/Assets/Arkiv/M0994_20040804.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};

$.ajax(fw1).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[7].href;
  $("#FotoWeb1").attr("src",$jpg);
  console.log($jpg);
});
$.ajax(fw2).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[7].href;
  $("#FotoWeb2").attr("src",$jpg);
  console.log($jpg);
});
$.ajax(fw3).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[7].href;
  $("#FotoWeb3").attr("src",$jpg);
  console.log($jpg);
});
