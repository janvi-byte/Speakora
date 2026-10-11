@echo off
setlocal
cd /d "%~dp0"

if not exist ".venv\Scripts\python.exe" (
  echo AI service environment not found. Create .venv and install requirements.txt first.
  exit /b 1
)

".venv\Scripts\python.exe" -m uvicorn main:app --host 0.0.0.0 --port 8001 %*
exit /b %ERRORLEVEL%
