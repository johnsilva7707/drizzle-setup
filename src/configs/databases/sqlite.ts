const SQLiteDatabasesConfigs = [
	{
		name: 'SQLite',
		path: 'sqlite',
		template_path: 'templates/sqlite/sqlite',
		env_var: {
			DB_FILE_NAME: 'file:local.db',
		},
		packages: ['drizzle-orm', '@libsql/client', 'dotenv', 'drizzle-kit -D'],
	},
	{
		name: 'Turso',
		path: 'turso',
		template_path: 'templates/sqlite/turso',
		env_var: {
			TURSO_DATABASE_URL: '',
			TURSO_AUTH_TOKEN: '',
		},
		packages: ['drizzle-orm', '@libsql/client', 'dotenv', 'drizzle-kit -D'],
	},
	{
		name: 'Bun SQLite',
		path: 'bun_sqlite',
		template_path: 'templates/sqlite/bun-sqlite',
		env_var: {
			DB_FILE_NAME: 'mydb.sqlite',
		},
		packages: ['drizzle-orm', '@types/bun -D', 'dotenv', 'drizzle-kit -D'],
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
