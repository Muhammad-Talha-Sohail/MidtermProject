const express=require('express');
const app = express();
const jwt = require('../middleware/jwtMiddleware');
const router = express.Router();
//Router.use(jwt);

//User level Routes
const userControl= require('../controller/userController');
const petControl =require('../controller/petController')
router.get('/', userControl.getAllUser);
router.post('/signup',userControl.signUp);
router.put('/update',userControl.updateUser)
router.delete('/delete',userControl.deleteUser);


//Pet level Routes
router.get('/petList',petControl.getList);
router.get('/bookPetList',petControl.bookPetList);
router.post('/AddNewPet',petControl.addNewPet);





module.exports = router;

