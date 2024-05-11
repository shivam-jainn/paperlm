    #notebook LLM bot

    - Upload pdf
    - Find answers you are looking for

    TECH STACK

    - OpenAI embeddings
    - Langchain
    - prisma 
    - PSQL (for local dev)
    - NextJS and AI sdk
    - Pinecone DB for similarity search
    - Nextauth
    - s3 for pdf file storage 


**Prerequisites:**

* **Git:** Ensure you have Git installed on your system. You can download it from [https://git-scm.com/downloads](https://git-scm.com/downloads).
* **Node.js and npm (or yarn):** These are essential for package management. Install them from [https://nodejs.org/en](https://nodejs.org/en).
* **Docker:** Docker is required for running the database. Download it from [https://www.docker.com/](https://www.docker.com/).

* **Docker Desktop and Compose Plugin :** Gives you one command access to run docker containers  

**Installation Steps:**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/shivam-jainn/nbLLM.git
   ```


2. **Navigate to the Project Directory:**
   Change your working directory to the cloned repository:

   ```bash
   cd NBLLM
   ```

3. **Install Dependencies:**
   Inside the `notebook` directory, install the required dependencies using either `pnpm`, `npm`, or `yarn`:

   ```bash
   cd notebook
   pnpm install  # (Recommended for better performance)
   # OR
   npm install
   # OR
   yarn install
   ```

4. **Start the Database (Docker):**
   Run the following command to launch the database using Docker Compose:

   ```bash
   docker-compose up -d
   ```

   The `-d` flag ensures the database runs in the background.

5. **Gather API Keys:**
   You'll need API keys for various services used by the LLM bot. Here's a guide for each:

   - **OpenAI API Key:**
     - Create an account on OpenAI [https://platform.openai.com/signup](https://platform.openai.com/signup).
     - Go to your API keys page and create a new API key.
     - Copy and store this key securely.

   - **Gemini API Key:**
     - If you're using Gemini for any API functionalities, obtain your API key from their platform.

   - **Pinecone DB API Key:**
     - Create a Pinecone account [https://pinecone.org/](https://pinecone.org/).
     - Get your API key from your project settings and store it securely.

   - **AWS Environment Variables:**
     - If the bot interacts with AWS services (e.g., S3 for file storage), create and configure the necessary environment variables in your system or a `.env` file. You can find instructions on setting environment variables specific to your operating system.

   - **Google OAuth API Key:**
     - If Google OAuth is used for user authentication, create a project and API credentials in the Google Cloud Console [https://developers.google.com/workspace/guides/create-project](https://developers.google.com/workspace/guides/create-project). Follow the on-screen instructions to obtain your API key.

   - **GitHub OAuth API Key:**
     - Similar to Google OAuth, create a GitHub application and obtain an API key if the bot uses GitHub for authentication.

   - **NextAuth Secret:**
     - Create a secret to use with NextAuth. You can use the following command in your terminal:

     ```bash
     openssl rand -base64 32
     ```

     This will generate a random 32-character string suitable for a secret.

**Configuration:**

- **Create a `.env` file (optional):**
  You can create a `.env` file in the root of your project to store environment variables securely (e.g., API keys). `This file should not be committed to version control.`

**Verification:**

Once you've completed the installation and configuration steps, you can typically run the bot using a command like `npm run dev` or `yarn dev` or `pnpm run dev`. This will start the development server and allow you to access the bot interface in your browser (usually at `http://localhost:3000`).

**Additional Notes:**

- Right now , this bot only supports one pdf at a time
