const express = require('express');
const app = express()
const petModel = require('../model/petSchema');

const jwtAuth = require('../middleware/jwtMiddleware');
const bcrypt = require('bcrypt-inzi')




const petControl = {


    async getList(req, res) {

        try {

            const data = await petModel.find();
            if (!data) {
                return res.status(400).json("Data not found");

            }
            return res.status(200).json(petModel);

        }
        catch (error) {
            console.log("error in list :" + error);
        }



    },

    async addNewPet(req, res) {
        try {
            const { id, name, category, age, color, price, book } = req.body;
            if (!id || !name || !category || !age || !color || !price || !book) {
                return res.status(400).json("All field are required");
            }
            const exist = await petModel.findOne({ id });
            if (exist) {
                return res.status(400).json("Already Exist");
            }


            const pet = new petSchema({
                id, name, category, age, color, price
            })
            await pet.save();
            const token = await jwtAuth.sign(req.body);
            return res.status(400).json(pet, token);
        }
        catch (error) {
            console.log("error in Add Pet :" + error);
        }



    },

    async bookPetList(req, res) {
        try {
            const { book } = req.body;
            if (book == true) {
                const user = await petModel.find(book);
            }

            if (!user) {
                return res.status(400).json("No Any Book Pet")
            }


            return re.status(200).json(user);





        }
        catch (error) {
            console.log("Error in Booked Pet list : " + error)
        }

    },




}


module.exports = petControl;

