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
    let currentYear = new Date().getFullYear();
    console.log(currentYear); //2024
    let birthYear = currentYear - this.age;
    return `myBirthYear::: ${birthYear}`; //1994
  },
  getFullAddress() {
    let fullAddress = "";
    for (let key in this.address) {
      fullAddress += this.address[key] + ", ";
    }
    console.log(fullAddress);
    return `fullAddress::: ${fullAddress}`;
  },
};

console.log(person.getBirthyear());
console.log(person.getFullAddress());
