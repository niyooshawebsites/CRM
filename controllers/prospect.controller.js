const Prospect = require("../models/prospect.model");
const response = require("../utils/response");

// POST controller - one prospect
const prospectController = async (req, res) => {
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
    } = req.body;

    console.log(req.body);

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
      !pincode
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
      pincode
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
        const newProspect = Prospect({
          name,
          age,
          email,
          contactNo,
          houseNo,
          streetNo,
          city,
          state,
          pincode,
        });

        await newProspect.save();

        return response(res, 201, true, "Data saved successfully", newProspect);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// GET controller - all prospects
const fetchAllProspectsController = async (req, res) => {
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

// GET controller - one prospect
const fetchProspectController = async (req, res) => {
  try {
    const id = req.params.id;
    const prospect = await Prospect.findOne({ _id: id });

    // if prospect found
    if (prospect) {
      return response(res, 200, true, "Prospect found successfully", prospect);
    }

    // if prospect not found
    if (!prospect) {
      return response(res, 404, false, "No prospect found", null);
    }
  } catch (err) {
    console.log(err);
  }
};

// UPDATE controller - one prospect
const updateProspectController = async (req, res) => {
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
      !pincode
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
      pincode
    ) {
      // check for existing data
      const prospectExists = await Prospect.findOne({
        $or: [{ email }, { contactNo }],
      });

      // if data not found
      if (!prospectExists) {
        return response(res, 404, false, "Data does not exists", null);
      }

      // if no data already exists
      if (prospectExists) {
        const newProspect = Prospect.updateOne(
          {
            name,
            age,
            email,
            contactNo,
            houseNo,
            streetNo,
            city,
            state,
            pincode,
          },
          {
            name,
            age,
            email,
            contactNo,
            houseNo,
            streetNo,
            city,
            state,
            pincode,
          }
        );
        return response(res, 201, true, "Data saved successfully", newProspect);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  prospectController,
  fetchAllProspectsController,
  fetchProspectController,
  updateProspectController,
};
