import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get request - String 
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("button1").innerHTML = response.data;
  };

  const data = "Hello";

  // post request - String

  const postDataFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("button2").innerHTML = response.data;
  };

  //post request - form

  const[formData, setFormData] = useState("");

  const postFormFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
     formData,
     });
    console.log(response.data);
    document.getElementById("button3").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="button1"></p>
      <br></br>

      <button onClick={postDataFromBackend}>Post Data</button>
      <p id="button2"></p>
      <br></br>

      <button onClick={postFormFromBackend}>Get Data</button>
      <p id="button3"></p>
      <br></br>

      <form onSubmit={postFormFromBackend}>
        <input type="text" name="formdata"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}></input>
        <input type="submit" value="testForm"></input>
      </form>
    </div>
  );
};

export default App;
