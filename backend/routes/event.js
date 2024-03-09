const Router = require("express");
const router = Router();
 const { createEvent, deleteEvent,updateEvent,getAllEvent } = require("..//controllers/event");

router.delete("/event/:id", deleteEvent);
router.post("/createEvent", createEvent);
router.put("/updateEvent/:id",updateEvent);
router.get('/events', getAllEvent);
module.exports = router;