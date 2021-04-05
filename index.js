

window.onload = function () {
  liff.init({ liffId: "1655727472-xvE2Zm18" },
    data => {
      if (liff.isLoggedIn() && liff.isInClient()) {
        alert(liff.getAccessToken());
      } else {
        alert("error");
      }
      },
      (error) => {
        console.log(error);
    });
}



