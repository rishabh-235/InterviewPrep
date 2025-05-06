# 🎯 InterviewPrep

**InterviewPrep** is an AI-powered mock interview platform that helps users practice and improve their interview skills. It provides real-time voice-based interviews, feedback, and an experience close to real-world interviews using AI.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Backend**: Firebase (Auth + Firestore)
- **AI Integration**: Gemini API via Google Studio
- **Voice & Video**:
  - `react-hook-speech-to-text` for speech-to-text
  - `react-webcam` for webcam access

---

## ✨ Features

- 🎤 AI-conducted mock interviews (voice input)
- 📸 Webcam-based interaction
- 🧠 Real-time feedback powered by Gemini AI
- 🗂️ Multiple interview categories (technical, behavioral)
- 🔐 Secure login with Firebase Authentication
- 📱 Responsive design for mobile and desktop

---

## 📦 Installation

### ✅ Prerequisites

- Node.js v14 or above
- Firebase account & project
- Access to Gemini AI (via Google Studio)

### 🚀 Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/InterviewPrep.git
   cd InterviewPrep
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory with the following:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-id
   REACT_APP_FIREBASE_APP_ID=your-app-id

   REACT_APP_GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Visit the app in your browser**

   ```
   http://localhost:3000
   ```

---

## 🧑‍💻 How to Use

1. **Login** with your Firebase credentials.
2. Click **Start Interview**.
3. Allow microphone and webcam access.
4. Speak your answers clearly.
5. Receive **feedback** from Gemini AI after each response.

---

## 📁 Folder Structure

```
/src
 ├── components       # Reusable UI components
 ├── hooks            # Custom React hooks (e.g. speech-to-text)
 ├── pages            # Main pages/routes
 ├── services         # API calls and Firebase logic
 ├── styles           # Tailwind and global styles
 └── utils            # Helper functions
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 🙏 Acknowledgments

* [Firebase](https://firebase.google.com/)
* [Gemini AI (Google Studio)](https://studio.google.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [ShadCN UI](https://ui.shadcn.com/)
* [react-webcam](https://www.npmjs.com/package/react-webcam)
* [react-hook-speech-to-text](https://www.npmjs.com/package/react-hook-speech-to-text)

---

> "Practice better. Speak smarter. Get hired."