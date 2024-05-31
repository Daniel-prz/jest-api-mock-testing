const axios = require("axios");
const { getUser } = require("../userApi");
axios;
jest.mock("axios");
describe("getUser", () => {
  it("returns request from API", async () => {
    axios.get.mockResolvedValue({ data: { name: "User1" } });
    expect(await getUser("username")).toEqual({ data: { name: "User1" } });
  });
  it("returns error when rejected", async () => {
    axios.get.mockRejectedValue(new Error("Error")); // Passing an error object
    expect(await getUser("error")).toEqual("Error");
  });
});
