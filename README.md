# Registration Wizard

A multi-step onboarding wizard built to demonstrate segmented data collection and robust client-side state management the pattern used in most modern SaaS and FinTech signup flows.

**Live demo:** https://registration-wizard-6zvv-rho.vercel.app/

## Why a wizard, not a single form

A 20-field monolithic form overwhelms users and tanks completion rates. This project splits registration into three focused views and stitches them together with shared state, so nothing entered by the user is lost while moving between steps.

## Features 

- **Step-based UI segmentation** — three distinct views rendered conditionally based on the current step
- **Centralized state management** — a single source of truth holds all field values across steps, so navigating back and forth never drops data
- **Next / Back navigation** — controlled transitions between steps with the in-progress payload preserved
- **Review & Submit summary** — a final read-only view that renders everything the user entered before submission

## Steps

| Step | View | Fields |
|------|------|--------|
| 1 | Personal Info | First Name, Last Name, Date of Birth |
| 2 | Account Details | Email, Password, Confirm Password |
| 3 | Review & Submit | Read-only summary of Steps 1 & 2 |

## Tech Stack

- React (Next.js)
- Deployed on Vercel

## Roadmap (Future Phases)

- [ ] Field-level validation and inline error messages
- [ ] Persist in-progress state to localStorage (survive page refresh)
- [ ] Progress indicator / step tracker UI
- [ ] Async submission with loading and success/error states
- [ ] Unit tests for state transitions and validation logic

## Author

Nayan Gupta
