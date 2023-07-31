// requiring express
const express=require('express');

// defining the router
const router=express.Router();

// connecting the router
const homeController=require('../controllers/controller');

router.get('/',homeController.home);

router.post('/createTodoList',homeController.createTodoList);

router.get('/delete-task',homeController.delete);

module.exports=router;