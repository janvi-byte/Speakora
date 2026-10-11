# Speakora AI Service

FastAPI service that handles speech-to-text transcription for Speakora using OpenAI's Whisper model (local, open-source).

## Prerequisites

- Python 3.11 or newer

## Setup

From the `ai-service/` directory:

```bash
python -m venv .venv
source .venv/bin/activate   # Windows may use .venv\Scripts\python.exe directly
python -m pip install -r requirements.txt
```

On Windows, the commands below can also use `.venv\Scripts\python.exe` directly, without activating the environment.

## Configuration

Copy the example environment file and adjust if needed:

```bash
cp .env.example .env
```

| Variable           | Default                                 | Description                          |
|--------------------|-----------------------------------------|--------------------------------------|
| `AI_SERVICE_HOST`  | `0.0.0.0`                               | Host address the service binds to    |
| `AI_SERVICE_PORT`  | `8001`                                  | Port the service listens on          |
| `CORS_ORIGINS`     | `http://localhost:5173`                 | Comma-separated allowed CORS origins |
| `WHISPER_MODEL`    | `base`                                  | Whisper model size: tiny, base, small, medium, large |
| `MAX_AUDIO_BYTES`  | `26214400`                              | Maximum accepted audio file size in bytes (25 MB) |

## Running

```cmd
run.cmd --reload
```

For a normal run, omit `--reload`. The launcher always invokes Uvicorn with the service's `.venv` Python interpreter.

On other platforms, activate `.venv` before running:

```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8001
```

The API documentation is available at `http://localhost:8001/docs` once running.

## Endpoints

| Method | Path     | Description                                             |
|--------|----------|---------------------------------------------------------|
| GET    | `/health`   | Returns service health status                          |
| POST   | `/transcribe`| Accepts multipart audio, returns transcript via Whisper |
| POST   | `/analyze`   | Placeholder — returns 501 Not Implemented              |

This service is independent from MongoDB. All database operations remain handled by the Node/Express backend.
