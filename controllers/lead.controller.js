const Lead = require("../models/lead.model");
const response = require("../utils/response");

const leadController = async (req, res) => {
  const {
    name,
    age,
    email,
    contactNo,
    houseNo,
    streetNo,
    city,
    state,
    pincode,
    status,
  } = req.body;

  // if all the details are not provided
  if (
    !name ||
    !age ||
    !email ||
    !contactNo ||
    !houseNo ||
    !streetNo ||
    !city ||
    !state ||
    !pincode ||
    !status
  ) {
    return response(res, 400, false, "Please provide all the details", null);
  }

  // if all the data is provided
  if (
    name &&
    age &&
    email &&
    contactNo &&
    houseNo &&
    streetNo &&
    city &&
    state &&
    pincode &&
    status
  ) {
    // check for existing data
    const prospectExists = await Lead.findOne({
      $or: [{ email }, { contactNo }],
    });

    // if data already exists
    if (prospectExists) {
      return response(res, 409, false, "Data already exists", null);
    }

    // if no data already exists
    if (!prospectExists) {
      const newProspect = Lead({
        name,
        age,
        email,
        contactNo,
        houseNo,
        streetNo,
        city,
        state,
        pincode,
        status,
      });

      await newProspect.save();

      return response(res, 201, true, "Data saved successfully", newProspect);
    }
  }
};

module.exports = leadController;
