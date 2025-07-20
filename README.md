# 🚀 Node.js DevOps Practice Project

Project ini dibuat sebagai latihan dasar untuk memahami praktik DevOps menggunakan Node.js. Fokus dari project ini adalah:

* Membuat REST API sederhana dengan Express.js
* Menulis automated test dengan Jest & Supertest
* Membangun CI/CD pipeline menggunakan GitHub Actions
* Menjalankan aplikasi dalam container menggunakan Docker

---

## 📦 Teknologi yang Digunakan

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Jest](https://jestjs.io/) & [Supertest](https://github.com/visionmedia/supertest)
* [GitHub Actions](https://github.com/features/actions)
* [Docker](https://www.docker.com/)

---

## ⚙️ Cara Menjalankan

### 📌 Secara Lokal

1. Clone repo ini:

```bash
git clone https://github.com/irgishalby/github-actions-node.git
cd github-actions-node
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan aplikasi:

```bash
npm start
```

4. Akses aplikasi:

* [http://localhost:3000/testNode](http://localhost:3000/testNode) 

---

### 🧪 Jalankan Test

```bash
npm test
```

---

### 🐳 Jalankan dengan Docker

1. Build Docker image:

```bash
docker build -t my-node-api .
```

2. Jalankan container:

```bash
docker run -p 3000:3000 my-node-api
```

3. Akses aplikasi:

* [http://localhost:3000/hello](http://localhost:3000/hello) 

---

## 🔁 CI/CD Workflow

GitHub Actions digunakan untuk:

* Install dependencies
* Menjalankan test otomatis setiap ada push ke repo

Konfigurasi ada di `.github/workflows/main.yml`.

---

Hope it helps! 😎
