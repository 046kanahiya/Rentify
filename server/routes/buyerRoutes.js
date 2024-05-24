import express from 'express';
const router = express.Router();
import checkUserAuth from '../middlewares/auth-middleware.js';
import buyerController from '../controllers/buyerController.js';

      
//addEmployee and Update Employee routes
 
router.get('/getAll-tolet',checkUserAuth,buyerController.getAllTolets)
router.post('/search-tolet',checkUserAuth,buyerController.searchTolets)
router.post('/mail-to-seller',checkUserAuth,buyerController.sendDetailsToSeller)
// router.get('/getAll-tolet',checkUserAuth,buyerController.getAllTolets)
// router.post('/search-tolet',checkUserAuth,buyerController.searchTolets)
// router.post('/mail-to-seller',checkUserAuth,buyerController.sendDetailsToSeller)

export default router;