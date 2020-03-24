const express = require('express');
const ong_controllers = require('./controllers/ong_controller');
const incidents_controllers = require('./controllers/Incident_Controllers');
const profile_controllers = require('./controllers/profileController');
const sesionController = require('./controllers/sessionsControllers');
const router = express.Router();
//ONG routes
router.get('/ongs', ong_controllers.view);
router.post('/ongs', ong_controllers.create);

//Incidents routes
router.post('/incidents', incidents_controllers.create);
router.get('/incidents', incidents_controllers.view);
router.delete('/incidents/:id', incidents_controllers.delete)

//Profile routes
router.post('/profile', profile_controllers.view);

//Login routes
router.post('/sessions', sesionController.create)
module.exports = router;