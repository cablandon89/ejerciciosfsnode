//Imports de los módulos
//fs y path
const fs = require('fs');

const getUsers = async() => {
    const data = await fs.readFileSync('users.json', {encoding: 'utf8'});
    return JSON.parse(data);
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
};

/* const getUsers2 = () => {
    fs.readFile('users.json', {encoding: 'utf8'}, (err, data) => {
        if(!err){
          console.log(JSON.parse(data));
        }
      })
};

getUsers2(); */


const addUser = async (userObj) => {
    //leer el archivo 
    let data = await fs.readFileSync('users.json', {encoding: 'utf8'});
    //convertir el contenido en formato JSON en un objeto JS
    data = JSON.parse(data);
    //agregar el usuario en el arreglo
    data.push(userObj);
    //sobreescribir el arreglo en el archivo
    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    await fs.writeFileSync('users.json', JSON.stringify(data));
    return userObj;
    //que acabas de agregar en el arreglo
};

const clearUsers = async () => {
    //Vaciar el arreglo y sobreescribir el archivo
    await fs.writeFileSync('users.json', JSON.stringify([]));
    //Si el proceso se realizó correctamente tendrás que regresar true
    return true;
}

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
