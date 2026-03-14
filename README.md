# 📈 AI Stock Prediction Portal

An **AI-powered stock prediction web application** that analyzes historical stock market data and forecasts potential future price trends using a **Deep Learning LSTM model**.

This project demonstrates how **Machine Learning models can be integrated into a full-stack web application**, combining **React, Django REST Framework, and Deep Learning** to deliver predictions through an interactive dashboard.

---

# 🚀 Live Features

✔ User authentication (**Register / Login**)
✔ Enter stock ticker symbols (Example: TSLA, AAPL)
✔ Historical stock price visualization
✔ **100-Day Moving Average** analysis
✔ **200-Day Moving Average** analysis
✔ **LSTM-based stock price prediction**
✔ Comparison of **actual vs predicted prices**
✔ Model evaluation metrics (**MSE, RMSE, R²**)
✔ Full-stack architecture using **React + DRF**

---

# 🧠 Machine Learning Model

The prediction system uses **Long Short-Term Memory (LSTM)** networks, a type of **Recurrent Neural Network (RNN)** designed for **time-series forecasting**.

### Model Workflow

1. Historical stock data is collected
2. Data preprocessing and normalization using **MinMaxScaler**
3. Sequence generation for time-series learning
4. LSTM model training using **TensorFlow/Keras**
5. Model predictions are returned through the **DRF API**

---

# 🛠 Tech Stack

## Frontend

* React.js
* Bootstrap
* Axios

## Backend

* Django
* Django REST Framework (DRF)

## Machine Learning

* TensorFlow / Keras
* Pandas
* NumPy
* Scikit-learn

## Visualization

* Matplotlib

---

# 🏗 System Architecture

```
                ┌──────────────────┐
                │   React Frontend │
                │  (Bootstrap UI)  │
                └─────────┬────────┘
                          │ API Requests
                          ▼
                ┌──────────────────┐
                │ Django REST API  │
                │  Authentication  │
                │ Prediction Logic │
                └─────────┬────────┘
                          │
                          ▼
                ┌──────────────────┐
                │  LSTM ML Model   │
                │ TensorFlow/Keras │
                └─────────┬────────┘
                          │
                          ▼
                ┌──────────────────┐
                │ Prediction Output│
                │ Graphs & Metrics │
                └──────────────────┘
```

---

# 📊 Application Workflow

1️⃣ User logs into the application
2️⃣ User enters a **stock ticker symbol**
3️⃣ Backend fetches **historical stock data**
4️⃣ Data is processed and scaled
5️⃣ LSTM model generates predictions
6️⃣ Backend returns prediction results
7️⃣ Frontend visualizes predictions and metrics

---

# 📁 Project Structure

```
stock-prediction-portal
│
├── backend
│   ├── api
│   ├── models
│   ├── views
│   ├── serializers
│   └── lstm_model
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── styles
│
├── dataset
│
├── model
│   └── stock_prediction_model.keras
│
└── README.md
```

---


# 📈 Model Evaluation

Example metrics from the trained model:

* **Mean Squared Error (MSE):** 141.45
* **Root Mean Squared Error (RMSE):** 0.98
* **R² Score:** 0.98

These metrics evaluate the model’s prediction accuracy on unseen data.

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/stock-prediction-portal.git
```

---

## 2️⃣ Backend Setup (Django)

```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## 3️⃣ Frontend Setup (React)

```
cd frontend
npm install
npm run dev
```

---

# 🔌 API Example

Example prediction endpoint:

```
POST /api/predict/
```

Request body:

```
{
  "ticker": "TSLA"
}
```

Response:

```
{
  "predicted_price": 238.45,
  "mse": 141.45,
  "rmse": 0.98,
  "r2_score": 0.98
}
```

---

# 🔮 Future Improvements

* Real-time stock data integration
* Multiple stock comparison
* Transformer-based prediction models
* Docker containerization
* Cloud deployment (AWS / GCP)
* Interactive charts using **Chart.js or D3.js**

---

# 👨‍💻 Author

**Atanu Maity**

Aspiring **AI/ML Engineer** interested in building intelligent systems that combine **machine learning and full-stack development**.


---

# ⭐ Support

If you found this project useful:

⭐ Star this repository
🍴 Fork the project
🛠 Contribute improvements
