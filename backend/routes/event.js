const Router = require("express");
const router = Router();
 const { createEvent, deleteEvent,updateEvent,getAllEvent ,getEventByEventId} = require("..//controllers/event");
const { verifyJWT } = require("../middleware/verify");

router.delete("/event/:id", verifyJWT, deleteEvent);
router.post("/createEvent",verifyJWT , createEvent);
router.put("/updateEvent/:id",verifyJWT , updateEvent);
router.get('/events', getAllEvent);
router.get('/eventsByevntId/:eventId', verifyJWT , getEventByEventId);


module.exports = router;