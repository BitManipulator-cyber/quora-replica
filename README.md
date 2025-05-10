# 📝 Quora-Style RESTful Posts App

A minimal full-stack Node.js application that allows users to **Create**, **Read**, **Update**, and **Delete** (CRUD) simple text-based posts — just like a mini version of Quora. Built with **Express.js**, **EJS templates**, and basic HTML/CSS.

---

## 🚀 Features

- View all posts on the homepage
- Create a new post with a username and content
- View a single post in detail
- Edit an existing post
- Delete a post
- RESTful routing with method override
- EJS templating for rendering dynamic views
- Styled with plain CSS (located in `/public/style.css`)

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS
- **Frontend**: HTML5, CSS3
- **Utilities**: UUID for unique post IDs, Method-Override for PATCH & DELETE

---

## 📁 Project Structure

quora-replica/
├── public/
│ └── style.css # Basic styling
├── views/
│ ├── index.ejs # Homepage - list all posts
│ ├── new.ejs # Form to create a new post
│ ├── edit.ejs # Form to edit a post
│ └── show.ejs # View a single post in detail
├── index.js # Main server-side application
├── package.json
└── README.md

---

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/BitManipulator-cyber/quora-replica.git
   cd quora-replica

2. Start the development server
    ```bash
    node index.js

3. Open your browser and go to
    ```Chrome
    http://localhost:8080/posts
    
## Concepts Demonstrated

1. Full CRUD operations using Express.js

2. Dynamic HTML rendering with EJS

3. Using uuid for unique post IDs

4. Using method-override to support PUT/PATCH/DELETE via HTML forms

5. Modular folder structure and static file serving


    