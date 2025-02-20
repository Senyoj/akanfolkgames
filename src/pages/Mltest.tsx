import React, { useState } from "react";
import axios from "axios";

const MLTest: React.FC = () => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://72b7-102-176-94-120.ngrok-free.app/predict"; 

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post(API_URL, {
        field1,
        field2,
        field3,
        field4,
      });

      setResult(response.data.prediction); 
    } catch (error) {
      setResult("Error: Unable to fetch response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">ML App Input UI</h1>

      <div className="w-full max-w-md space-y-4">
        {/* Input Fields */}
        {["Field 1", "Field 2", "Field 3", "Field 4"].map((label, index) => (
          <div key={index}>
            <label className="block font-semibold">{label}</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={[field1, field2, field3, field4][index]}
              onChange={(e) => {
                const value = e.target.value;
                if (index === 0) setField1(value);
                else if (index === 1) setField2(value);
                else if (index === 2) setField3(value);
                else setField4(value);
              }}
            />
          </div>
        ))}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* Result Preview */}
        {result !== null && (
          <div className="w-full border rounded p-3 mt-4 bg-gray-100">
            <strong>Result:</strong> {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default MLTest;