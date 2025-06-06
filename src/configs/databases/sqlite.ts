const SQLiteDatabasesConfigs = [
	{
		name: 'SQLite',
		path: 'sqlite',
		template_path: 'templates/sqlite/sqlite',
		env_var: 'DB_FILE_NAME',
		packages: ['drizzle-orm', '@libsql/client', 'dotenv', 'drizzle-kit'],
	},
	{
		name: 'Bun SQLite',
		path: 'bun_sqlite',
		template_path: 'templates/sqlite/bun-sqlite',
		env_var: 'DB_FILE_NAME',
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
