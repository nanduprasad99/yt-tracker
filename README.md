# 🛡️ Avengers YouTube Premium Tracker

A fun **Marvel-style dashboard** that tracks **YouTube Premium Family payment rotation** among friends.

The website automatically reads data from **Google Sheets** and displays:

* Who paid
* Who is next to pay
* Current active payer
* Payment leaderboard
* Progress of the payment cycle

No backend or database is required — **Google Sheets acts as the data source**.

---

## 🚀 Features

✨ Marvel / Avengers themed UI
⚡ Current active payer detection
📅 Automatic date range calculation
🏆 Payment leaderboard
📊 Cycle progress bar
🔄 Auto refresh every minute
📱 Mobile friendly layout
☁️ Hosted using GitHub Pages

---

## 🧠 How It Works

The system uses **Google Sheets as a database**.

Flow of data:

```
Google Sheet
      ↓
Published CSV API
      ↓
JavaScript fetch()
      ↓
Dynamic HTML dashboard
```

Whenever the spreadsheet is updated, the website automatically reflects the new data.

---

## 📊 Google Sheet Structure

Your sheet must contain the following columns:

| Avenger     | From       | To         | Status |
| ----------- | ---------- | ---------- | ------ |
| Nandu       | 15/12/2025 | 15/01/2026 | Done   |
| Person 1      | 15/01/2026 | 15/02/2026 | Done   |
| Person 2      | 15/02/2026 | 15/03/2026 |        |
| Person 3  | 15/03/2026 | 15/04/2026 | Done   |
| Person 4 | 15/04/2026 | 15/05/2026 |        |
| Person 5        | 15/05/2026 | 15/06/2026 |        |

If **Status is empty**, the system automatically marks it as **Pending**.

---

## ⚙️ Setup Instructions

### 1️⃣ Create Google Sheet

Create a sheet with the required columns.

### 2️⃣ Publish Sheet

In Google Sheets:

```
File → Share → Publish to Web
```

Select:

```
Entire document
Format → CSV
```

### 3️⃣ Copy CSV Link

Example format:

```
https://docs.google.com/spreadsheets/d/e/XXXX/pub?output=csv
```

### 4️⃣ Update Script

Replace the URL inside:

```
script.js
```

### 5️⃣ Deploy

Upload the project to **GitHub** and enable **GitHub Pages**.

---

## 🌐 Live Demo

Once deployed, your site will be available at:

```
https://yourusername.github.io/yt-tracker
```

---

## 🛠 Tech Stack

* HTML5
* CSS3
* JavaScript
* Google Sheets API (CSV)
* GitHub Pages

---

## 💡 Future Improvements

* Admin login panel
* Direct payment editing from website
* Notification reminders
* Avengers intro animation
* Payment statistics dashboard

---

## 👨‍💻 Author

**Nandu Prasad**

Built as a fun project to manage YouTube Premium family payments using simple web technologies.
