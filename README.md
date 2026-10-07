# WorkLink Monorepo Platform

WorkLink is an intelligent workspace orchestration platform designed with a micro-service monorepo architecture.

---

## 🏗️ Architecture Overview

The repository is structured into four primary modules:

- **`frontend/`**: Modern React 19 + TypeScript + Vite web user interface featuring dynamic glassmorphism aesthetics, live service monitors, and dark mode design system.
- **`backend/`**: Fast, lightweight Python FastAPI ASGI backend gateway handling CORS, API routes, and health monitoring.
- **`ml/`**: Machine learning directory reserved for model artifacts, dataset transformers, training scripts, and predictive inference pipelines.
- **`docs/`**: Architecture diagrams, system specifications, and API documentation.

```
workk/
├── frontend/             # React 19 + Vite Web Application
│   ├── src/
│   │   ├── App.tsx       # Main dashboard & live health monitor
│   │   ├── main.tsx      # Application entrypoint
│   │   └── index.css     # CSS custom design tokens & glassmorphism theme
│   ├── package.json
│   └── vite.config.ts
├── backend/              # Python FastAPI Application
│   ├── app/
│   │   ├── __init__.py
│   │   ├── config.py     # Environment configuration
│   │   └── main.py       # FastAPI application & GET /health endpoint
│   ├── .env.example
│   └── requirements.txt  # FastAPI, Uvicorn, Pydantic dependencies
├── ml/                   # Machine Learning Module
│   ├── README.md
│   └── .gitkeep
├── docs/                 # Platform Documentation
│   └── architecture.md   # Architectural breakdown & system flow
├── .env.example          # Root environment template
├── .gitignore            # Git exclusion rules
└── README.md             # Project documentation
```

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Core** | React 19, TypeScript | Reactive UI component tree & type safety |
| **Frontend Build** | Vite 6 | Lightning-fast HMR dev server & bundler |
| **Icons & Styling** | Lucide React, Custom CSS | Modern dark theme, glassmorphism, responsive grid |
| **Backend Framework**| FastAPI 0.110+ | Asynchronous Python web API gateway |
| **Backend Server** | Uvicorn 0.28+ | Lightning-fast ASGI server implementation |
| **Data Validation** | Pydantic v2 | Strict schema verification & configuration |
| **ML Infrastructure**| Python 3.13+ | Foundation for future ML models & analytics |

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js**: v18.0.0 or higher (v22 recommended)
- **npm**: v9.0.0 or higher
- **Python**: v3.10 or higher (v3.13 recommended)

---

### 1. Backend Setup

1. Open a terminal and navigate to `backend/`:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   - **Windows (PowerShell/CMD):**
     ```powershell
     python -m venv venv
     .\venv\Scripts\activate
     ```
   - **macOS / Linux:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI development server with Uvicorn:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

5. Verify the backend health endpoint:
   Open [http://localhost:8000/health](http://localhost:8000/health) or [http://localhost:8000/docs](http://localhost:8000/docs) in your browser.

---

### 2. Frontend Setup

1. Open a new terminal and navigate to `frontend/`:
   ```bash
   cd frontend
   ```

2. Install Node dependencies:
   ```bash
   cmd /c npm install
   ```

3. Start the Vite development server:
   ```bash
   cmd /c npm run dev
   ```

4. Access the frontend application:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Testing & Verification

### Backend Verification (`GET /health`)

Run a curl command or HTTP request:
```bash
curl -X GET http://localhost:8000/health
```

Expected JSON response:
```json
{
  "status": "ok",
  "service": "WorkLink Backend API",
  "version": "0.1.0",
  "environment": "development",
  "timestamp": "2026-10-07T07:14:00+00:00"
}
```

### Frontend Verification

1. Ensure both frontend (`:5173`) and backend (`:8000`) servers are running.
2. Open `http://localhost:5173`.
3. Check the **Backend Health Endpoint** monitor panel.
4. Click **Ping Health Endpoint** to verify live communication with `GET /health`.
