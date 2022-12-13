const express = require('express')

const routes =  express.Router()

const imageController = require('../controller/image.controller')

routes.post("/images/:image",imageController.upload,imageController.uploadFile)
routes.get("/images/:image",imageController.getDatos)

module.exports=routes