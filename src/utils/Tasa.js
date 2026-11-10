export async function obtenerTasaEuro() {
  try {
    const respuesta = await fetch('https://ve.dolarapi.com/v1/euros/oficial');
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    const tasa = parseFloat(datos.promedio).toFixed(2);
    return tasa;
  } catch (error) {
    console.error('Error al obtener la tasa del euro:', error);
    return null;
  }
}