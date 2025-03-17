import React from 'react';
import MermaidDiagram from './components/MermaidDiagram';
import './App.css';

function App() {
  const useCaseDiagram = `
graph TD;
  User["👤 User"] -->|Logs in| Login
  User -->|Browses Items| BrowseItems
  Admin["🛠️ Admin"] -->|Manages Users| ManageUsers
  Admin -->|Generates Reports| GenerateReports
`;



  const classDiagram = `
    %% Class Diagram
    classDiagram
      class User {
        +String name
        +String email
        +login()
        +logout()
      }
      class Admin {
        +String adminId
        +manageUsers()
        +generateReports()
      }
      User <|-- Admin
  `;

  return (
    <div className="App">
      <h1>Mermaid Diagrams</h1>
      <MermaidDiagram chart={useCaseDiagram} />
      <MermaidDiagram chart={classDiagram} />
    </div>
  );
}

export default App;
