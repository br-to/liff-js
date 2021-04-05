

window.onload = function () {
  liff.init({ liffId: "1655727472-xvE2Zm18" },
    data => {
      if (liff.isLoggedIn()) {
        alert("ios!");
      } else {
        liff.login();
      }
      },
      (error) => {
        console.log(error);
    });
}



