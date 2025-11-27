

# Clean Architecture Web Application 

This project is structured using Clean Architecture principles to provide a clear, scalable, and maintainable foundation for building modern enterprise applications. The solution separates responsibilities across distinct layers, offering an organised approach suitable for long-term development and team collaboration.

---

## 🚀 Getting Started

### Prerequisites  
Ensure the following tools are installed before running the project:

- **.NET SDK (latest stable version)**
- **Node.js (latest LTS)** – required if using Angular or React for the frontend

---

## 🛠 Project Setup

### 1. Restore dependencies
```bash
dotnet restore
```

### 2. (Optional) Install frontend dependencies  
If the solution includes a SPA frontend:
```bash
npm install
```

### 3. Run the backend API
```bash
cd src/Web
dotnet run
```

### 4. Run the frontend  
React:
```bash
npm start
```

Angular:
```bash
ng serve
```

The backend will expose API endpoints via Swagger/OpenAPI, and the frontend will automatically connect to the running API.

---

## 📦 Solution Architecture

The solution follows a layered structure based on Clean Architecture:

### **Domain Layer**
- Contains core business logic  
- Defines entities, enums, and domain events  
- Completely independent and framework-free  

### **Application Layer**
- Contains use cases (commands, queries)  
- Implements **CQRS**, **MediatR**, **FluentValidation**  
- Defines the application's behaviour  

### **Infrastructure Layer**
- Handles external concerns such as:
  - Database access (EF Core)
  - Email and notification services
  - File storage
  - Third-party integrations (including AI services)
- Implements interfaces defined in the Application layer  

### **Web API Layer**
- Exposes RESTful endpoints  
- Implements authentication/authorization  
- Provides API documentation via Swagger  

---

## 🗄 Database Support

This application supports multiple relational databases:

- **SQL Server** (default)
- **PostgreSQL**
- **SQLite**

During development, the system can automatically:

- Create/update the schema  
- Seed default data (users, roles, sample records)  

For production environments, **EF Core Migrations** or **migration bundles** are recommended.

---

## 🔧 Creating New Use Cases

New application features can be introduced by adding commands or queries in the **Application** layer.

A typical use case consists of:

- A request model  
- Validation rules  
- A handler that performs the action  
- A mapped return type  

This ensures separation of responsibilities and consistent behaviour.

---

## ☁ Deployment

This solution can be deployed to any cloud or on-prem environment, including:

- Azure App Service / Container Apps  
- AWS ECS or EKS  
- Docker containers  
- Windows or Linux servers  

Configuration is managed through standard .NET configuration files and environment variables.

---

## 🧰 Technologies Used

- **ASP.NET Core Web API**
- **Entity Framework Core**
- **React 18 or Angular 18** (if SPA is included)
- **MediatR** for request handling
- **AutoMapper** for mapping models
- **FluentValidation** for validation
- **JWT Authentication** for secured endpoints
- **Swagger/OpenAPI** for API documentation

---

## 📈 Key Benefits

- Scalable and maintainable architecture
- Clear separation of concerns  
- Easy to test individual layers  
- Supports integration with external services (e.g., OpenAI, payment gateways, cloud APIs)  
- Flexible UI options  
- Ideal for enterprise-grade applications  

---
