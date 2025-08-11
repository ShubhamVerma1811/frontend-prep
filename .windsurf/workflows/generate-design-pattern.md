---
description: Generating new folder and its template for a given design pattern name.
---

## LLM Instructions
- Confirm the pattern name and derive a kebab-case folder name.
- Scaffold documentation files; do not implement code.
- Use the provided pattern README template to structure content.
- Prefer pnpm for any repo commands.

### References
- Template: `machine-coding-topics/design-patterns/agent/PATTERN_README_TEMPLATE.md`
- Category README: `machine-coding-topics/design-patterns/README.md`
- Destination root: `machine-coding-topics/design-patterns/`

## Workflow Steps

The user would provide you with a design pattern name for which the folder and data from template needs to be created.

1. Get the Pattern name from the user.
2. In the design-patterns folder, there are PATTERN_README_TEMPLATE and README.md
3. Go through them and then you'll have to create a new folder under the design-patterns folder of the pattern that had user provided.
4. The files and content of the pattern folder would follow from the above provided markdown files.
5. Remember to not populate the actual implementations of any files, that is for the user to do and learn.
6. In case of any confusion refer other files on the folder or you can ask the user.
