const { test, expect } = require("@playwright/test");
const amyData = require("../data/pet-amy.json");
let orderID;


test("Create order", async ({ request }) => {
  const response = await request.post(`store/order`, {
    data: {
      id: 1,
      petId: 1,
      quantity: 1,
      shipDate: "2023-11-12T23:58:23.866Z",
      status: "placed",
      complete: true,
    },
  });
  
  expect(response.status()).toBe(200);
});

test("Check order", async ({ request }) => {
  const response = await request.get(`store/order/1`);
  let responseJson = await response.json();
  expect(responseJson.status).toBe("placed");
});

test("Delete order", async ({ request }) => {
  const response = await request.delete(`store/order/1`);
  let responseJson = await response.json();
  expect(response.status()).toBe(200);
});

test("Check order is deleted", async ({ request }) => {
  const response = await request.get(`store/order/1`);
  let responseJson = await response.json();
  expect(responseJson.message).toBe("Order not found");
});
