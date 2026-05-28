# Trep Backend API

A comprehensive Express.js backend API for Entertainment and Travel Services with MongoDB database integration, Swagger documentation, and full CRUD operations.

## Features

- ✅ Express.js framework
- ✅ MongoDB integration with Mongoose
- ✅ Swagger/OpenAPI documentation
- ✅ CORS and Helmet security middleware
- ✅ Full CRUD operations for all services
- ✅ Structured MVC architecture
- ✅ Environment configuration with .env

## Services Included

### Core Services
1. **Contact Us** - Customer inquiry management
2. **Clients** - Client database management
3. **Travel Tourism** - Flight, hotel, and car rental bookings
4. **Business Services** - Corporate travel and business solutions
5. **Events** - Event management and planning
6. **Medical Tourism** - Medical travel arrangements
7. **Shipping Services** - International and domestic shipping
8. **Transportation Services** - Ground transportation booking

### Programs
1. **Hajj & Umrah** - Pilgrimage program bookings
2. **Explore the Kingdom** - Saudi Arabia travel packages
3. **Explore the USA** - USA travel packages

## Installation

1. **Clone the repository or navigate to the project directory**
```bash
cd d:\Entertab\tretripBackend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file in the root directory:
```
MONGO_URI=mongodb://localhost:27017/trep-backend
PORT=5000
NODE_ENV=development
```

4. **Ensure MongoDB is running**
Make sure MongoDB is installed and running on your system.

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Documentation

### Swagger UI
Visit `http://localhost:5000` to access the interactive Swagger documentation.

### Base URL
```
http://localhost:5000/api
```

## API Endpoints

### Contact Us
- `POST /api/contact-us` - Create contact message
- `GET /api/contact-us` - Get all messages
- `GET /api/contact-us/:id` - Get specific message
- `PUT /api/contact-us/:id` - Update message
- `DELETE /api/contact-us/:id` - Delete message

### Clients
- `POST /api/clients` - Create client
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get specific client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Travel Tourism
- `POST /api/travel-tourism` - Create booking
- `GET /api/travel-tourism` - Get all bookings
- `GET /api/travel-tourism/:id` - Get specific booking
- `PUT /api/travel-tourism/:id` - Update booking
- `DELETE /api/travel-tourism/:id` - Delete booking

### Business Services
- `POST /api/business-services` - Create request
- `GET /api/business-services` - Get all requests
- `GET /api/business-services/:id` - Get specific request
- `PUT /api/business-services/:id` - Update request
- `DELETE /api/business-services/:id` - Delete request

### Events
- `POST /api/events` - Create event
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get specific event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Medical Tourism
- `POST /api/medical-tourism` - Create booking
- `GET /api/medical-tourism` - Get all bookings
- `GET /api/medical-tourism/:id` - Get specific booking
- `PUT /api/medical-tourism/:id` - Update booking
- `DELETE /api/medical-tourism/:id` - Delete booking

### Shipping Services
- `POST /api/shipping-services` - Create request
- `GET /api/shipping-services` - Get all requests
- `GET /api/shipping-services/:id` - Get specific request
- `PUT /api/shipping-services/:id` - Update request
- `DELETE /api/shipping-services/:id` - Delete request

### Transportation Services
- `POST /api/transportation-services` - Create request
- `GET /api/transportation-services` - Get all requests
- `GET /api/transportation-services/:id` - Get specific request
- `PUT /api/transportation-services/:id` - Update request
- `DELETE /api/transportation-services/:id` - Delete request

### Programs
- `POST /api/programs/hajj-umrah` - Create Hajj booking
- `GET /api/programs/hajj-umrah` - Get all Hajj bookings
- `POST /api/programs/explore-kingdom` - Create Kingdom booking
- `GET /api/programs/explore-kingdom` - Get all Kingdom bookings
- `POST /api/programs/explore-usa` - Create USA booking
- `GET /api/programs/explore-usa` - Get all USA bookings

## Project Structure

```
tretripBackend/
├── config/
│   ├── db.js              # MongoDB connection
│   └── swagger.js         # Swagger configuration
├── controllers/           # Business logic
│   ├── contactUsController.js
│   ├── clientController.js
│   ├── travelTourismController.js
│   ├── businessServiceController.js
│   ├── eventController.js
│   ├── medicalTourismController.js
│   ├── shippingServiceController.js
│   ├── transportationServiceController.js
│   ├── hajjUmrahController.js
│   ├── exploreKingdomController.js
│   └── exploreUSAController.js
├── models/                # Data schemas
│   ├── ContactUs.js
│   ├── Client.js
│   ├── TravelTourism.js
│   ├── BusinessService.js
│   ├── Event.js
│   ├── MedicalTourism.js
│   ├── ShippingService.js
│   ├── TransportationService.js
│   ├── HajjUmrah.js
│   ├── ExploreKingdom.js
│   └── ExploreUSA.js
├── routes/                # API routes
│   ├── contactUsRoutes.js
│   ├── clientRoutes.js
│   ├── travelTourismRoutes.js
│   ├── businessServiceRoutes.js
│   ├── eventRoutes.js
│   ├── medicalTourismRoutes.js
│   ├── shippingServiceRoutes.js
│   ├── transportationServiceRoutes.js
│   ├── hajjUmrahRoutes.js
│   ├── exploreKingdomRoutes.js
│   └── exploreUSARoutes.js
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Dependencies
└── server.js             # Main server file
```

## Example API Usage

### Create Contact Message
```bash
curl -X POST http://localhost:5000/api/contact-us \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "emailAddress": "john@example.com",
    "phoneNumber": "1234567890",
    "serviceType": "Medical Tourism",
    "message": "Interested in medical tourism services"
  }'
```

### Get All Clients
```bash
curl http://localhost:5000/api/clients
```

### Create Travel Tourism Booking
```bash
curl -X POST http://localhost:5000/api/travel-tourism \
  -H "Content-Type: application/json" \
  -d '{
    "travelerName": "Jane Smith",
    "tripType": "Round Trip",
    "cabinClass": "Business",
    "leavingFrom": "New York",
    "goingTo": "Paris",
    "airline": "Air France",
    "adult": 2,
    "children": 1
  }'
```

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Documentation**: Swagger/OpenAPI
- **Security**: Helmet, CORS
- **Environment**: dotenv

## Error Handling

All endpoints return consistent error responses:
```json
{
  "success": false,
  "message": "Error description"
}
```

## Success Response Format

All successful endpoints return:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

## Future Enhancements

- User authentication and JWT
- Email notifications
- Payment integration
- Advanced filtering and search
- Rate limiting
- Request validation middleware
- Logging system

## Support

For issues or questions, please contact the development team.

## License

ISC
