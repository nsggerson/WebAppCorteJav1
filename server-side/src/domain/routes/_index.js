/**
 * @filename _index.js
 * @class index
 * @namespace 'src/domain/routes'
 * @description Arquivo utilizado para importar as rotas no app
 * @author [GERSON ALVES DA SILVA]
 * @since [27/06/2024]
 */
'use strict';

module.exports = {
    loginRoute: require('./loginRoute'),
    customerRoute: require('./CustumerRoute'),
    venomBotRoute: require('./VenomBotRoute'),
    adminRoute: require('./AdminRoute'),
    tokenRoute: require('./tokenRoute'),
    recordRoute: require('./recordRoute'),
    roleRoute: require('./roleRoute'),
    permissionRoute: require('./permissionRoute'),
    userRoute: require('./userRoute'),
}
