// @ts-check
const { test, expect } = require("@playwright/test");

test("available pets", async ({ request }) => {
  const response = await request.get(`pet/findByStatus`, {
    params: {
      status: "available",
    },
  });

  console.log(await response.json());
});