const fetchGoogleSheetData = async () => {
    const spreadsheetId = '1hzaoinHPCMxYW5tR7WQqPKlUrQX-ZiwNtzLsXKkG7KQ'
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
  
      const data = await response.text();
      const jsonData = JSON.parse(data.substr(47).slice(0, -2)); // Para limpiar el JSON
  
      // Muestra los datos en la consola
      console.log('Datos obtenidos de Google Sheets:', jsonData);
  
      return jsonData.table.rows; // Ajusta según cómo necesites los datos
    } catch (error) {
      console.error('Error fetching Google Sheet data:', error);
      return [];
    }
  };
  
  // Llama a la función con tu spreadsheetId
  fetchGoogleSheetData();
  