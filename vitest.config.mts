import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
		coverage: {
			provider: 'v8', // Utiliza c8 como proveedor de cobertura
			reportsDirectory: './coverage', // Carpeta donde se guardarán los reportes
			reporter: ['text', 'html', 'lcov'], // Reportes en texto, HTML y lcov para herramientas como SonarQube
			include: ['src/**/*.{ts,js}'], // Archivos a incluir en el análisis de cobertura
			exclude: ['test/**', 'src/**/*.d.ts'], // Excluye pruebas y definiciones de tipo
		},
	},
});
