# 🎯 Refurbished Deal Sniper: Automation Bot

## 📌 Automation Logic
A high-frequency bot designed for tracking premium electronics (Foldables/Tablets) on secondary markets. 

## 🚀 Capabilities
- **Async Scraping:** Concurrent monitoring of multiple vendors.
- **Telegram Webhook Integration:** Instant, encrypted alerts upon price-drop detection.
- **State Persistence:** Intelligent tracking to avoid duplicate notifications.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Telegram API](https://img.shields.io/badge/Telegram_API-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
![Automation](https://img.shields.io/badge/Automation-Cron_Jobs-success?style=for-the-badge)

## 📌 Project Overview
An automated asynchronous bot designed to monitor specific e-commerce platforms for price drops on refurbished electronics (e.g., premium tablets, foldable smartphones). When a product's price falls below a dynamically set threshold, the bot instantly dispatches a notification via the Telegram API.

## 🚀 Technical Highlights
- **Asynchronous Scraping:** Built to handle multiple product URLs concurrently without blocking the main event loop.
- **RESTful API Integration:** Seamlessly communicates with Telegram's Webhook API for real-time message delivery.
- **Memory Efficiency:** Uses lightweight data structures to track previous price states and avoid duplicate notifications.

## 🛠 Use Case
Demonstrates practical application of web scraping, third-party API integration, and automated system monitoring.
