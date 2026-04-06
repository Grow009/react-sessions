# ⚛️ React Sessions

This repository contains structured learning sessions for **React.js**, covering everything from **basic fundamentals to advanced concepts**. It is designed for beginners as well as developers looking to deepen their React knowledge with practical examples.

---

## 📚 Learning Path

The sessions are organized step-by-step to help you progress smoothly:

### 🟢 Beginner Level

- What is React?
- Setting up React App (Vite / Create React App)
- JSX Basics
- Components (Functional Components)
- Props
- State (`useState`)
- Event Handling
- Conditional Rendering
- Lists & Keys

---

### 🟡 Intermediate Level

- Forms & Controlled Components
- Lifting State Up
- Component Lifecycle (Basics)
- `useEffect` Hook
- Reusable Components
- React Router (Navigation)
- Context API (State Management)
- Custom Hooks

---

### 🔴 Advanced Level

- Performance Optimization (`React.memo`, `useMemo`, `useCallback`)
- Code Splitting & Lazy Loading
- Error Boundaries
- Advanced State Management Concepts
- API Integration (Fetch / Axios)
- Authentication Flow (Basic)
- Folder Structure & Scalability
- Best Practices

---

## 🛠️ Sample Code

### Basic Component

```jsx id="cmp01"
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
