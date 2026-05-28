require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/db');
const swaggerSpec = require('./config/swagger');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger Documentation
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerSpec));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

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
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}`);
});
