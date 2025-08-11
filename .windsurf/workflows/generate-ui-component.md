---
description: Generating new folder and its template for the given UI component name.
---

## LLM Instructions
- Confirm the UI component name and derive a kebab-case folder name.
- Scaffold documentation; do not implement actual code.
- Use the structure guide and template in the UI components area.
- Prefer pnpm for any repo commands.

### References
- Structure guide: `machine-coding-ui/agent/README_STRUCTURE_GUIDE.md`
- README template: `machine-coding-ui/agent/README_TEMPLATE.md`
- Destination root: `machine-coding-ui/`

## Workflow Steps

The user would provide you with a UI component name for which the folder and data from template needs to be created.

1. Get the UI component name from the user, if it's not mentioned.
2. In the machine-coding-ui components folder, there are `README_STRUCTURE_GUIDE.md` and `README_TEMPLATE.md`.
3. Search the web to find all the component's frontend system interview requirements.
4. Gather all requirements asked when building the component system.
5. Go through them and then you'll have to create a new folder under the folder of the component name that had user provided.
6. The files and content of the pattern folder would follow from the above provided markdown files.
7. Remember to not populate the actual implementations of any files, that is for the user to do and learn.
8. In case of any confusion refer other files on the folder or you can ask the user.