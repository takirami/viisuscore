import '../styles/globals.css'
const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "2qgpnp14mgvm",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "JmHj1IfORnROxUGyYHEecpus2Q-_yoX4sMt9f2uHZTg"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("4hv9rKN2TlEeRdm2KceaeE")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
