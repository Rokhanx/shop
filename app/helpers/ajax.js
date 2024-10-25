import { SHEETID } from "./urls.js"

console.time("Fetch Time");

export const fetchSheetData = async (sheetName) => {
    const url = `https://docs.google.com/spreadsheets/d/${SHEETID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    const response = await fetch(url);
    const data = await response.text();
    return data;
}

function csvToObjects(csv) {
    const csvRows = csv.split("\n");
    const propertyNames = csvSplit(csvRows[0]);
    let objects = [];
    for (let i = 1, max = csvRows.length; i < max; i++) {
        let thisObject = {};
        let row = csvSplit(csvRows[i]);
        for (let j = 0, max = row.length; j < max; j++) {
            thisObject[propertyNames[j]] = row[j];
        }
        objects.push(thisObject);
    }
    return objects;
}

// Separa las columnas
function csvSplit(row) {
    return row.split(",").map(val => val.substring(1, val.length - 1));
}


export const getCategorizedData = async (sheetNames) => {
    const startTime = performance.now(); 
    const categorizedObjects = {};
    const fetchPromises = sheetNames.map(async (sheetName) => {
    const csvText = await fetchSheetData(sheetName);
    const sheetObjects = csvToObjects(csvText);
    categorizedObjects[sheetName] = sheetObjects;
    });
    // Espera a que todas las promesas se resuelvan
    await Promise.all(fetchPromises);
    const endTime = performance.now();
    const timeTaken = endTime - startTime; 
    console.log(`Fetch Time: ${timeTaken.toFixed(2)} ms`);
    return categorizedObjects;
};


