/* The structure of the objects in the records collection;
records(object) {
    id(1994) {
        albumTitle: "Some Album"
        artst: "Some Artist"
        tracks: ["blah", "bleh", "bluh"]
        
    }
} 
    */

function updateRecords(records, id, prop, value) {
    if (value == "") {
        delete records[id][prop];
    }
    else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    }
    else if (prop == "tracks" && value !== "" && !(prop in records[id])) {
        records[id][prop] = [];
        records[id][prop].push(value);
    }
    else if (prop == "tracks" && value !== "") {
        records[id][prop].push(value);
    }
    return records;
};

function lookUpProfile(givenName, prop) {
    let flag = false;
    for (let i in contacts) {
        if (contacts[i].firstName == givenName && prop in contacts[i]) {
            flag = true; return contacts[i][prop];
        }
        else if (contacts[i].firstName == givenName && !(prop in contacts[i])) {
            flag = true; return "No such property";
        }
        else {
            flag = false;
        }
    } if (flag == false) {
        return "No such contact";
    }
}