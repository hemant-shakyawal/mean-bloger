const express = require("express");
const app = express();

// Middleware
app.use(express.json());



// Default Route
app.get("/", (req, res) => {
    res.send("Server Connected Successfully");
});


const PORT = process.env.PORT || 3000;


// Start Server
const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Server Failed to Start:", error);
    }
};


startServer()