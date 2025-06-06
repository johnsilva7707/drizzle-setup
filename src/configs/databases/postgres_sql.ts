const PostgresqlDatabasesConfigs = [
	{
		name: 'PostgreSQL',
		path: 'postgres_sql',
		template_path: 'templates/postgres/postgres',
		env_var: 'DATABASE_URL',
		packages: ['drizzle-orm', 'mysql2', 'dotenv', 'drizzle-kit'],
	},
	{
		name: 'Neon',
		path: 'neon',
		template_path: 'templates/postgres/neon',
		env_var: 'DATABASE_URL',
		packages: [
			'drizzle-orm',
			'@neondatabase/serverless',
			'dotenv',
			'drizzle-kit',
		],
	},
]

export function getPostgresqlDatabasesConfigs() {
	return PostgresqlDatabasesConfigs.map((config) => {
		return {
			label: config.name,
			value: config.path,
		}
	})
}

export default PostgresqlDatabasesConfigs
