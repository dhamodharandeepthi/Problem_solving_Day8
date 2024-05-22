//Write a function that takes two JSON objects as input and merges them into a single JSON object. Handle conflicts if both objects have the same property.

let obj1 = {
  name: "Dhamu",
  age: 30,
  job: "Full stack developer",
  address: {
    house: 547,
    street: "south",
    city: "cbe",
    state: "TamilNadu",
    country: "India",
    pincode: 631658,
  },
  getBirthyear: function () {
    return new Date().getFullYear() - this.age;
  },
  getFullAddress() {
    let { house, street, city, state, country, pincode } = this.address;
    return `${house},${street},${city},${state},${country}-${pincode}`;
  },
};

let obj2 = {
  name: "Kalaivani",
  age: 31,
  place: "madurai",
  work: "Developer",
  address: {},
};

function mergObj(obj1, obj2) {
  let obj = { ...obj1 };
  for (let key in obj2) {
    if (
      obj[key] === undefined ||
      typeof obj2[key] == "function" ||
      obj[key] < obj2[key]
    ) {
      obj[key] = obj2[key];
    }
  }

  return obj;
}

console.log(mergObj(obj1, obj2));
