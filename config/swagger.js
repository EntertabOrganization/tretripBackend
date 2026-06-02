const swaggerJsdoc = require('swagger-jsdoc');

const createSwaggerSpec = (serverUrl) =>
  swaggerJsdoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Trep Backend API',
        version: '1.0.0',
        description: 'Backend API for Entertainment and Travel Services',
        contact: {
          name: 'API Support',
          email: 'support@trep.com',
        },
      },
      servers: [
        {
          url: serverUrl || `http://localhost:${process.env.PORT || 5000}`,
          description: serverUrl ? 'Current Server' : 'Development Server',
        },
      ],
      components: {
        schemas: {
          Error: {
            type: 'object',
            properties: {
              success: {
                type: 'boolean',
                example: false,
              },
              message: {
                type: 'string',
                example: 'Error message',
              },
            },
          },
        },
      },
    },
    apis: ['./routes/*.js'],
  });

module.exports = createSwaggerSpec;
