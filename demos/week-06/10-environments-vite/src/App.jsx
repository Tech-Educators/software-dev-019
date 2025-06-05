import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`);
      const data = await response.json();
      console.log(data);
    }
    getData();
  }, []);
  return (
    <>
      <h1>This is an app</h1>
      <p>I work in two environments! Development and production!</p>
    </>
  );
}

//Set up environments
// .env file for development
// .env.production file for production
//! add your .env files to your .gitignore
// Add environment variables to your .env files
// The environment variables that you want to use in your code need the prefix VITE_
// to use your env vars in your code, you need the import.meta.env.VITE_ENV_NAME
