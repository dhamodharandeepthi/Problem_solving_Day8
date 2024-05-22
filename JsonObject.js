let person = {
  name: "Dhamu",
  age: 30,
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

console.log(person.getBirthyear()); //1994
console.log(person.getFullAddress()); //547,south,cbe,TamilNadu,India-631658
