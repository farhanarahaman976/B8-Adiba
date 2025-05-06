// pages/learn.tsx
import { useState } from 'react';
import axios from 'axios';

export default function Learn() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/learn', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
    } catch (error: any) {
      setMessage(error.response?.data?.error || "Error uploading file.");
    }
  };

  return (
    <div style={{ padding: '2rem' ,
       display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif' }}>
      <h1>Upload CSV File</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button type="submit" style={{ marginLeft: '1rem' }}>Upload</button>
      </form>
      {message && (
        <p style={{ marginTop: '1rem' }}>{message}</p>
      )}
    </div>
  );
}
