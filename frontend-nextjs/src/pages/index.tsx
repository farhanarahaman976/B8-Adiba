// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome</h1>
      <p>This project allows you to train a model with CSV data and ask for predictions.</p>

      <div style={{ marginTop: '2rem' }}>
        <p>
          ➤ <Link href="/learn">Go to CSV Upload (Train)</Link>
        </p>
        <p>
          ➤ <Link href="/ask">Go to Ask Prediction</Link>
        </p>
      </div>
    </div>
  );
}
