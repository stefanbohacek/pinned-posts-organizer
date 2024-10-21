export default async (endpoint, method) => {
  const instance = localStorage.getItem("instance").replace(/\/$/, "");
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };
  const resp = await fetch(`https://${instance}/${endpoint}`, {
    headers,
    method: method || "GET",
  });
  const respJSON = await resp.json();
  return respJSON;
};
