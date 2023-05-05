export default async (request, context) => {
  const clientId = Deno.env.get("CLIENT_ID");
  const clientSecret = Deno.env.get("CLIENT_SECRET");
  const resp = await fetch("https://integrationapi.borderexpress.com.au/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
  });
  const jsonData = await resp.json();
  return Response.json(jsonData);
};