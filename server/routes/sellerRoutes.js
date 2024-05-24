import express from 'express';
const router = express.Router();
import checkUserAuth from '../middlewares/auth-middleware.js';
import sellerController from '../controllers/sellerController.js';
// import buyerController from '../controllers/buyerController.js';
import checkUpdateAuth from '../middlewares/auth-updateUser.js';

 
// router.get('/getAll-employee',checkUserAuth,sellerController.get)  //to fetch seller details
router.get('/seller-tolets',checkUserAuth,checkUpdateAuth,sellerController.ownerTolets)
router.post('/add-tolet',checkUserAuth,checkUpdateAuth,sellerController.addTolet)
router.delete('/delete-tolet/:id',checkUserAuth,checkUpdateAuth,sellerController.deleteTolet)   
// router.post('/seller-tolets/:id',checkUserAuth,checkUpdateAuth,sellerController.ownerTolets)
// router.post('/add-tolet',checkUserAuth,checkUpdateAuth,sellerController.addTolet)
// router.delete('/delete-tolet',checkUserAuth,checkUpdateAuth,sellerController.deleteTolet)   
// router.put('/update-tolet/:id',checkUserAuth,checkUpdateAuth,sellerController.updateTolet)

export default router;