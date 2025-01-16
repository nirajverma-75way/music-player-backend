const options = {
    openapi: "OpenAPI 3",
    language: "en-US",
    disableLogs: false,
    autoHeaders: true,
    autoQuery: true,
    autoBody: true,
  };
  
  const fs = require("fs");
  const path = require("path");
  const generateSwagger = require("swagger-autogen")(options);
  
  const swaggerDocument = {
    info: {
      version: "1.0.0",
      title: "Social Media Backend",
      description: "Basic Structure for Social Media Backend Project",
      contact: {
        name: "Niraj Kumar Verma",
        email: "nirajverma.75way@gmail.com",
      },
    },
    host: "localhost:5000",
    basePath: "/api/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        { name: "User", description: "User-related APIs" },
        { name: "Post", description: "Post-related APIs" },
        { name: "Like", description: "Like-related APIs" },
        { name: "Comment", description: "Comment-related APIs" },
        { name: "Replies", description: "Replies-related APIs" },
        { name: "Follow", description: "Follow-related APIs" },
        { name: "Notification", description: "Notification-related APIs" },
      ],
      securityDefinitions: {
        Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description: "Enter your Bearer Token in the format: Bearer <token>",
        },
      },
  };
  
  const swaggerFile = "./swagger.json";
  
  // Function to recursively find all route files
  function getRouteFiles(dir: string) {
    const files = fs.readdirSync(dir);
    let routeFiles: string[] = [];
  
    files.forEach((file: string) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        // Recursively scan subdirectories
        routeFiles = routeFiles.concat(getRouteFiles(fullPath));
      } else if (file.endsWith(".routes.ts")) {
        // Add only `.routes.ts` files
        routeFiles.push(fullPath);
      }
    });
  
    return routeFiles;
  }
  
  // Specify the root folder containing route files
  const routesRoot = path.join(__dirname, "..", "api");
  const apiRouteFiles = getRouteFiles(routesRoot);
  
  generateSwagger(swaggerFile, apiRouteFiles, swaggerDocument).then(() => {
    console.log("Swagger documentation has been generated.");
  });
  