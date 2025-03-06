const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/predict", (req, res) => {
    const percentile = parseFloat(req.query.percentile);
    let result = "Your percentile is too low. Consider private colleges.";
    if (percentile >= 90) result = "You can get top government colleges!";
    else if (percentile >= 75) result = "Good chances in semi-government colleges.";
    res.json({ result });
});

app.listen(3000, () => console.log("Server running on port 3000"));
