# OTP (One-Time Password) - Frontend Interview Requirements

![Difficulty: Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)

## 📋 Component Overview

A multi-digit verification input for entering one-time passwords (OTP) or PIN codes, commonly used in sign-in, 2FA, and sensitive actions. Focus on accessibility, robust keyboard and paste handling, and mobile UX.

## 🎯 Core Functionality Requirements

### Basic Behavior

- Configurable length (e.g., 4–8 digits; default 6)
- Single group composed of N inputs or a single input with visual segmentation
- Auto-advance to next input on valid entry
- Backspace navigation to previous input when current is empty
- Paste full OTP into first input to distribute across fields
- Support numeric and alphanumeric modes
- Masking option for sensitive inputs
- Clear, disabled, readOnly, error states
- onChange and onComplete callbacks

### Data Structure

- Expected props interface and types
- Required vs optional properties

```ts
interface OtpProps {
  length: number; // required
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  type?: "numeric" | "alphanumeric";
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  mask?: boolean;
  placeholder?: string;
  inputMode?: "numeric" | "text";
  name?: string;
  ariaLabel?: string; // e.g., "Verification code"
  ariaDescribedBy?: string; // id for description or error
  allowPaste?: boolean;
  validateChar?: (ch: string) => boolean;
}
```

## ♿ Accessibility Requirements (ARIA)

### Keyboard Support

- Tab/Shift+Tab moves between group and other form elements
- ArrowLeft/ArrowRight navigate between OTP inputs
- Backspace deletes current; if empty, moves to previous and deletes
- Delete clears current without navigation
- Home moves to first, End moves to last
- Enter triggers submit only when complete

### ARIA Roles, States and Properties

- Use semantic `fieldset` + `legend` or `role="group"` with `aria-label`
- Each input should have `aria-label` like "Digit 1 of 6"
- Use `aria-invalid` when value fails validation
- Associate errors via `aria-describedby`
- Manage focus programmatically when advancing/retreating
- For single-input approach, use `inputmode="numeric"` and `autocomplete="one-time-code"`
- For multi-input approach, ensure the group has a single accessible name and each cell is announced predictably

## 🚨 Edge Cases & Error Handling

### Input Validation

- Reject non-allowed characters (e.g., letters in numeric mode)
- Handle IME and composed input gracefully
- Trim pasted content to allowed length and charset
- Preserve previously entered valid digits when pasting partial content

### UI Edge Cases

- Support RTL and LTR
- Variable length codes (4/6/8) with dynamic re-rendering
- Browser autofill and platform OTP auto-fill suggestions
- Resend timer, expired codes, throttle states (status messaging)
- High zoom and small screens
- Copy/paste from clipboard with whitespace

## ⚡ Performance Optimization

### React-Specific Optimizations

- Controlled vs uncontrolled inputs tradeoffs
- Memoize input cells and handlers to reduce re-renders
- Avoid layout thrash on focus jumps

### General Performance

- Efficient paste distribution logic
- Avoid heavy state on each keypress
- Defer expensive validation until onComplete when possible

## 🔧 API Design Considerations

### Props Interface

```ts
interface OtpProps {
  length: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  type?: "numeric" | "alphanumeric";
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  mask?: boolean;
  placeholder?: string;
  inputMode?: "numeric" | "text";
  name?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  allowPaste?: boolean;
  validateChar?: (ch: string) => boolean;
}
```

### Advanced Features

- Single-input vs multi-input modes
- Paste splitting and sanitization hooks
- Custom separators or visual grouping (e.g., 3-3)
- Theme and style slots for cells, active, error states
- Internationalization: announcements and labels

## 🧪 Testing & Verification Scenarios

### Functional Testing

- Typing flows across cells
- Backspace at empty cell navigates left
- Paste full and partial codes
- Disabled/readOnly states
- onComplete fires only when filled with valid characters

### Accessibility Testing

- Screen reader announcements for group and cells
- Keyboard-only flows
- `aria-invalid` and error messaging via `aria-describedby`
- Focus order and restoration

### Performance Testing

- Rapid key entry and paste
- Re-renders per keystroke
- Memory leaks on mount/unmount

## 📊 Interview Evaluation Criteria

### Technical Skills

- Robust state and focus management
- Clean event handling for key and paste
- Validations and sanitization

### Frontend Domain Expertise

- Semantic grouping and ARIA
- Mobile input modes and autofill
- Edge case coverage

### Advanced Considerations

- Accessibility compliance
- UX for error and resend flows
- Configurable reusable API surface

## ❓ Common Follow-up Questions

1. How would you support both single-input and multi-input variants?
2. How do you implement paste distribution and validation?
3. How do you make it screen-reader friendly while remaining efficient?
4. What tradeoffs exist between controlled and uncontrolled inputs?
5. How would you design the API to be framework-agnostic?
6. How would you support mobile OTP auto-fill and desktop continuity?
7. How do you handle RTL and localization of labels?
8. How do you prevent accidental submission before completion?
9. What error states and timers would you include for resend/expiry?
10. How would you theme and style error/active/focus states?

## 🏢 Companies Known to Ask This Question

- Common in product companies and fintech with 2FA flows
- Difficulty varies from basic input handling to full a11y and paste logic

## 🎨 Implementation Details

### Provided Assets

- None

### Technical Constraints

- HTML: prefer `type="text"` with `inputmode="numeric"` in numeric mode
- Avoid `type="number"` due to spinners and parsing quirks
- Use `autocomplete="one-time-code"` where appropriate

## 📚 Additional Resources

- MDN: HTML `autocomplete` one-time-code
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
- Web.dev: SMS OTP form best practices
  - https://web.dev/articles/sms-otp-form
- WAI-ARIA Authoring Practices Guide
  - https://www.w3.org/WAI/ARIA/apg/
- MUI Base OTP example
  - https://v6.mui.com/base-ui/react-input/

## 🚀 Getting Started

### Basic Implementation

```tsx
// Create your own implementation using the API above
```

### Advanced Implementation

```tsx
// Implement full-featured variant with paste distribution and accessibility
```

---

Note: This component is designed for frontend interview practice. Focus on functionality over styling unless specifically requested.
