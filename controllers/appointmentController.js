const Appointment = require('../models/appointment');
const { ObjectId } = require('mongoose').Types;

// GET ALL Appointment
const getALlAppointment = async (req, res) => {
  const limitItem=req.query.limit;
  const filter = req.query.filter;
  let appointments;
  if(limitItem) {
     appointments = await Appointment.find().sort({ createdAt: -1 }).limit(parseInt(limitItem))
  } else if(filter) {
    appointments = await Appointment.find({ date: { $in: [filter] } }).sort({ createdAt: -1 })
  }
  
  else {
     appointments = await Appointment.find().sort({ createdAt: -1 })
  }

 
  res.status(200).json({
    status: 'success',
    results: appointments.length,
    data: {
      appointments,
    },
  });
}

// GET A SINGLE Appointment
const getSingAppointment = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid id'
    });
  } else {
  const appointment = await Appointment.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      appointment,
    },
  });
}
}

// CREATE A Appointment ITEM
const createAppointment = async (req, res) => {
  console.log(req.body);
  
  try {
    const appointment = await Appointment.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        appointment,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }

}

// UPDATE A Appointment ITEM
const updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  res.status(201).json({
    status: 'success',
    data: {
      appointment,
    },
  });
}

// DELETE A Appointment ITEM
const deleteAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      massage: 'Delete Successfully',
    },
  });
}

module.exports = {
  getALlAppointment,
  getSingAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment
}