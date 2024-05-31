const axios = require("axios");

async function getUser(username) {
  try {
    const fetch = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return fetch;
  } catch (error) {
    console.log("Error fetching user data");
    return error.message;
  }
}
getUser();
module.exports = { getUser };
