const Event = require("../models/event");

const createEvent = async (req, res) => {
  const { sportname, orgname, location, description ,prize,date ,time } = req.body;
  try {
    console.log("iam in try",sportname, orgname, location, description ,prize,date ,time);
    if (!sportname || !orgname || !location || !description) {
      return res.json("All fields are required");
    }

    const newEvent = new Event({
      sportname: sportname,
      date:date,
      time,time,
      orgname: orgname,
      location: location,
      description: description,
      prize : prize
    });

    // Save the event and handle errors
    await newEvent.save()
    res.json({msg : "event created sucessfully", newEvent})
  } catch (err) {
    console.error(err);
    return res.status(400).json({ msg: "Invalid data" });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndRemove(req.params.id);
    if (!event)
      return res.status(404).json({ msg: "No event with this id!", event });
    res.json(event);
  } catch (err) {
    console.log(err);
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { sportname, orgname, location, description } = req.body;
  try {
    // Check for existing user
    let event = await Event.findById(id);
    if (!event) {
      return res.status.failure("Event does not exist");
    }
    // Field to be updated
    let updField = {};
    if (sportname) {
      updField.sportname = sportname;
    }

    if (orgname) {
      updField.orgname = orgname;
    } else
      return res
        .status(400)
        .json({ msg: "Please provide an organization name." });
    if (location) updField.location;
    else
      return res.status(400).json({ msg: "Please provide a valid location." });
    if (description) updField.description;
    else
      return res
        .status(400)
        .json({ msg: "Please provide a valid description." });
    // Update the user
    event = await Event.findByIdAndUpdate(id, updField, { new: true }).catch(
      (e) => console.log(e)
    );
    res.json(event);
  } catch (error) {
    console.error(err);
    return res.status(400).json({ msg: "Catch error " });
  }
};
const getAllEvent = async (req, res) => {
  try {
    const allevent = await Event.find();
    if(allevent.length === 0){
      return res.status(200).json({msg:"No events found"});
    }else{
    res.send(allevent);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).
    json({ message: "Server Error!" });
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  updateEvent,
  getAllEvent
};