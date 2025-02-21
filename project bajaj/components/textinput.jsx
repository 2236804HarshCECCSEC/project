export default function InputBox({ jsonInput, setJsonInput, onSubmit }) {
    return (
      <div>
        <textarea
          className="input-box"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
        />
        <button className="submit-btn" onClick={onSubmit}>Submit</button>
      </div>
    );
  }
  