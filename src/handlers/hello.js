async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Serverless" }),
  };
}

export const handler = hello;
