import path from 'path'
import fs from 'fs-extra'

async function updateEnvFile(envVars: Record<string, string>) {
	const envFilePath = path.join(process.cwd(), '.env')

	let lines: string[] = []

	// Load existing content if the file exists
	const exists = await fs.pathExists(envFilePath)
	if (exists) {
		const content = await fs.readFile(envFilePath, 'utf-8')
		lines = content.split('\n')
	}

	// Create a map of existing env variables
	const envMap = new Map<string, string>()
	for (const line of lines) {
		const match = line.match(/^([^=]+)=(.*)$/)
		if (match) {
			envMap.set(match[1], match[2])
		}
	}

	// Update or add new values
	for (const [key, value] of Object.entries(envVars)) {
		envMap.set(key, `"${value}"`)
	}

	// Reconstruct the .env file content
	const updatedLines = Array.from(envMap.entries()).map(([k, v]) => `${k}=${v}`)

	await fs.writeFile(envFilePath, updatedLines.join('\n'))
}

export default updateEnvFile
