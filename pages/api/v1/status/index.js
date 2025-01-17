import database from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const query = `select regexp_match(version(), '(?i)postgresql\\s[\\d.?]+') as version,
  current_setting('max_connections') as max_connections,
  (select count(*) as used_connections from pg_stat_activity where datname = 'local_db' and state = 'active') as used_connections;`;
  const responseBody = (await database.query(query)).rows.at(0);
  console.log(responseBody);
  response.status(200).json({
    updated_at: updatedAt,
    version: responseBody.version,
    max_connections: parseInt(responseBody.max_connections),
    used_connections: parseInt(responseBody.used_connections)
  });
}

export default status;
