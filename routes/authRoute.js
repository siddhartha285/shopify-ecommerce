import express from 'express'
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js'
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';

//router object
const router=express.Router()

//routing
//Register ||method post
router.post('/register',registerController);


//LOGIN ||POST
router.post('/login',loginController);

//Forgot password||Post

router.post('/forgot-password',forgotPasswordController)

//test routes
router.get('/test',requireSignIn,isAdmin,testController)


//protected user route auth
router.get("/user-auth",requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
});


//protected admin route
router.get("/admin-auth",requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
});

//update profile

router.put('/profile',requireSignIn,updateProfileController);
 //orders
router.get('/orders',requireSignIn,getOrdersController);

router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController);

router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController);



export default router;