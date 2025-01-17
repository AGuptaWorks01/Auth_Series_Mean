require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const roleRoute = require('./routes/role')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const bookRoute = require('./routes/book.js')
const { seedBooksData } = require('./seed.js')

const app = express()
const port = 3000

app.use(cors({
	origin: "http://localhost:4200",
	credentials: true
}))

app.use(cookieParser())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/role', roleRoute)
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/book', bookRoute)

// Response handler Middleware
app.use((obj, req, res, next) => {
	const statusCode = obj.status || 500;
	const message = obj.message || "Something went wrong!"
	return res.status(statusCode).json({
		success: [200, 201, 204].some(a => a === obj.status) ? true : false,
		status: statusCode,
		message: message,
		data: obj.data
	})
})

// DB Connection
const ConnectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL)
		if (process.argv.includes("--seed")) {
			await seedBooksData()
		}
		console.log("Connected to Database");
	} catch (error) {
		console.log(error);
	}
}


app.listen(port, () => {
	ConnectMongoDB()
	console.log(`Server Running on http://localhost:${port}`)
})