const liff = require('@line/liff');

window.onload = function () {
  liff.init({ liffId: "1655727472-xvE2Zm18" });

  if (liff.isLoggedIn()) {
    alert("ios!");
  };

};



