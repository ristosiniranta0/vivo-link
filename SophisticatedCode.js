/*
   Filename: SophisticatedCode.js
   Description: This code demonstrates a sophisticated implementation of a real-time chat application using JavaScript.

   Please note that this code is a simplified version and does not cover all possible scenarios or edge cases. It serves as a starting point for building a more comprehensive chat application.

   Author: John Doe
   Date: October 21, 2022
*/

// User class representing a chat participant
class User {
  constructor(username) {
    this.username = username;
    this.messages = [];
  }

  sendMessage(message, recipient) {
    const newMessage = new Message(message, this, recipient);
    this.messages.push(newMessage);
    recipient.receiveMessage(newMessage);
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

// Message class representing a chat message
class Message {
  constructor(content, sender, recipient) {
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
    this.timestamp = new Date();
  }

  getFormattedTimestamp() {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return this.timestamp.toLocaleTimeString('en-US', options);
  }
}

// Chat class handling the overall chat functionality
class Chat {
  constructor() {
    this.users = [];
  }

  addUser(username) {
    const newUser = new User(username);
    this.users.push(newUser);
    return newUser;
  }

  displayChatHistory() {
    for (const user of this.users) {
      console.log(`Chat history for ${user.username}:`);
      for (const message of user.messages) {
        const sender = message.sender.username;
        const recipient = message.recipient.username;
        const content = message.content;
        const timestamp = message.getFormattedTimestamp();
        console.log(`${timestamp} - ${sender} to ${recipient}: ${content}`);
      }
      console.log('---');
    }
  }
}

// Create a new chat instance
const chat = new Chat();

// Add users to the chat
const user1 = chat.addUser('Alice');
const user2 = chat.addUser('Bob');

// Simulate chat conversation
user1.sendMessage('Hello, Bob!', user2);
user2.sendMessage('Hi, Alice!', user1);
user1.sendMessage('How are you?', user2);
user2.sendMessage('I’m good, thanks!', user1);
user1.sendMessage('What are you up to today?', user2);
user2.sendMessage('Just working on some coding projects. You?', user1);

// Display chat history for all users
chat.displayChatHistory();
