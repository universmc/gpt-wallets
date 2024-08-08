async function getSiteData(
) {
  try {
    const response = await fetch('https://www.univers-mc.cloud/srv/json/');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching site data: ${error}`);
  }
}
