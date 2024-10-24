// Configuración de Google Sheets
const sheetId = "1hzaoinHPCMxYW5tR7WQqPKlUrQX-ZiwNtzLsXKkG7KQ";
// Nombres de las hojas en la hoja de cálculo
const sheetNames = ["Auriculares", "Otros", "Teclados", "Mouse", "Camaras", "Consolas", "Joystick", "Relojes", "Baterias Portatiles", "Lamparas", "Parlantes", "Termos / Botellas", "Mopa"];

// Función para obtener los datos de una hoja de Google Sheets
async function fetchSheetData(sheetName) {
  const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const response = await fetch(sheetURL);
  return response.text();
}

// Convertir el CSV en un array de objetos
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

// Obtiene los datos categorizados desde múltiples hojas
async function getCategorizedData() {
  const categorizedObjects = {};

  for (const sheetName of sheetNames) {
    const csvText = await fetchSheetData(sheetName);
    const sheetObjects = csvToObjects(csvText);
    categorizedObjects[sheetName] = sheetObjects;
  }

  return categorizedObjects;
}
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////Terminado NO TOCAR//////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
