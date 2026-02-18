# Expense Tracker – MERN Stack

This project is a simple, production-style Expense Tracker built using the MERN stack (MongoDB, Express, React, Node.js).  
It supports creating, viewing, filtering, sorting, and deleting expenses with persistent storage.

The focus of this implementation is correctness, clean architecture, and real-world API behavior, rather than feature breadth.

---

## Key Design Decisions

- Idempotent Create API  
  Expense creation uses an `idempotencyKey` to prevent duplicate records during retries, slow networks, or page refreshes.

- RESTful Architecture  
  The backend follows standard REST conventions (`POST`, `GET`, `DELETE`) with clear separation of routes, controllers, and models.

- Server-Side Data Integrity 
  Validation and uniqueness constraints are enforced at the database layer using Mongoose schemas.

- Minimal & Predictable Frontend 
  React hooks are used for state management without external libraries to keep behavior simple and transparent.

- Lightweight Styling 
  Plain CSS is used instead of UI frameworks to prioritize clarity and performance.

- MongoDB is used for persistence due to its flexible schema, durability, and suitability for small production-style applications.
---

## Trade-offs Due to Time Constraints

- No Authentication / Multi-User Support  
  The app assumes a single-user environment.

- No Update (Edit) Functionality 
  Only create, read, and delete operations are implemented to keep the scope focused.

- Limited Filtering & Sorting 
  Only category filtering and date-based sorting are supported.

- Basic Error Handling  
  Error handling is functional but not fully user-friendly.

---

## Intentionally Not Implemented

- Optimistic UI updates  
- Pagination or large-dataset handling  
- Soft deletes or audit logs  
- Automated testing  
- Deployment / Docker configuration  

These were consciously excluded to stay within the time box and focus on core correctness.

---

## Summary

This project emphasizes clean structure, safe API design, and maintainability.  
The codebase is intentionally kept small and extensible, allowing features such as authentication, editing, analytics, and testing to be added incrementally.

