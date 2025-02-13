Directory Management System

Overview :
The Directory Management System is a web application built using .NET Core for the backend and ReactJS/Angular for the frontend. It allows users to manage business listings, search for businesses, and view paginated results. The system ensures an intuitive user experience with seamless CRUD operations, efficient search functionalities, and sorting/pagination features.

Features

1. Business Listing Management (CRUD Operations)
Create: Admins can add new business listings using a modal form with validation.
Read: Displays business listings in a sortable table.
Update: Business details can be edited using a modal form.
Delete: Listings can be removed after confirmation.

2. Search Functionality
Users can search for businesses using keywords in Business Name and City.

3. Pagination
Displays 10 records per page with navigation controls.
Users can select a custom number of records per page.

4. Sorting
Sorting is available for Business Name and City columns.
Toggle sorting direction with an arrow indicator.

5. User Experience Enhancements
Hover effects on table rows.
Real-time validation in forms.
Responsive UI for various screen sizes.
Toast notifications for success/errors.

Project Structure : 
DirectoryManagementSystem/
│-- backend/                    # .Net + MSSQL Server
│   ├── Controllers/              
│   ├── Models/                  
│   ├── Services/                
│   ├── Repositories/            
│   ├── Migrations/               
│   ├── appsettings.json        
│-- frontend/                    # ReactJS
│   ├── src/
│   │   ├── components/           
│   │   ├── pages/                
│   │   ├── services/            
│   │   ├── App.js                
│   │   ├── main.ts           
│   ├── package.json              # Dependencies for Frontend
│-- README.md                     # Project Documentation
│-- .gitignore                     # Excludes node_modules & unnecessary files

Dependencies

Backend (ASP.NET Core)
Entity Framework Core (Database ORM)
ASP.NET Core MVC (API Framework)
SQL Server (Database)
FluentValidation (Input Validation)

Frontend (ReactJS)

ReactJS / Angular (Frontend Framework)
Axios (API Calls)
Bootstrap / Material-UI (UI Components)
React Hook Form 
React Toastify 

Installation & Running the Project

Prerequisites :
Node.js (For frontend dependencies)
.NET Core SDK (For backend API)
SQL Server (For database)

Backend Setup (.NET Core API)
1. Navigate to the backend folder: cd backend
2. Restore dependencies          : dotnet restore
3. Apply database migrations     : dotnet ef database update
4. Run the API                   : dotnet run

Frontend Setup (React.JS)
1. Navigate to the frontend folder:  cd frontend
2. Install dependencies           :  npm install
3. Start the frontend             :  npm start  # For ReactJS

Project Video : https://drive.google.com/file/d/1lk-UeMqkm_CgOcZbPtN5sZ1nQ4JoUoaL/view?usp=sharing
