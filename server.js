require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/db');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(express.json());
app.use('/api', userRoutes);
app.use(errorMiddleware);

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});