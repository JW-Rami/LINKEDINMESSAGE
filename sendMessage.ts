import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

async function sendMessage(): Promise<void> {
  const url: string = 'https://api.linkedin.com/v2/messages';
  const data: object = {
    recipients: ['urn:li:person:123ABC', 'urn:li:person:456DEF'],
    subject: 'Group conversation title',
    body: 'Hello everyone! This is a message conversation to demo the Message API.',
    messageType: 'MEMBER_TO_MEMBER',
    attachments: ['urn:li:digitalMediaAsset:123ABC']
  };
  const config: object = {
    headers: {
      Authorization: `Bearer ${process?.env?.LINKEDIN_CLIENT_SECRET}`,
      'Content-Type': 'application/json'
    }
  };
  console.log(config?.headers);
  try {
    const response = await axios.post(url, data, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();
