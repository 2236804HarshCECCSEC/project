import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highest_alphabet", label: "Highest Alphabet" }
];

export default function Dropdown({ setSelectedOptions }) {
  return (
    <Select options={options} isMulti onChange={setSelectedOptions} />
  );
}
