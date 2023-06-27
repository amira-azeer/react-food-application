
export function generateID(){
    let newID = Math.floor(Math.random() * 1000);
    return newID;
}


export function onlyUnique(object) {
    const arrayUniqueByKey = [...new Map(object.map(item =>
        [item['name'], item])).values()]

    return arrayUniqueByKey;
}

