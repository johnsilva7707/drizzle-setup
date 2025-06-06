import path from 'path'
import fs from 'fs-extra'

async function updateEnvFile(envVar: string, value: string = '') {
	const envFilePath = path.join(process.cwd(), '.env')

	let lines: string[] = []

	// Check if .env file exists
	const exists = await fs.pathExists(envFilePath)

	if (exists) {
		const content = await fs.readFile(envFilePath, 'utf-8')
		lines = content.split('\n').filter((line) => !line.startsWith(`${envVar}=`))
	}

	// Add the env_var at the top
	lines.unshift(`${envVar}="${value}"`)

	// Write updated content
	await fs.writeFile(envFilePath, lines.join('\n'))
}

export default updateEnvFile
