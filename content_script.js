window.setTimeout(function() {
  window.close();
  follow();
}, 5000);

function follow() {
  const element = document
    .getElementsByClassName("UserActions")[0]
    .getElementsByClassName("not-muting not-following")[0];
  if (element !== undefined) {
    const followBtn = element.childNodes[2];
    followBtn.click();
  } else {
    console.log("already following");
  }
}
