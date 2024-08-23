[![Demo](https://img.shields.io/badge/live-demo-blue.svg)](https://chatbotkit-example-ai-art-chatbot.vercel.app/)

# Art Bot

https://github.com/chatbotkit/example-ai-art-chatbot/assets/60738984/84075133-ae8b-4568-8abb-4944ceeae13f


This repository contains the code for an AI Art bot. Built with the ChatBotKit SDK, this example showcases how to render UI components inside an AI conversation.

## Technology Stack

- **ChatBotKit SDK**: For building the chatbot logic and handling conversation flow.
- **React**: For UI components that interact with the user.

## Setup

1. Ensure you have Node.js installed.
2. Clone this repository.
3. Install dependencies by running npm install.
4. Create `.env.local` file in the root of the project and set the `CHATBOTKIT_API_SECRET` environment variable with your ChatBotKit API secret.
5. Optionally, set the `CHATBOTKIT_MODEL` environment variable to specify the model used for conversation (default is GPT-3.5 Turbo).

Note: for images we use "sep.turbifycdn.com". If your images are coming from a different domain you can add/replace it in the `next.config.mjs` file.

## Usage

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The chatbot uses several custom functions to interact with the user. These include standard UI components and "capture" functions, to capture the input.

## Learn More

To learn more about ChatBotKit and relevent SDKs look at the following resources:

- [ChatBotKit Documentation](https://chatbotkit.com/docs) - learn about ChatBotKit
- [ChatBotKit JavaScript SDKs](https://github.com/chatbotkit/node-sdk) - learn about used SDKs

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

## Contributing

Contributions to enhance the chatbot's functionality or address issues are welcome. Please follow the standard pull request process for contributions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
