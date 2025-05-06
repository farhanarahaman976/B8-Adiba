# main.py
from fastapi import FastAPI, UploadFile, File, Query
from fastapi.responses import JSONResponse
from sklearn.ensemble import RandomForestClassifier
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
import os

app = FastAPI()

MODEL_PATH = "model.pkl"
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/learn")
async def learn(file: UploadFile = File(...)):
    try:
        # Read CSV
        df = pd.read_csv(file.file)

        # Assume last column is the label
        X = df.iloc[:, :-1]
        y = df.iloc[:, -1]

        # Train model
        model = RandomForestClassifier()
        model.fit(X, y)

        # Save model
        joblib.dump(model, MODEL_PATH)

        return {"message": "Model trained and saved successfully!"}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)

@app.get("/ask")
async def ask(q: str = Query(...)):
    if not os.path.exists(MODEL_PATH):
        return JSONResponse(content={"error": "Model not trained yet!"}, status_code=400)

    try:
        # Load model
        model = joblib.load(MODEL_PATH)

        # Expecting comma-separated features in the query
        features = [float(x) for x in q.split(",")]

        # Predict
        prediction = model.predict([features])

        return {"prediction": prediction.tolist()}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)
