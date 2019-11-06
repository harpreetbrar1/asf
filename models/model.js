let db = require('../util/database');

// Add a single individual to the database
function addPeople(data) {
    let sql = "Insert into artists (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.imageURL + "')";
    db.execute(sql);
}


function deletePeople(name, about) {
    
  
    return db.execute("DELETE FROM artists where name = ? ", [name]);
}


// Gets a specific individual from the database
function getPeople() {
    return db.execute("Select * from artists");
}

function getPeopleSearch(name) {
    
    return db.execute("Select * from artists where name=?",[name]);
}

module.exports = {
    add : addPeople,
    getPeople : getPeople,
    delete: deletePeople,
    getPeopleSearch: getPeopleSearch 
}

