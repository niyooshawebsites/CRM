const Prospect = require("../models/prospect.model");
const response = require("../utils/response");

const leadController = async (req, res) => {
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

      // if data already exists
      if (prospectExists) {
        return response(res, 409, false, "Data already exists", null);
      }

      // if no data already exists
      if (!prospectExists) {
        const newLead = await Prospect.updateOne(
          { contactNo },
          {
            isLead,
            isActive,
          }
        );

        // if updation successful
        if (newLead) {
          return response(
            res,
            201,
            true,
            "Data updated successfully",
            newProspect
          );
        }

        // if updation successful
        if (!newLead) {
          return response(
            res,
            205,
            false,
            "Data updated successfully",
            newProspect
          );
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = leadController;
