import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header>
        <h1>React with Vite Tutorial</h1>
        <p>Learn how to create a React app using Vite</p>
      </header>

      <section id="content">
        <h2>Step 1: Install Node.js</h2>
        <p>Make sure you have Node.js installed on your machine. You can download it from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a>.</p>

        <h2>Step 2: Install Vite</h2>
        <p>Open a terminal and run the following command to install Vite globally:</p>
        <code>npm install -g create-vite</code>

        <h2>Step 3: Create a React App</h2>
        <p>Run the following commands to create a new React app using Vite:</p>
        <code>
          create-vite my-react-app --template react<br />
          cd my-react-app
        </code>

        <h2>Step 4: Explore the Project Structure</h2>
        <p>Open the project in your preferred code editor. You'll see a project structure similar to the following:</p>
        <img src="https://i.imgur.com/4F3fcGW.png" alt="" />

        <h2>Step 5: Create Components (Optional)</h2>
        <p>Create React components in the <code>src</code> directory as needed.</p>

        <h2>Step 6: Run the App</h2>
        <p>Back in the terminal, run the following command:</p>
        <code>npm install<br />npm run dev</code>

        <p>Visit <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> in your browser to see your React app.</p>

        <p>Congratulations! You've created a React app using Vite. Feel free to explore more features of Vite, such as building for production, adding plugins, and optimizing your development experience.</p>
      </section>

      <footer>
        <p>Happy coding!</p>
      </footer>
    </div>
  )
}

export default App
