async function getGitHubRepo(
) {
  try {
    const response = await fetch('https://api.github.com/repos/<USERNAME>/<REPO>');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching GitHub repo data: ${error}`);
  }
}
async function getSiteData(
) {
  try {
    const response = await fetch('https://www.hubplusbot.com/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching site data: ${error}`);
  }
}
