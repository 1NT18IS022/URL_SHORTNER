# URL Shortener

A simple and efficient URL Shortener built using Node.js, Express.js, and MongoDB. This application generates shortened URLs and redirects users to the original URL when accessed.

## 🚀 Features
- **Shorten Long URLs** using a unique identifier.
- **Redirect Users** to the original URL when visiting the shortened link.
- **MongoDB Storage** to persist shortened URLs.
- **Analytics Tracking** (e.g., number of clicks, creation date, etc.).


## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB



## 📌 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure your environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/urlShortener
   ```
4. Start the server:
   ```sh
   npm start
   ```


## 🏗 Future Enhancements
- 📊 **User Authentication** for managing personal links
- 📅 **Custom Expiry Time** for short URLs
- 📈 **Detailed Analytics Dashboard**

💡 Feel free to contribute, suggest improvements, or report issues!
