

It is a headless CMS built with **Payload 3.0** and **Next.js 15**, designed for a modern, scalable, and maintainable web architecture.


## Core Technologies

*   **CMS:** [Payload 3.0](https://payloadcms.com)
*   **Framework:** [Next.js 15](https://nextjs.org) (for the admin panel)
*   **Database:** [MongoDB](https://www.mongodb.com/)
*   **Containerization:** [Docker](https://www.docker.com/)
*   **Deployment:** [Coolify](https://coolify.io) (CI/CD from GitHub)

---

## Why Payload CMS over WordPress?

Choosing Payload CMS for this project was a strategic decision to prioritize developer experience, performance, and long-term maintainability over the traditional approach of WordPress.

| Feature                  | Payload CMS (This Project)                                                              | WordPress                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Architecture**         | **Headless-first.** Decouples content from presentation. Use any frontend framework.      | Monolithic by default. The REST API can be slow and requires extra configuration.  |
| **Configuration**        | **Code-as-Config.** Data models are defined in TypeScript. Schema is version-controlled. | **Database-driven.** Relies on UI clicks and database state. Fragile and hard to version. |
| **Tech Stack**           | **Modern.** Built on Node.js, React, and TypeScript. Fast, secure, and familiar to modern devs. | PHP-based. A large ecosystem, but can feel dated and has a higher learning curve for JS devs. |
| **Extensibility**        | **Clean & Controlled.** Add features via clean code. No "plugin hell."                    | **Plugin-dependent.** Functionality relies on third-party plugins of varying quality and security. |
| **Security**             | **Minimal Attack Surface.** You control the entire codebase. No bloated, insecure plugins. | A massive target for hackers. Security depends on constant updates and plugin vigilance. |
| **Developer Experience** | **Exceptional.** Type-safety, powerful local development, and a clean, modern API.       | Can be cumbersome, with a mix of PHP templates, hooks, and a complex database schema. |

---

## The Benefits of Self-Hosting with Coolify

Instead of paying for a managed CMS service (like Contentful or Sanity) or premium WordPress hosting (like WP Engine), this project is self-hosted on a Virtual Private Server (VPS) and managed via Coolify. This provides the best of both worlds: total control and a modern DevOps experience.

#### 1. Drastic Cost Reduction
Managed CMS platforms charge based on usage metrics like API calls, users, and content records. These costs can become unpredictable and expensive as the site grows.

*   **Managed CMS:** Can range from $100 to $1000+/month for a high-traffic site.
*   **Self-Hosted on a VPS:** A fixed, predictable cost (typically $10-$40/month) for the server, regardless of traffic or data volume.

#### 2. Complete Data Ownership & No Vendor Lock-In
Your content, user data, and media files reside in *your* database on *your* server.
*   **Control:** You have full control over backups, data sovereignty, and security policies.
*   **Flexibility:** You can migrate your entire stack to another provider at any time without being locked into a proprietary API or data structure.

#### 3. No Artificial Limitations
Self-hosting removes the arbitrary limits on API calls, content types, or admin users that are common with SaaS platforms. The only limits are the resources of your server.

#### 4. The "PaaS" Experience with Coolify
Coolify provides the polished, Git-driven deployment workflow of a Platform-as-a-Service (like Vercel or Heroku) for your own server. It automates:
*   **CI/CD:** Automatically builds and deploys from GitHub pushes.
*   **SSL Certificates:** Free, automatic SSL via Let's Encrypt.
*   **Database Management:** Easy provisioning and connection string management.
*   **Environment Variables:** Securely injects secrets for staging and production.

---

## Local Development

This project is configured to run locally using Docker and Docker Compose, ensuring a consistent environment that mirrors production.

#### Prerequisites
*   [Docker](https://www.docker.com/get-started)

#### Running the Project

1.  **Set up environment variables:**
    ```bash
    cp .env.example .env
    ```
    > **Important:** Open the new `.env` file and replace the placeholder values. The `DATABASE_URI` should point to the Docker-hosted mongo service: `mongodb://mongo:27017/hockey-cms-dev`.

2.  **Start the services:**
    ```bash
    docker-compose up
    ```

3.  **Access the application:**
    *   **Admin Panel:** http://localhost:3000/admin

The first time you access the admin panel, Payload will prompt you to create your first administrative user.

## Deployment

Deployment is handled automatically by Coolify via webhooks connected to this GitHub repository.

*   **Production:** A push or merge to the `main` branch will trigger a production deployment.
*   **Staging:** A push or merge to the `staging` (or `develop`) branch will trigger a deployment to the staging environment.

Coolify uses the `Dockerfile` in this repository to build a production-optimized container image. Environment variables (like the database URI and payload secret) are injected securely from the Coolify dashboard.

