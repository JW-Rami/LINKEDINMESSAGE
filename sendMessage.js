require('dotenv').config();
const axios = require('axios');

async function sendMessage() {
  const url = 'https://api.linkedin.com/v2/messages';
  const data = {
    recipients: ['urn:li:person:123ABC', 'urn:li:person:456DEF'],
    subject: 'Group conversation title',
    body: 'Hello everyone! This is a message conversation to demo the Message API.',
    messageType: 'MEMBER_TO_MEMBER',
    attachments: ['urn:li:digitalMediaAsset:123ABC']
  };
  const config = {
    headers: {
      Authorization: `Bearer ${process?.env?.LINKEDIN_CLIENT_SECRET}`,
      'Content-Type': 'application/json'
    }
  };
  console.log(config?.headers)
  try {
    const response = await axios.post(url, data, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
