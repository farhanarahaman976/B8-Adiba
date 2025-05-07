# ML FastAPI Project - Flower Classifier 🌸

A simple Machine Learning based Question-Answer system using **FastAPI** (backend) and **Next.js** (frontend).  
This project trains a model using a CSV file and lets users ask questions to get predictions.

---

## 🔧 Technologies Used
- **Backend:** FastAPI, scikit-learn, pandas
- **Frontend:** Next.js, React
- **Model:** RandomForestClassifier

---

## 🚀 Features

### ✅ /learn (POST)
- Upload a CSV file (like flower data)
- Trains a RandomForestClassifier model

### ✅ /ask (GET)
- Send a query (comma-separated feature values)
- Returns prediction using trained model

---

## 📁 Project Structure

ml-fastapi-project/  
│  
├── backend/               # FastAPI backend  
│   ├── main.py            # Main FastAPI app  
│   ├── requirements.txt   # Python dependencies  
│   ├── trained_model.pkl  # Saved ML model  
│   └── __init__.py        # (optional) Package marker  
│  
├── frontend/              # Next.js frontend  
│   ├── pages/  
│   │   ├── upload.js      # File upload page  
│   │   └── ask.js         # Prediction input page  
│   ├── public/            # Static files  
│   ├── styles/            # CSS files (e.g., globals.css)  
│   ├── package.json       # Node project metadata  
│   └── next.config.js     # Next.js configuration  
│  
├── .gitignore             # Git ignored files  
├── README.md              # Project description and usage guide  
└── LICENSE                # (optional) License info  

# 🌸 ML FastAPI + Next.js Project

## 🔧 Setup Instructions

### ⚙️ Backend (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # On Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### 🚀 Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

## 🔗 Web Interface

🌼 Upload CSV: http://localhost:3000/upload  
🌼 Make Prediction: http://localhost:3000/ask  

## 🧪 API Endpoints

POST /learn  
📤 Upload a CSV file to train the model  
📌 Format: Last column must be the target label (e.g., species)  

GET /ask?q=val1,val2,...  
📥 Get prediction by passing comma-separated values as a query string  
📌 Example:  
GET /ask?q=5.1,3.5,1.4,0.2  

## 📂 Example CSV (flower_data.csv)

sepal_length,sepal_width,petal_length,petal_width,species  
5.1,3.5,1.4,0.2,setosa  
6.2,2.9,4.3,1.3,versicolor  
6.3,3.3,6.0,2.5,virginica  

## 🛠 Tech Stack

Backend: FastAPI, scikit-learn, pandas, pickle  
Frontend: Next.js, React  
Deployment: GitHub  

## 🧾 Author

**Farhana Rahman Adiba**  
GitHub: [@farhanarahaman976](https://github.com/farhanarahaman976)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

