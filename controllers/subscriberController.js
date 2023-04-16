const AppError = require("../utils/appError");

const subscriberModel = require("../models/subscribers");

exports.getAllSubscriber = async (req, res, next) => {
  try {
    let query;

    if (req.url.includes("name")) {
      query = subscriberModel.find({}).select({
        name: 1,
        subscribedChannel: 1,
        _id: 0,
      });
    } else {
      query = subscriberModel.find();
    }
    const subscribers = await query;

    res.status(200).json({
      status: "success",
      data: subscribers,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSubscriber = async (req, res, next) => {
  try {
    const subscribers = await subscriberModel.findById(req.params.id);

    if (!subscribers) {
      return next(new AppError("Subscriber not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: subscribers,
    });
  } catch (error) {
    next(error);
  }
};
