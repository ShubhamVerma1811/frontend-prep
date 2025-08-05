# Tabs Component - Unified Requirements

[Airbnb](/coding-questions?company=Airbnb)

![](https://api.frontendlead.com/wp-content/uploads/2024/03/Screenshot-2024-03-16-at-3.18.45-PM-300x261.png)

## 📋 Component Overview

Create a React component named `Tab` that displays a tabbed interface allowing users to switch between different content panels. The component must be reusable, accessible, and follow modern React best practices.

## 🛠️ Technical Requirements

### Component Architecture

- **React Functional Component** with hooks (specifically `useState`)
- **Styled-components** for CSS styling and modularity
- **Dynamic content rendering** based on active tab state
- Support for arbitrary number of tabs (extensible)

### Core Functionality

- **Default tab**: Home tab active on initial load
- **Required tabs**: Home, Profile, and Settings
- **Tab content**:
  - Home: "Welcome to the Home tab!"
  - Profile: "This is your Profile."
  - Settings: "Adjust your Settings here."
- **Tab switching**: Content updates immediately on click
- **State management**: Maintains active tab state internally

### UI/UX Requirements

- **Tab buttons**: Horizontal layout with clear labels
- **Active tab styling**: Different background and text color
- **Inactive tab styling**: Default styling with subtle hover effect
- **No page reloads** or unexpected side effects
- **Repeated click handling**: No state change when clicking active tab

### Error Handling

- Gracefully handle unexpected tab IDs
- Properly handle empty/malformed tab arrays
- Prevent runtime errors with missing content
- Maintain state during rapid clicking

## 🧪 Testing Requirements

### Data Test IDs

- `tab-button-home` - Home tab button
- `tab-button-profile` - Profile tab button
- `tab-button-settings` - Settings tab button
- `tab-content` - Content display area

### Test Scenarios

- Verify all tab buttons render correctly
- Confirm Home tab is active by default
- Verify content updates when tabs are clicked
- Confirm active styling is applied correctly
- Verify multiple clicks on same tab maintain state
- Use @testing-library/react for interaction tests

## 🎨 Design System Integration

### Component States

- Default/initial state
- Hover state
- Focus state

### Design Fidelity

- Match specified colors, fonts, and dimensions
- Maintain spacing and layout as designed
- Cross-browser compatibility (Chrome, Firefox, Safari)

### Accessibility

- Use semantic HTML
- Implement ARIA roles where appropriate
- Support keyboard navigation
- Ensure proper alt tags for images

## 💻 Implementation Approach

### Data Structure

- Store tab data in array with `id`, `label`, and `content`
- Use Array.map() to dynamically render tab buttons

### Event Handling

- Update active tab state on button click
- Re-render content based on active tab

### Styling

- Use conditional CSS classes for active/inactive states
- Implement distinct visual styles for active tabs
- Include hover effects for inactive tabs

### Performance (Stretch Goals)

- Optimize image assets
- Ensure quick load times
- Create smooth transitions between tabs

## 🔍 Expected Behavior Examples

- **Initial render**: "Welcome to the Home tab!"
- **Click Profile**: "This is your Profile."
- **Click Settings**: "Adjust your Settings here."
- **Click Settings again**: Content remains unchanged

---

_This component has been requested by companies including Meta, Google, Microsoft, Amazon, Netflix, and Adobe for frontend interviews._
