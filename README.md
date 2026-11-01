# ⚡ Polyglot Prime Race

A five-way race between **C**, **C#**, **Python**, **Node.js**, and **JavaScript** to find the Nth prime number — orchestrated by a Python web server with a slick browser dashboard.

Each language runs its own implementation of the **Sieve of Eratosthenes**. The browser shows real timings, including the JS race happening **in your browser tab**.

## 🎮 How to Play
1. Start the server (see setup below).
2. Open the web app: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**
3. Enter a number for **N** (e.g., `100000`).
4. Click **🏁 Race!**
5. Watch the bars fill up and see which language is the fastest! 🏆

*Pro tip: Try `N = 10` to see startup overhead, and `N = 500000` to see raw compute power!*

## 🛠️ Setup & Installation

You need **GCC**, **.NET SDK**, **Python 3**, and **Node.js** installed. Choose your OS below:

Arch Linux: sudo pacman -S base-devel gcc dotnet-sdk python python-pip nodejs npm
Fedora: sudo dnf groupinstall "Development Tools" && sudo dnf install gcc dotnet-sdk-8.0 python3 python3-pip nodejs npm
Debian/Ubuntu: sudo apt update && sudo apt install build-essential dotnet-sdk-8.0 python3 python3-pip python3-venv nodejs npm
OpenSUSE: sudo zypper install -t pattern devel_basis && sudo zypper install gcc dotnet-sdk-8.0 python3 python3-pip nodejs npm
Gentoo: sudo emerge -av dev-lang/python dev-lang/nodejs dev-dotnet/dotnet-sdk dev-util/pkgconf
Windows (via winget): winget install Microsoft.VisualStudio.2022.BuildTools && winget install Microsoft.DotNet.SDK.8 && winget install Python.Python.3.12 && winget install OpenJS.NodeJS
Mac (via Homebrew): brew install gcc dotnet python node

### 🐍 Python Environment Setup (All OS)
Once your system packages are installed, set up the Python virtual environment and install Flask: python3 -m venv .venv && source .venv/bin/activate && pip install flask (On Windows use: .venv\Scripts\activate)

### 🚀 Running the App
python python/server.py
Then open your browser to **[http://127.0.0.1:5000](http://127.0.0.1:5000)**.

## 🧠 The Stack

| Layer | Language | Role |
|-------|----------|------|
| Dashboard | HTML + CSS | Beautiful UI |
| Racer | JavaScript | Client-side prime finder (runs in your browser) |
| Server | Python | Orchestrates the race & acts as a racer |
| Racer | Node.js | Server-side JS racer |
| Racer | C | Native racer (compiled with GCC) |
| Racer | C# (.NET) | Managed racer (compiled with .NET SDK) |

## 📦 Project Structure

polyglot-prime-race/ | c/ (C implementation) | csharp/ (C# implementation) | node/ (Node.js implementation) | python/ (Python implementation & Flask server) | web/ (Frontend HTML/CSS/JS) | README.md

## 🤝 Contributing
Pull requests are welcome! If you want to add **Rust**, **Go**, or **Java** to the race, feel free to fork the repo and submit a PR.
