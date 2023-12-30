// Import the query function from the db.config.js file 
const conn = require('../config/db.config');
// Import the fs module to read our sql file  
const fs = require('fs');
//write a  async fuction to create the database tables
async function createDatabaseTable() {
    //create a variable to hold the  path sql to file 
        const querefiles=__dirname+'/sql/initial-queries.sql'
        // console.log(querefiles)
  //  variTemporaryable, used to store all queries, the return message and the current query
       let queries = [];
        let finalMessage={}
        let templine=''
        //read the sql file
        let lines = await fs.readFileSync(querefiles, 'utf8').split('\n');
  // Create a promise to handle the asynchronous reading of the file and storing of the queries in the variables  
        
        let promise =  await new Promise((resolve, reject) => {
            //itrate over each lines
            lines.forEach((line) => {
                //check if the line is not empty

                if (line.trim().startsWith('--')||line.trim()== '') {
                    //skip if it is comment or empty line
                    return
                }
                templine+=line
                if (line.trim().endsWith(';')) {
                    //if it has semi colon at the end it is the end of the query
                    //prepare the individual query
                    const sqlQuery=templine.trim()

                    //push the query
                    queries.push(sqlQuery);
                    //clear the templine
                    templine=''
                }
            })
            //resolve the promise
            resolve('Queries are add to the llist')
        })
        //Loop through the queries and execute them one by one asynchronously
        for (let i = 0; i < queries.length; i++) {
            //try catch block
            try {
                //execute the query
              const result=  await conn.executeQuery(queries[i]);
                console.log("Table created")
                

            }
            catch (error) {
                console.log(error)
                finalMessage.message= "Not all tables are created"
            }
        }
        //prepare the finalMessage to return to the  controller
        if(!finalMessage.message){
            finalMessage.message='All tables are created'
            finalMessage.status=200

        }
        else
        {
            finalMessage.status=500
        }
        //return the finalMessage
        return finalMessage
                   
         
            
        }
      //export the createDatabase function
      module.exports = {
        createDatabaseTable
      }
    
       



