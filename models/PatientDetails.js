const mongoose = require('mongoose');

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    critical: {
      type: Boolean,
      // required: true,
    },
    history: [
      {
        bloodPressure: {
          type: String,
        },
        repiratoryRate: {
          type: String,
        },
        bloodOxygen: {
          type: String,
        },
        heartRate: {
          type: String,
        },
        created: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

const patients = (module.exports = mongoose.model('patients', patientSchema));

module.exports.createPatient = (data, callback) => {
  patients.create(data, callback);
};
module.exports.getPatientSpecific = (_id, callback) => {
  const query = {
    _id: _id,
  };
  patients.find(query, callback);
};
module.exports.getPatientAll = (callback) => {
  patients.find({}).limit(1000).select({ history: 0 }).exec(callback);
};

module.exports.updatePatient = (data, callback) => {
  patients.find({}).limit(1000).exec(callback);

  const query = data._id;
  patients.updateOne(
    { _id: { $in: query } },
    { $push: { history: data.details } },
    callback
  );
};
