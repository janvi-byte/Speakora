# 🎙️ Speakora — AI-Powered Speaking Fluency Coach

**Speakora** is an AI-powered speaking practice platform designed to help learners improve their spoken English through interactive conversations, topic-based speaking exercises, role-play scenarios, and personalized feedback.

The goal is to make speaking practice more accessible, engaging, and confidence-building by helping users identify areas for improvement and track their progress.

🔗 **Live Demo:** https://svaraa.vercel.app/  
💻 **GitHub Repository:** https://github.com/janvi-byte/Svaraa

> Note: The live deployment and some AI-powered features may be under development. Feature availability depends on the current deployment and configuration.

## ✨ Key Features

### 🗣️ Speaking Practice
- Practice speaking on random topics.
- Participate in structured speaking sessions.
- Improve fluency through regular speaking exercises.
- Explore conversation and role-play scenarios as supported by the application.

### 🤖 AI-Powered Feedback
- Speech transcription for analyzing spoken responses.
- AI-assisted feedback on grammar and vocabulary.
- Opportunities to evaluate filler words, pacing, relevance, and clarity.
- Suggestions to help users improve their communication skills.

### 👤 User Authentication
- User registration and login.
- Password hashing and JWT-based authentication.
- Protected application routes.
- Persistent user authentication state.

### 📊 Learning and Progress
- Speaking-session tracking and progress-oriented features.
- Feedback designed to help learners identify improvement areas.
- A foundation for personalized speaking goals and practice recommendations.

*Some capabilities are still being integrated and may not be fully functional in the current deployment.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | User interface |
| TypeScript | Type-safe frontend development |
| Vite | Frontend development and build tooling |
| Node.js | Backend runtime |
| Express.js | REST API development |
| MongoDB | User and application data storage |
| Python | AI processing service |
| FastAPI | Python API framework |
| OpenAI Whisper | Speech-to-text processing |
| JWT | Authentication |
| Git & GitHub | Version control |

## 🏗️ System Architecture

```text
              User
               |
               v
      React + TypeScript
          (Vite)
               |
               v
       Node.js + Express
          REST APIs
               |
          +----+----+
          |         |
          v         v
       MongoDB   Python AI Service
                    (FastAPI)
                       |
                       v
                 Speech Analysis
                       |
                       v
                Feedback to User
```

The frontend handles the user experience, the Express backend manages authentication and application APIs, MongoDB stores application data, and the Python service provides a foundation for speech-processing functionality.

## 🚀 Getting Started

### Prerequisites

Install the following tools before running the project:

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) or a local MongoDB instance
- [Python](https://www.python.org/) compatible with the AI service dependencies
- [Git](https://git-scm.com/)
- FFmpeg if required by the speech transcription setup

### 1. Clone the repository

```bash
git clone https://github.com/janvi-byte/Svaraa.git
cd Svaraa
```

### 2. Install frontend dependencies

Run this from the directory containing the frontend `package.json`:

```bash
npm install
```

Create or configure the frontend environment file as needed:

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Google authentication requires a valid Google OAuth client ID and correctly configured authorized origins.

Start the frontend:

```bash
npm run dev
```

### 3. Configure and run the backend

Navigate to the backend directory containing its `package.json`:

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=http://localhost:5173
```

Replace the example values with your own configuration. Never commit real secrets or database credentials to GitHub.

Start the backend using the available script in `package.json`, or use the configured server entry point.

Verify the backend health endpoint:

```text
http://localhost:5000/api/health
```

### 4. Configure the Python AI service

Navigate to the AI service directory:

```bash
cd ai-service
```

Create and activate a Python virtual environment, then install the dependencies:

```bash
python -m venv .venv
```

On Windows:

```bash
.venv\Scripts\activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI service if its dependencies are installed successfully:

```bash
uvicorn main:app --reload --port 8000
```

The exact Python version and system dependencies must match the AI service requirements. Whisper-based transcription may also require FFmpeg.

## 🔐 Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Backend API base URL |
| `VITE_GOOGLE_CLIENT_ID` | Google sign-in configuration |
| `PORT` | Express backend port |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign authentication tokens |
| `JWT_EXPIRES_IN` | JWT expiration duration |
| `CLIENT_ORIGIN` | Frontend origin permitted by backend CORS |

Keep `.env` files private. Use `.env.example` files containing placeholders to document required configuration.

## 🌐 Deployment

Speakora uses a separate frontend, backend, and AI service architecture.

- **Frontend:** Vercel
- **Backend:** Render or another Node.js hosting provider
- **AI service:** A Python-compatible hosting provider
- **Database:** MongoDB Atlas

For a complete production deployment, configure the frontend API URL, backend CORS origin, database credentials, authentication settings, and AI service connectivity. Ensure the deployed application uses HTTPS and production secrets.

## 🔮 Future Enhancements

- Real-time conversational AI tutor.
- Pronunciation and speech clarity analysis.
- Personalized learning paths.
- Native-language explanations and translation support.
- Debate practice and business English scenarios.
- Detailed speaking analytics and progress dashboards.
- Additional role-play scenarios and interactive lessons.

These are planned enhancements and should be marked as completed only when implemented and tested.

## 🎯 Project Objective

Speakora aims to help learners practice spoken English in a supportive environment, receive actionable feedback, and develop confidence through consistent practice.

## 👩‍💻 Developer

**Janvi Yadav**

- GitHub: [janvi-byte](https://github.com/janvi-byte)
- Project: [Speakora Repository](https://github.com/janvi-byte/Svaraa)
- Live Demo: [Speakora](https://svaraa.vercel.app/)

---

*Built with React, TypeScript, Node.js, Express, MongoDB, and Python.*
