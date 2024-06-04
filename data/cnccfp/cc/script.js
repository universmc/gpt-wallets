// script.js
const { Groq } = require('@groq/sdk');
const groq = new Groq({});

async function getMessages(
) {
  const messages = await groq.query(`
    *[_type == "message"] {
      id,
      message,
      timestamp
    }
  `);

  return messages;
}

function displayMessages(messages) {
  const output = `
    <ul>
      ${messages.map(message => `
        <li>
          <strong>${message.id}</strong>
          <p>${message.message}</p>
          <span>${new Date(message.timestamp).toLocaleString()}</span>
        </li>
      `).join("")}
    </ul>
  `;

  document.getElementById('messages').innerHTML = output;
}

async function init(
) {
  try {
    const messages = await getMessages();
    displayMessages(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
}

init();
