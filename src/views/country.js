const BASE_URL = "https://restcountries.com/v3.1/";

const ULR_PARAMS = "?fields=name, flags, languages & languages = "



export default class NewClass {
  constructor() {
    this.value = this.value;
  };

  fetchCountries() {
    return fetch(`${BASE_URL}name/${this.value} ${ULR_PARAMS}`, {
      method: "POST",
      headers: {
        
      },
      body: JSON.stringify({name, password})
    });
      // .then(response => {
      //   if (!response.ok) {
      //     throw new Error(response.status);
      //   }
      //   return response.json();
      // })
      // .catch(err => console.log(err.status));
  };

  get val() {
    return this.value;
  };

  set val(newValue) {
    this.value = newValue;
  };
};