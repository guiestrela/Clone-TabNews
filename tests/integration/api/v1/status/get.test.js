test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt); // Check if it's a valid date
  
  expect(responseBody.dependencies.database.version).toEqual("16.0"); // Example version check
  expect(responseBody.dependencies.database.max_connections).toEqual(100); // Example max_connections check
  expect(responseBody.dependencies.database.opened_connections).toEqual(1); // Check if opened_connections is present
});
