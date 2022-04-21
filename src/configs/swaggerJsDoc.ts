import swaggerJsDoc from 'swagger-jsdoc';
const port = process.env.PORT || 8080;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backtick shop API',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./dist/controllers/*.js', './dist/models/*.js', './dist/utils/*.js'],
};

const specs = swaggerJsDoc(options);

export { specs };
