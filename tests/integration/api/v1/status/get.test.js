test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.updated_at).toBe(new Date(responseBody.updated_at).toISOString());

  expect(responseBody.version).toBeDefined();
  console.log(responseBody.version);
  expect(typeof responseBody.version).toBe('string');
  expect(responseBody.version).toMatch(/postgresql\s[\d.?]+/i);

  expect(responseBody.max_connections).toBeDefined();
  expect(typeof responseBody.max_connections).toBe('number');

  expect(responseBody.used_connections).toBeDefined();
  expect(typeof responseBody.used_connections).toBe('number');
});
