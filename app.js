const express = require('express');
const cors = require('cors');
const Clinic = require('./models/Clinics')
const appointmentsRoutes = require('./routers/appointmentRoutes');
const userRoutes = require('./routers/userRoutes');
const app = express();
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/appointments', appointmentsRoutes);


app.get('/api/v1/clinics', async (req, res) => {
    const clinics = await Clinic.find()
    res.status(200).json({
      status: 'success',
      results: clinics.length,
      data: clinics,
      
    });
})
app.get('/', (req, res) => {
    res.send({message:'Welcome red Onion!'})
})





// unHandler routes
app.all('*', (req, res) => {
    res.send({message:'Not found'})
});

module.exports = app;
