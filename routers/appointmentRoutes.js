const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const router = express.Router();

router
    .route('/')
    .get(appointmentController.getALlAppointment)
    .post(appointmentController.createAppointment);

router
    .route('/:id')
    .get(appointmentController.getSingAppointment)
    .put(appointmentController.updateAppointment)
    .delete(appointmentController.deleteAppointment);

module.exports = router;
