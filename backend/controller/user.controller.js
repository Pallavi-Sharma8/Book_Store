import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async(req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPass = await bcryptjs.hash(password, 10)
    const createdUser = new User({
      name:name,
      email:email,
      password: hashedPass,
    });
    await createdUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: createdUser });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const login = async(req,res) => {
  try {
const {email, password} = req.body;
const user = await User.findOne({ email });
const ifExists = await bcryptjs.compare(password, user.password);
if(!user || !ifExists) {
  return res.status(400).json({ message: "Invalid username or password" });
}
else {
            res.status(200).json({
                message: "Login successful", user:{
                  _id :user._id,
                  name: user.name,
                  email: user.email
                }
              
            });
        }
    
  } catch (error) {
     console.log("Error: ", error);
    res.status(500).json(error);
  }
}