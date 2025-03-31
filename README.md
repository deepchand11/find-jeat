# Find A JEat

## Overview
Find A JEat is a React.js project that helps users find 10 restaurants around a given postcode. "JEat" is a shortened version of "Just Eat Restaurant."

The project is built using:
- **React.js** with Vite for frontend
- **Node.js** for the backend, to interact with external API
- **Tailwind CSS** for styling

## System Requirements

- **Node.js (LTS version recommended)**
  - Install from [Node.js official website](https://nodejs.org/)
  - Verify installation:
    ```sh
    node -v
    npm -v
    ```
- **Git** (Recommended for version control)
  - Install from [Git official website](https://git-scm.com/)
  - Verify installation:
    ```sh
    git --version
    ```
- **Package Manager**:
  - **npm** (comes with Node.js)

## Installation & Setup

### Step 1: Clone the repository
```sh
 git clone https://github.com/sravanirc/find-a-JEat.git
```

### Step 2: Navigate into the project directory
```sh
 cd find-a-JEat
```

### Step 3: Install dependencies
```sh
 npm install
```

### Step 4: Start the development server
```sh
 npm start  # or
 npm run dev
```

### Step 5: Open in your browser
Visit: [http://localhost:5173](http://localhost:5173)

## Usage
1. Enter a postcode in the input field.
2. Click the **GO** button.
3. The app will display 10 restaurants around the entered postcode.

## Assumptions
- By default, this application assumes the backend server will run on **port 5005**.

**If port 5005 is already in use** on your machine, you can update the port in your `.env` file by changing the value of the `VITE_SERVER_PORT` variable to an available port E.g. VITE_SERVER_PORT=5006 or VITE_SERVER_PORT=5007 etc..
After updating the `.env` file,save and **restart the application** to apply the changes.
``` ctrl + C 
    npm start
```

For example:
``` ./.env
PORT=5006
```
- The API returns valid restaurant data.
- The order of returned restaurants is not relevant.

## Future Improvements
✅ **Planned Enhancements:**
- ⭐ Add sorting options (e.g., by rating)
- 📌 Implement a **Favorites** feature to save restaurants
- 🔍 Add a search bar to filter results by restaurant name
- 🔑 Introduce user authentication for personalized experiences
- 📄 Create an **About Me** page with project details

---
### Contributors
If you'd like to contribute, feel free to submit a pull request!

Happy coding! 🚀
