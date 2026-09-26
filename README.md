# AUREX Web Internship — Week 4

**Name:** Roha
**Domain:** Full-Stack Engineering — Frontend Foundation
**Week:** 4

**Live Deployment Link:** https://roha-abid.github.io/aurex-web-internship-roha-abid/

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- Browser localStorage

## Features Implemented

- Add task
- Edit task (inline, click "Edit")
- Delete task
- Mark task as complete / incomplete
- Filter tasks: All / Active / Done
- Input validation (empty and over-length input blocked with an on-screen message)
- Tasks persist in localStorage and reload correctly after a page refresh
- Responsive layout (mobile and desktop)

## Challenges Faced & What I Learned

One of the trickier parts was inline editing when you click "Edit," the task text turns into an input field without losing the task's ID or its completed/uncompleted state. I learned that saving to localStorage and re-rendering the list have to stay tightly connected, or edits get overwritten on the next render.

I also ran into the issue of attaching event listeners to elements that don't exist yet when the page first loads (tasks created dynamically). I learned that listeners need to be added each time a task element is built, rather than once when the page loads otherwise clicks on new tasks do nothing.

Working with JSON.stringify() and JSON.parse() for localStorage also clarified the difference between an in-memory JavaScript array and the string format required to persist that data across page refreshes.

## Completed JavaScript Exercises

- Variables (`let`, `const`)
- Conditionals (`if` / `else`)
- Loops / iteration (`forEach`, `filter`, `find`)
- Functions (declarations, arrow functions, parameters & return values)
- Arrays (`push`, `filter`, `find`, `unshift`)
- Objects (task objects with properties: `id`, `text`, `completed`, `createdAt`)

## Project Structure

```
aurex-web-internship-roha/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── README.md
```
