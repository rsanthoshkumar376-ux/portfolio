@echo off
title Santhosh Kumar R. - Portfolio Launcher
echo ========================================================
echo       SANTHOSH KUMAR R. - PORTFOLIO LAUNCHER
echo ========================================================
echo.
echo Starting local portfolio development server...
cd /d "%~dp0"

start "Santhosh Portfolio Server" cmd /k "npm run dev"

echo Waiting for server to initialize...
timeout /t 3 >nul

echo.
echo Opening portfolio in your web browser: http://localhost:5173
start http://localhost:5173

echo.
echo ========================================================
echo  Portfolio is now live in your browser!
echo  URL: http://localhost:5173
echo ========================================================
echo.
exit
