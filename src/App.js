import axios from 'axios';

function App() {

	axios.get('http://127.0.0.1:3030/')
	  .then(res=>console.log(res))
	  .catch(err=>console.log(err))

  return (
    <div className="App">
      TODO appliction
    </div>
  );
}

export default App;
