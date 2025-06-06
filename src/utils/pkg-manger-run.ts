import { execa } from 'execa'

async function pkgMangerRun(
	sp: {
		start: (msg?: string) => void
		stop: (msg?: string, code?: number) => void
		message: (msg?: string) => void
	},
	pkg_manger: symbol | 'bun' | 'yarn' | 'pnpm' | 'npm',
	dbConfig: {
		packages: string[]
	}
) {
	// Create args based on package manager
	const installArgs =
		pkg_manger.toString() === 'bun'
			? ['add', ...dbConfig.packages]
			: pkg_manger.toString() === 'yarn'
			? ['add', ...dbConfig.packages]
			: ['install', ...dbConfig.packages]

	await execa(pkg_manger.toString(), installArgs, {
		stdio: 'ignore', // Show progress
	})
}

export default pkgMangerRun
