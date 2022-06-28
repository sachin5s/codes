import bcrypt from "bcryptjs"
import userSchema from "../model/userModel.js"


const getAllUsers = async findTenant => {
  try {
    const User = await findTenant.model("User" ,userSchema);
    const users = await User.find({});
    console.log("getAllUsers users", users);
    return users;
  } catch (error) {
    console.log("getAllUsers error", error);
    throw error;
  }
};

const createUser = async(tenantDbConnection, body) => {

  console.log(tenantDbConnection)
    if(tenantDbConnection === "undefined"){
      throw new Error("Company Detail Not right")
    }
  try {
    const User = await tenantDbConnection.model("User",userSchema);
    const phoneNumber = body.phoneNumber;
    const password = body.password;
    const email = body.email;
    const name = body.name;
    const company = body.company;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userPresent = await User.findOne({
      email
    });
    if (userPresent) {
      throw new Error("User Already Present");
    }
    const newUser = await new User({
      phoneNumber: phoneNumber,
      password: hashedPassword,
      email,
      name,
      company
    }).save();
    return newUser;
  } catch (error) {
    console.log("createUser error", error);
    throw error;
  }
};

export { getAllUsers, createUser };


// we check this user is present or not if this user is present their then..authenticate..