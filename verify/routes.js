// routes.js
const express = require('express');
const tenantController = require('./controllers/tenantController');
const guardController = require('./controllers/guardController');
const visitorController = require('./controllers/visitorController');

const router = express.Router();

// Tenant routes
router.post('/tenant/register', tenantController.register);
router.post('/tenant/book-visitor', tenantController.bookVisitor);
router.post('/tenant/cancel-visitor', tenantController.cancelVisitor);

// Security guard routes
router.get('/guard/tenants', guardController.getAllTenants);
router.post('/guard/confirm-visitor', guardController.confirmVisitor);

// Export routes
module.exports = router;

