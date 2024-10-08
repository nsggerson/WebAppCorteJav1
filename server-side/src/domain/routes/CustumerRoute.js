/**
 * @filename CustomerRoute.js 
 * @class CustomerRoute
 * @namespace 'src/routes/customers' 
 * @description **Rotas para gerenciamento de clientes.**
 * Este arquivo define rotas para interagir com a API de clientes. 
 * Ele utiliza o `CustomerController` para lidar com as solicitações 
 * e o `CustomerValidator` para validar os dados de entrada do cliente.
 * 
 * @author [GERSON ALVES DA SILVA]
 * @since [27/06/2024]
 */
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/CustomerController');
const validator = require('../../shared/validators/CustomerValidator');
const autheService = require('../services/AuthServices');

router.get('/see',controller.get);

router.post('/', 
    validator.customerValidationRules(), 
    controller.post);

router.put('/:id',
    autheService.authorize,
    validator.customerValidationRules(),
    controller.put);


router.delete('/');

module.exports = router;