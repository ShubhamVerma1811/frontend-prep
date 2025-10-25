---
description: Generate a new Frontend System Design topic scaffold under frontend-system-design/topics.
---

## LLM Instructions
- Confirm the topic name and derive a kebab-case folder name.
- Scaffold only; avoid concrete implementations.
- Use templates under `frontend-system-design/templates/`.
- Prefer pnpm for any repo commands.

### References
- Template: `frontend-system-design/templates/SYSTEM_DESIGN_README_TEMPLATE.md`
- Destination root: `frontend-system-design/topics/`

## Workflow Steps

The user will provide a Topic name (e.g., "Rendering Strategies", "State Management").

1. Confirm the topic name with the user.
2. Location: `frontend-system-design/topics/<kebab-name>/`.
3. Create `README.md` using `frontend-system-design/templates/SYSTEM_DESIGN_README_TEMPLATE.md` as the base and replace placeholders with the topic title.
4. Create `diagrams/` folder with placeholder `.mmd` files as needed.
5. Do not write actual implementation details; keep it interview-ready and scaffolded.
6. If unclear, inspect existing topics or case studies for reference.
