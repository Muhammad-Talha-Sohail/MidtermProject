const express = require('express');
const app = express()
const userModel = require('../model/userSchema');

const jwtAuth = require('../middleware/jwtMiddleware');
const bcrypt = require('bcrypt-inzi')


const userControl = {

    async getAllUser(req, res) {
        try {
            const user = await userModel.find();
            return res.status(200).json(user);

        }


        catch (error) {
            return res.status(401).send(error);
        }



    },

    async signUp(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json("All field are required");
            }
            const exist = await user.findOne({ email });
            if (exist) {
                return res.status(400).json("Already Exist");
            }
            const hashPasword = await bcrypt.stringToHash(password, 10)
            const user = new userModel({
                email, passsword: hashPasword

            })
            await user.save();
            const token = await jwtAuth.signToken(req.body);
            return res.status(400).json(user, token);
        }
        catch (error) {
            console.log("error in signup :" + error);
        }


    },
    async login(req, res) {
        try {

            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json("All field are required");
            }
            const user = await userSchema.findOne(email);
            const token = await jwtAuth.verifyToken(req.body);




            if (user) {
                return res.status(200).json(user);
            }

        } catch (error) {
            console.log("error in log in :" + error);
        }

    },
    async deleteUser(req, res) {
        try {
            const id = req.params.userId;
            const remove = await userModel.findByIdAndDelete(id);

            if (!remove) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error', error });
        }

    },
  async  updateUser(req,res)
{
    try {
        const userId = req.params.userId;
        const updates = req.body; // Assuming the updates are sent in the request body
    
        const updatedUser = await userModel.findByIdAndUpdate(userId, updates, { new: true });
    
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        return res.status(200).json(updatedUser);
      } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error });
      }
}

}


module.exports = userControl;