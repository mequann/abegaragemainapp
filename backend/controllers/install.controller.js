//import the installservice to handle communication with the database
const installService = require('../services/install.service');
//create a function to handdle the install request
async function handleInstall(req, res,next) {
    try {
        //call the install service  to create the database table
        const installMessage = await installService.createDatabaseTable();

        //check if the installation was succesfull or not and send the  appropriate message to the client
        if (installMessage.status===200) {
            //if sucessfull send , reponse to the client
            res.status(200).json({
                message:installMessage
            });
           
         
        } 
        else {
            //if unsuccesfull send, reponse to the client
            res.status(500).json({
                message:installMessage
            });
        }

      
    } catch (error) {
        //send the error
        res.send(error);
    }
}
//export insatallhandle function
module.exports = {
    handleInstall
}