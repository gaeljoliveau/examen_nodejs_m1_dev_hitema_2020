const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        // To be implemented!
        try {
            const fileContent= fs.readFileSync(filePath).toString();
            console.log(fileContent);

            const decodedFileContent = Buffer.from(fileContent, "hex").toString("utf8");
            
            resolve(decodedFileContent);

        } catch (error) {
            reject('Il y a eu une erreur : ', error);
        }
        
        //pour la blague, faire passer le test facilement : 
        //resolve('Si vous arrivez à lire ceci, c\'est que l\'exercice est réussi !')
    });
}
