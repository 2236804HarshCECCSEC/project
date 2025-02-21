import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import InputBox from "./components/InputBox";
import ResponseDisplay from "./components/ResponseDisplay";

export default function App() {
  const [jsonInput, setJsonInput] = useState('{ "data": ["A", "C", "z", "1", "2"] }');
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.title = "123456789"; // Set your roll number as title
  }, []);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const response = await axios.post("https://your-backend-url.com/bfhl", parsedInput);
      setApiResponse(response.data);
    } catch (error) {
      alert("Invalid JSON or API Error");
    }
  };

  return (
    <div className="app-container">
      <h1>BFHL API Frontend</h1>
      <InputBox jsonInput={jsonInput} setJsonInput={setJsonInput} onSubmit={handleSubmit} />
      {apiResponse && (
        <>
          <Dropdown setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay apiResponse={apiResponse} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}
