module.exports = function (req, res, next) {
  if (req.headers["user-agent"] === "PostmanRuntime/7.30.0") {
    next();
    return;
  } else {
    res.status(500).json({
      code: 500,
      payload: null,
      message: "Unknown platform.",
    });
  }
};
