const Prospect = require("../models/prospect.model");
const response = require("../utils/response");

// UPDATE controller - one lead
const updateLeadController = async (req, res) => {
  const id = req.params.id;
  try {
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
      isLead,
      isActive,
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
      !isLead ||
      !isActive
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
      status &&
      isLead &&
      isActive
    ) {
      // check for existing data
      const prospectExists = await Prospect.findOne({
        $or: [{ email }, { contactNo }],
      });

      // if data does not exist
      if (!prospectExists) {
        return response(res, 404, false, "Data does not exist", null);
      }

      // if no data already exists
      if (prospectExists) {
        const updatedLead = await Prospect.updateOne(
          { _id: id },
          {
            isLead,
            isActive,
          }
        );

        // if updation successful
        if (!updatedLead) {
          return response(res, 501, true, "Unable to update data", newLead);
        }

        // if updation successful
        if (updatedLead) {
          const updatedRecord = await Lead.findById(id);
          return response(
            res,
            205,
            false,
            "Data updated successfully",
            updatedRecord
          );
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// GET controller - all leads
const fetchAllLeadsController = async (req, res) => {
  try {
    const allProspects = await Prospect.find();

    // if prospects found
    if (allProspects) {
      return response(res, 200, true, "All prospects fetched", allProspects);
    }

    // if prospects not found
    if (!allProspects) {
      return response(res, 404, false, "No prospects found", null);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateLeadController, fetchAllLeadsController };
