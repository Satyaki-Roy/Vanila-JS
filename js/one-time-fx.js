function launchRocket() {
  console.log("Rocket Launched");
}

const launchRocketOnce = once(launchRocket);

function once(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

launchRocketOnce();
launchRocketOnce();
launchRocketOnce();
