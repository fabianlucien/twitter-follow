function getProfiles() {
  const profiles = document.getElementsByClassName(
    "account-group js-account-group js-action-profile js-user-profile-link js-nav"
  );
  for (let i = 0, p = Promise.resolve(); i < profiles.length; i++) {
    let href = profiles[i].href;
    p = p.then(
      () =>
        new Promise(resolve => {
          href = `${href}/?test`;
          window.open(href);
          setTimeout(function() {
            resolve();
          }, 5000);
        })
    );
  }
}

function follow(url) {
  console.log("follow");
  window.open(url, "_self");
}

getProfiles();
