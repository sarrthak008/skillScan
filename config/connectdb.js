import mongoose from "mongoose"

const connecToDB = async () => {
    try {

        if (mongoose.connection.readyState == 1) {
            return
        } else {
            await mongoose.connect(process.env.MONGO_URI)
            console.log("connected to the database")
            return 1;
        }

    } catch (error) {
        
        console.log(`some error while connecting to the database ${error}`)
        process.exit(1)
    }
}

export default connecToDB;