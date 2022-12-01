function getChicken() {
  return Promise.resolve(`🌿 => 🐓`);
}

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.reject(new Error('치킨을 가지고 올수 없음'))
  // return Promise.resolve(`${egg} => 🍳`);
}

getChicken()
.then((chicken) => fetchEgg(chicken))
.then((egg) => fryEgg(egg))
.then((friedEgg) => console.log(friedEgg))
.catch((error) => console.log(error.name));