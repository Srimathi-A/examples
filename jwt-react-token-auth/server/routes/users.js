const route = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

route.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(400).send({ message: "User with given email id already exist!" })

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashpassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashpassword }).save();

        res.status(201).send({ message: "User create successfully" });
    }
    catch (error) {
        res.status(500).send({ menubar: "Internal Server Error" });
    }
});
module.exports = route;