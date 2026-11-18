@echo off
title Santhosh Kumar R. - Portfolio GitHub Sync
echo ========================================================
echo        Santhosh Kumar R. - Portfolio GitHub Sync
echo ========================================================
echo.
echo Target: https://github.com/rsanthoshkumar376-ux/portfolio
echo.
git add .
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg="Update portfolio codebase"
git commit -m "%commit_msg%"
echo.
echo Pushing changes to GitHub main branch...
git push origin main
echo.
echo ========================================================
echo Successfully synchronized with GitHub!
echo https://github.com/rsanthoshkumar376-ux/portfolio
echo ========================================================
pause
