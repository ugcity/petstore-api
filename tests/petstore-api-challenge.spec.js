const { test, expect } = require("@playwright/test");
const amyData = require("../data/pet-amy.json");
const chestnutData = require("../data/pet-chestnut.json");
//
test("Create new pet", async ({ request }) => {
  const response = await request.post(`pet`, {
    data: chestnutData,
  });

  expect(response.status()).toBe(200);
});

test("check pet 1", async ({ request }) => {
  const response = await request.get(`pet/${chestnutData.id}`);
  let responseJson = await response.json();
  expect(JSON.stringify(chestnutData)).toBe(JSON.stringify(responseJson));
});

test("modify pet", async ({ request }) => {
  const response = await request.put(`pet`, {
    data: amyData,
  });
  expect(response.status()).toBe(200);
});

test("check pet 2", async ({ request }) => {
  const response = await request.get(`pet/${amyData.id}`);
  let responseJson = await response.json();
  expect(JSON.stringify(amyData)).toBe(JSON.stringify(responseJson));
});

test("delete", async ({ request }) => {
  const response = await request.delete(`pet/${amyData.id}`);
  let responseJson = await response.json();
  expect(response.status()).toBe(200);
});

test("check pet 3", async ({ request }) => {
  const response = await request.get(`pet/${amyData.id}`);
  let responseJson = await response.json();
  expect(response.status()).toBe(404);
});
