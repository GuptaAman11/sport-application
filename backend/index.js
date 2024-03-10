const express = require('express')
const app = express()
const { Connection } = require('./db')
const userRoutes = require('./routes/user')
const detailsRoute = require('./routes/personalDetails')
const eventRoute = require('./routes/event')

const cors = require('cors')




app.listen(8000, () => {
    console.log("server started")
})
app.use(express.json())
app.use(cors())

Connection()


app.use('/api/v1/users', userRoutes);
app.use('/api/v1/details', detailsRoute);
app.use('/api/v1/event', eventRoute);



