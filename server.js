require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUiDist = require('swagger-ui-dist');
const connectDB = require('./config/db');
const createSwaggerSpec = require('./config/swagger');

// Initialize Express
const app = express();
app.set('trust proxy', 1);

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://vercel.live"],
      scriptSrcElem: ["'self'", "'unsafe-inline'", "https://vercel.live"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "https://validator.swagger.io", "https://fastly.jsdelivr.net"],
      connectSrc: ["'self'", "https://vercel.live"],
      frameSrc: ["'self'", "https://vercel.live"],
    },
  },
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger Documentation
const swaggerAssetPath = swaggerUiDist.getAbsoluteFSPath();
const renderSwaggerPage = (req) => {
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  const host = req.get('x-forwarded-host') || req.get('host');
  const specUrl = `${protocol}://${host}/api-docs.json`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trep Backend API Docs</title>
  <link rel="stylesheet" href="/swagger-assets/swagger-ui.css">
  <style>
    html {
      box-sizing: border-box;
      overflow-y: scroll;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      background: #f8fafc;
    }

    .swagger-ui .topbar {
      background: linear-gradient(90deg, #0f172a, #1e293b);
      padding: 10px 0;
    }

    .swagger-ui .topbar a span,
    .swagger-ui .topbar .download-url-wrapper label {
      color: #f8fafc;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .swagger-ui .information-container {
      padding-bottom: 12px;
    }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="/swagger-assets/swagger-ui-bundle.js"></script>
  <script src="/swagger-assets/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function () {
      window.ui = SwaggerUIBundle({
        url: '${specUrl}',
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: 'StandaloneLayout'
      });
    };
  </script>
</body>
</html>`;
};

app.use('/swagger-assets', express.static(swaggerAssetPath));
app.get('/api-docs', (req, res) => {
  res.type('html').send(renderSwaggerPage(req));
});
app.get('/api-docs/', (req, res) => {
  res.type('html').send(renderSwaggerPage(req));
});
app.get('/api-docs.json', (req, res) => {
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  const host = req.get('x-forwarded-host') || req.get('host');

  res.json(createSwaggerSpec(`${protocol}://${host}`));
});

app.get('/', (req, res) => {
  res.redirect(302, '/api-docs');
});

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

// Routes
app.use('/api/contact-us', require('./routes/contactUsRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/travel-tourism', require('./routes/travelTourismRoutes'));
app.use('/api/business-services', require('./routes/businessServiceRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/medical-tourism', require('./routes/medicalTourismRoutes'));
app.use('/api/shipping-services', require('./routes/shippingServiceRoutes'));
app.use('/api/transportation-services', require('./routes/transportationServiceRoutes'));
app.use('/api/programs/hajj-umrah', require('./routes/hajjUmrahRoutes'));
app.use('/api/programs/explore-kingdom', require('./routes/exploreKingdomRoutes'));
app.use('/api/programs/explore-usa', require('./routes/exploreUSARoutes'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger documentation available at http://localhost:${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

startServer();
