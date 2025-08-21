interface ISwaggerOptions {
    host: string,
    port: string | number
}

export const swaggerOptions = ({ host, port }: ISwaggerOptions) => {
    return {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'VideoSync-Nodejs🚀',
                version: '1.0.0',
                description: 'Documentación generada con Swagger',
            },
            servers: [
                {
                    url: `http://${host}:${port}`,
                },
            ],
        },
        apis: ['./src/routes/*.ts'],
    }
};