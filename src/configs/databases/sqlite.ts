const SQLiteDatabasesConfigs = [
	{
		name: 'SQLite',
		path: 'sqlite',
		template_path: 'templates/sqlite/sqlite',
		env_var: {
			DB_FILE_NAME: 'file:local.db',
		},
		packages: ['drizzle-orm', '@libsql/client', 'dotenv', 'drizzle-kit'],
	},
	{
		name: 'Turso',
		path: 'turso',
		template_path: 'templates/sqlite/turso',
		env_var: {
			TURSO_DATABASE_URL: '',
			TURSO_AUTH_TOKEN: '',
		},
		packages: ['drizzle-orm', '@libsql/client', 'dotenv', 'drizzle-kit'],
	},
	{
		name: 'Bun SQLite',
		path: 'bun_sqlite',
		template_path: 'templates/sqlite/bun-sqlite',
		env_var: {
			DB_FILE_NAME: 'mydb.sqlite',
		},
		packages: ['drizzle-orm', '@types/bun', 'dotenv', 'drizzle-kit'],
	},
]

export function getSQLiteDatabasesConfigs() {
	return SQLiteDatabasesConfigs.map((config) => {
		return {
			label: config.name,
			value: config.path,
		}
	})
}

export default SQLiteDatabasesConfigs
