function getChicken() {
  return Promise.resolve(`πΏ => π`);
}

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬μ μμ'))
  // return Promise.resolve(`${egg} => π³`);
}

getChicken()
.then((chicken) => fetchEgg(chicken))
.then((egg) => fryEgg(egg))
.then((friedEgg) => console.log(friedEgg))
.catch((error) => console.log(error.name));