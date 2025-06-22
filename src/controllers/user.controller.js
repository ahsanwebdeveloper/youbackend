import { asyncHendler } from "../utils/anyscHandler.js";

const registeruser = asyncHendler(async (req, res) => {
    res.status(200).json({
        message: "Api is working"
    });
});

export { registeruser };
