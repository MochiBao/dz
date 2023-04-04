function createLi(email, password) {
    const markup = `<li> Email: ${email}, Password: ${password}</li>`;
    return markup;
  }
  
  function createLiFromStorage(VALUES_KEY) {
    if (localStorage.getItem(VALUES_KEY)) {
      const values = localStorage.getItem(VALUES_KEY);
      const parseValue = JSON.parse(values);
  
      const item = parseValue
        .map(({ email, password }) => {
          const markupMap = `<li> Email: ${email}, Password: ${password}</li>`;
  
          return markupMap;
        })
        .join(' ');
      return item;
    }
    console.log(item);
  }
  
  export { createLi, createLiFromStorage };