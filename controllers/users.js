const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const { firstName, lastName, gender, sort, select } = req.query;
  console.log("🚀 ~ file: users.js ~ line 5 ~ getAllUsers ~ sort", sort);
  const queryObject = {};

  if (firstName) {
    queryObject.firstName = firstName;
  }

  if (lastName) {
    queryObject.lastName = lastName;
  }

  if (gender) {
    queryObject.gender = gender;
  }

  if (firstName) {
    queryObject.firstName = { $regex: firstName, $options: "i" };
  }

  let apiData = User.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  // (select = name company;
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  // page = 2;
  // limit = 3;
  // skip =  1 * 3 = 3

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const Users = await apiData;
  res.status(200).json({ Users, nbHits: Users.length });
};

const getAllUsersTesting = async (req, res) => {
  console.log(req.query);
  const myData = await User.find(req.query).skip(2);
  // sort = name,price;

  res.status(200).json({ myData, nbHits: myData.length });
};

module.exports = { getAllUsers, getAllUsersTesting };