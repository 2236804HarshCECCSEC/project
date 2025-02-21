export default function ResponseDisplay({ apiResponse, selectedOptions }) {
    const getFilteredResponse = () => {
      let filteredData = {};
      selectedOptions.forEach(option => {
        if (option.value === "alphabets") filteredData.alphabets = apiResponse.alphabets;
        if (option.value === "numbers") filteredData.numbers = apiResponse.numbers;
        if (option.value === "highest_alphabet") {
          filteredData.highest_alphabet = apiResponse.alphabets ? apiResponse.alphabets.sort().pop() : "N/A";
        }
      });
      return filteredData;
    };
  
    return (
      <pre className="response-box">
        {JSON.stringify(getFilteredResponse(), null, 2)}
      </pre>
    );
  }
  