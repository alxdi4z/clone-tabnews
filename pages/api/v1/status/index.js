import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query('SELECT 1 + 1 as sum');
  console.log(`sum: ${result.rows.at(0).sum}`);
  response.status(200).json({
    result: 'status working'
  });
}

export default status;
