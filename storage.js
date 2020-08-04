const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const path = require('path');
const uuidv4 = require('uuid/v4');

const storage = (req, progress, data, fileBegin, error, aborted, end, fileName = '') => {
    var form = new IncomingForm();
    let readStream;
    form
    .on('progress', progress)
    .on('field', data)
    .on('fileBegin', (name, file) => {
      console.log('Archivo Recibido');
        var _name = uuidv4(); ;
        var length_name = file.name.split("\.").length-1;
        var nombre_2 = file.name.split("\.")[length_name];
        file.path = path.join(__dirname, `../tmp/${_name}.${nombre_2}`);
        file.name = `${_name}.${nombre_2}`;
        fileBegin(name, file);
    })
    .on('file', (field, file) => {
      readStream = fs.createReadStream(file.path);
    })
    .on('error', error)
    .on('aborted', aborted)
    .on('end', end)
    .parse(req);
};

const recoveryFile = (fileName, exist, noExist ) => {
    fs.exists(`${path.join(__dirname, '../tmp')}/${fileName}`, (valor) => {
        if(valor){ 
            return exist();
        }else{
            return noExist();
        } 
    });
};

const removeFile = (fileName, error, success, noExist) => {
    fs.exists(`${path.join(__dirname, '../tmp')}/${fileName}`, (valor) => {
        if(valor){
            fs.unlink(`${path.join(__dirname, '../tmp')}/${fileName}`, err => {
                if (err) {
                    error();
                    return;
                }
                success();
            });
        }else{
            noExist();
        } 
    });
    
}

module.exports = () => {
    return ({
        storage,
        recoveryFile,
        removeFile
    });
  };