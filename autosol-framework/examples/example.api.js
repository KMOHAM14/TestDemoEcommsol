/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { EcommApiClient } = require('../dist/cjs');

const apiClient = new EcommApiClient('https://official-joke-api.appspot.com');

const executeCode = async () => {
  for (let i = 0; i < 5; i += 1) {
    try {
      const response = await apiClient.get('/random_joke');
      console.log('JOKE', JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('Error:', error.message);
    }

    // eslint-disable-next-line no-promise-executor-return
    await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for 2 seconds
  }
};

executeCode();

const hTMLApiClient = new EcommApiClient('https://www.google.com');

const executeHTMLCode = async () => {
  try {
    const response = await hTMLApiClient.getWithBasicAuth(
      '/',
      'username',
      'password',
    );
    console.log('Html Response', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
  }

  // eslint-disable-next-line no-promise-executor-return
  await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for 2 seconds
};

executeHTMLCode();

const apiBaseUrl = 'http://localhost:3000';

const ecommApiClient = new EcommApiClient(apiBaseUrl);

const formData = {
  name: 'John Doe',
  job: 'Software Engineer',
};

ecommApiClient
  .postForm('/form-data', null, formData)
  .then((response) => {
    console.log('API Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
