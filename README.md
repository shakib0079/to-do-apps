# Vanilla JavaScript To-Do Application

This is a simple To-Do application developed using Vanilla JavaScript. The project demonstrates how to manage and manipulate data, connect it with the UI, and perform CRUD operations efficiently.

## Features

1. **Data Management with Storage**  
   Each `li` item is treated as an object and stored in an array that acts as the application's storage.

2. **Add and Remove Items**  
   - A dedicated function adds items to the storage.  
   - Another function removes items from the storage.  
   - Both functions directly manipulate the storage array.

3. **Dynamic UI Updates**  
   - A separate function connects the storage to the UI.  
   - The UI is updated dynamically to reflect the current state of the storage.

## How It Works

1. **Adding Tasks**  
   - Users can add tasks using an input field and a button.  
   - The new task is stored as an object in the storage array and displayed on the UI.

2. **Removing Tasks**  
   - Users can remove tasks by clicking a remove button associated with each task.  
   - The task is deleted from the storage and subsequently removed from the UI.

3. **Storage Management**  
   - The storage is maintained as an array in memory, which acts as the single source of truth for the application.  
   - All UI updates are directly tied to the storage's current state.

## Project Structure
├── index.html # The main HTML file 
├── style.css # Styles for the application 
├── app.js # JavaScript file containing Add, Remove functionality
├── UIUpdate.js # JavaScript file containing Display functionality
├── storage.js # JavaScript file containing storage (Empty Array)
└── README.md # Project documentation

## Technologies Used

- **HTML**: For structuring the application.
- **CSS**: For styling the application.
- **JavaScript**: For implementing application logic.
