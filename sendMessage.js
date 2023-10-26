require("dotenv").config();
// const fetch = require('node-fetch');
const axios = require("axios");

async function sendMessage() {
  // for Create a new message
  const url = "https://api.linkedin.com/v2/messages";
  const data = {
    recipients: ["urn:li:person:123ABC", "urn:li:person:456DEF"],
    subject: "Group conversation title",
    body: "Hello everyone! This is a message conversation to demo the Message API.",
    messageType: "MEMBER_TO_MEMBER",
    attachments: ["urn:li:digitalMediaAsset:123ABC"],
  };
  // for repl
  const config = {
    headers: {
      // Authorization: `Bearer ${process?.env?.LINKEDIN_CLIENT_SECRET}`,
      // Authorization: `Bearer ${process?.env?.REFRESH_TOKEN}`,
      Authorization: `Bearer ${process?.env?.ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  // console.log(config?.headers?.Authorization)
  try {
    const response = await axios.post(url, data, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
let fetch;
async function memberRegulation() {
  import("node-fetch").then((module) => {
    fetch = module.default;
  });
  const url =
    "https://api.linkedin.com/v2/memberComplianceAuthorizations?q=member";
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process?.env?.ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Réponse en échec:", response.status);
    }
  } catch (error) {
    console.error("Une erreur est survenue:", error);
  }
}
// sendMessage();
memberRegulation();
