// const { amqplib } = require("amqplib");
// const { MESSAGE_BROKER_URL, EXCHANGE_NAME } = require("../config/server");
// const createChannel = async () => {
//   try {
//     // Connection with message broker
//     const connection = await amqplib.connect(MESSAGE_BROKER_URL);
//     const channel = await connection.createChannel();
//     await channel.assertExchange(EXCHANGE_NAME, "direct", false);
//     return channel;
//   } catch (error) {
//     throw error;
//   }
// };

// const subscribeMessage = async (channel, service, binding_key) => {
//   try {
//     const applicationQueue = await channel.assertQueue("QUEUE_NAME");

//     channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key);

//     channel.consume(applicationQueue.queue, (msg) => {
//       console.log("received data");
//       console.log(msg.content.toString());
//       channel.ack(msg);
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// const publishMessage = async (channel, binding_key, message) => {
//   try {
//     await channel.assertQueue(QUEUE_NAME);
//     await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
//   } catch (error) {
//     throw error;
//   }
// };
// module.exports = {
//   subscribeMessage,
//   createChannel,
//   publishMessage,
// };

const amqplib = require("amqplib");
const { MESSAGE_BROKER_URL, EXCHANGE_NAME } = require("../config/server");
const QUEUE_NAME = "your_queue_name"; // Define your queue name here

const createChannel = async () => {
  try {
    // Connection with message broker
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", { durable: false });
    return channel;
  } catch (error) {
    throw error;
  }
};

const subscribeMessage = async (channel, service, binding_key) => {
  try {
    const applicationQueue = await channel.assertQueue(QUEUE_NAME);

    channel.bindQueue(applicationQueue.queue, EXCHANGE_NAME, binding_key);

    channel.consume(applicationQueue.queue, (msg) => {
      console.log("received data");
      console.log(msg.content.toString());
      channel.ack(msg);
    });
  } catch (error) {
    throw error;
  }
};

const publishMessage = async (channel, binding_key, message) => {
  try {
    await channel.assertQueue(QUEUE_NAME);
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  subscribeMessage,
  createChannel,
  publishMessage,
};
