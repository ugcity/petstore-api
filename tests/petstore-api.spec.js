const { test, expect } = require("@playwright/test");
const petData = require("../data/pet.json");

test("available pets", async ({ request }) => {
  const response = await request.get(`pet/findByStatus`, {
    params: {
      status: "available",
    },
  });

  console.log(await response.json());
});

test("new pets", async ({ request }) => {
  const response = await request.post(`pet`, {
    data: petData,
  });

  console.log(await response.text());
});

test("modify pets", async ({ request }) => {
  const response = await request.put(`pet`, {
    data: petData,
  });

  console.log(await response.text());
});

test("check pets", async ({ request }) => {
  const response = await request.get(`pet/${petData.id}`);
  let json = await response.json();
  let petName = petData.name;
  let petNameResponse = json.name;
  console.log(petName);
  console.log(petNameResponse);
  expect(petName).toBe(petNameResponse);
});
