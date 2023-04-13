import "./App.css";
import SocialSharing from "./socialSharing/socialSharing";

function App() {
   return (
      <div className="App">
         <h1>React Social Sharing</h1>
         <p>Lets Share this Page:</p>
         <SocialSharing
            url={window.location.origin}
            title="React Social Sharing"
            text="This is a Demo Share for our Example App"
         />
      </div>
   );
}

export default App;
