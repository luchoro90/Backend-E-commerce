import __dirname from "../../dirname.js"

const swaggerOptions = {
    definition: {
      openapi: '3.0.1',
      info: {
        title: 'Documentación de la API del Ecommerce',
        description: 'Backend Coderhouse'
      }
    },
    apis: [`${ __dirname}/src/docs/*.yaml`]
  };
  export default swaggerOptions