# UI Components README Structure Guide

This document defines the standardized structure for README files across all UI components in this project.

## 📋 README Structure

### Required Sections (All Components)

1. **Header with Badge**

   - Component name + "Frontend Interview Requirements"
   - Difficulty badge (Easy/Medium/Hard)

2. **📋 Component Overview**

   - Brief 1-2 sentence description
   - Primary purpose and use case

3. **🎯 Core Functionality Requirements**

   - Basic behavior expectations
   - Data structure requirements
   - TypeScript interfaces

4. **♿ Accessibility Requirements (ARIA)**

   - Keyboard support specifications
   - ARIA roles, states, and properties
   - Screen reader considerations

5. **🚨 Edge Cases & Error Handling**

   - Input validation scenarios
   - UI edge cases
   - Error states

6. **❓ Common Follow-up Questions**

   - Standard set of 10 interview questions
   - Component-specific variations

7. **🏢 Companies Known to Ask This Question**

   - List of companies
   - Difficulty variations

8. **📚 Additional Resources**
   - Relevant documentation links
   - Standards and guidelines

### Optional Sections (Based on Component Complexity)

- **⚡ Performance Optimization** - For complex components (Accordion, DataTable)
- **🔧 API Design Considerations** - For reusable/configurable components
- **🧪 Testing & Verification Scenarios** - For components with complex interactions
- **📊 Interview Evaluation Criteria** - For commonly asked components
- **🎨 Implementation Details** - When specific assets/constraints are provided
- **🚀 Getting Started** - For complex components that benefit from examples

## 🎯 Section Guidelines

### When to Include Optional Sections

| Component Type                            | Performance | API Design | Testing  | Evaluation | Implementation | Examples |
| ----------------------------------------- | ----------- | ---------- | -------- | ---------- | -------------- | -------- |
| **Simple Display** (Badge, Avatar)        | ❌          | ❌         | ❌       | ❌         | Optional       | ❌       |
| **Interactive Basic** (Button, Input)     | ❌          | ✅         | ❌       | ❌         | Optional       | ❌       |
| **Complex Interactive** (Accordion, Tabs) | ✅          | ✅         | ✅       | ✅         | ✅             | ✅       |
| **Data-Heavy** (DataTable, Autocomplete)  | ✅          | ✅         | ✅       | ✅         | ✅             | ✅       |
| **Layout** (Modal, Sidebar)               | Optional    | ✅         | Optional | Optional   | ✅             | Optional |

## 📝 Content Guidelines

### Core Functionality Requirements

- Start with the most basic behavior
- Progress to more complex interactions
- Always include data structure with TypeScript interfaces

### Accessibility Requirements

- Always include keyboard support (even if minimal)
- List all required ARIA attributes
- Consider screen reader experience

### Edge Cases & Error Handling

- Empty/null data scenarios
- Invalid input handling
- Boundary conditions (very long content, many items, etc.)

### Follow-up Questions

- Use the standard 10 questions as a base
- Add 2-3 component-specific questions if relevant
- Focus on real interview scenarios

## 🛠️ How to Use

1. Copy `README_TEMPLATE.md`
2. Replace `[Component Name]` with actual name
3. Fill in component-specific content
4. Remove optional sections not needed
5. Customize follow-up questions if relevant
