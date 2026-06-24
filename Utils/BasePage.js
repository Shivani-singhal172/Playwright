const fs = require('fs');
const path = require('path');

class BasePage {

    static getProperty(key) {

        const filePath = path.join(
            __dirname,
            '../resources/config.properties'
        );
        // console.log('File Path:', filePath);
        // console.log('Exists:', fs.existsSync(filePath));
        const data = fs.readFileSync(filePath, 'utf8');

        const lines = data.split('\n');

        for (const line of lines) {

            const [propertyKey, propertyValue] = line.split('=');

            if (propertyKey?.trim() === key) {
                return propertyValue?.trim();
            }
        }

        return null;
    }

   


}
module.exports = BasePage;