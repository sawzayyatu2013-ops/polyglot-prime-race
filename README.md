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

### 🐧 Arch Linux
```bash
sudo pacman -S base-devel gcc dotnet-sdk python python-pip nodejs npm

# 🎩 Fedora
sudo dnf groupinstall "Development Tools"
sudo dnf install gcc dotnet-sdk-8.0 python3 python3-pip nodejs npm

# 🟢 Ubuntu / Debian
sudo apt update
sudo apt install build-essential dotnet-sdk-8.0 python3 python3-pip python3-venv nodejs npm

# 🦎 openSUSE
sudo zypper install -t pattern devel_basis
sudo zypper install gcc dotnet-sdk-8.0 python3 python3-pip nodejs npm

# 🧙 Gentoo
sudo emerge -av dev-lang/python dev-lang/nodejs dev-dotnet/dotnet-sdk dev-util/pkgconf

# 🪟 Windows (via winget)
winget install Microsoft.VisualStudio.2022.BuildTools
winget install Microsoft.DotNet.SDK.8
winget install Python.Python.3.12
winget install OpenJS.NodeJS

# 🍎 macOS (via Homebrew)
brew install gcc dotnet python node

# 🐍 Python Environment Setup (All OS)
python3 -m venv .venv
source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
pip install flask
EOF
