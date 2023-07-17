const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // connection variable
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // some options to avoid any warning in the console
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // not supported anymore
      // useFindAndModify: false
    })

    // After we connect
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    // exit with failure so we put one here
    process.exit(1)
  }
}

module.exports = connectDB