var fw1 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5026-Malerier/Arkiv/MM.M.00495_20191118.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};
var fw2 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5011-Grafikk/Arkiv/MM.G.00612-27.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};
var fw3 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5026-Malerier/Arkiv/M0994_20040804.tif.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};
var fw4 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5015-Munchs-tekster/Arkiv/No-MM%20T2789-01r.jpg.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};
var fw5 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5015-Munchs-tekster/Arkiv/No-MM%20T2811-envelope.jpg.info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/vnd.fotoware.asset+json"
  },
};

var fw6 = {
  "url": "https://foto.munchmuseet.no/fotoweb/archives/5015-Munchs-tekster/Arkiv/No-MM%20T2786-99-V.jpg.info",
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
$.ajax(fw4).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[7].href;
  $("#FotoWeb4").attr("src",$jpg);
  console.log($jpg);
});
$.ajax(fw5).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[7].href;
  $("#FotoWeb5").attr("src",$jpg);
  console.log($jpg);
});
$.ajax(fw6).done(function (response) {
  $jpg = "https://foto.munchmuseet.no" + response.previews[7].href;
  $("#FotoWeb6").attr("src",$jpg);
  console.log($jpg);
});
