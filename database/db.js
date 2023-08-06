import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    // const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-hphkfqv-shard-00-00.bmuzxat.mongodb.net:27017,ac-hphkfqv-shard-00-01.bmuzxat.mongodb.net:27017,ac-hphkfqv-shard-00-02.bmuzxat.mongodb.net:27017/?ssl=true&replicaSet=atlas-ifygh4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.3if0u4o.mongodb.net/?retryWrites=true&w=majority`;
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.33ly5od.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('\nDatabase connected Successfully\n');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;