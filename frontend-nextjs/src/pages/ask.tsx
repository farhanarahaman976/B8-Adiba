// pages/ask.tsx
import { useState } from 'react';
import axios from 'axios';

export default function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/ask", {
        params: { q: question },
      });
      setAnswer(response.data.prediction);
    } catch (error: any) {
      setAnswer(error.response?.data?.error || "Error occurred.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ask Prediction</h1>
      <input
        type="text"
        placeholder="Enter comma-separated features"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAsk}>Ask</button>
      {answer && <p>Prediction: {answer}</p>}
    </div>
  );
}
