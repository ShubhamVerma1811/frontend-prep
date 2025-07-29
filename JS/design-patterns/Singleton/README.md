# Singleton Pattern

## 🎯 Problem
- Need exactly one instance of a class throughout the application lifecycle
- Global access point required for shared resources (database connections, loggers, configuration)
- Prevent multiple instances that could cause conflicts or waste resources

## 💡 Solution
Singleton pattern ensures a class has only one instance and provides global access to it by:
- Making constructor private to prevent direct instantiation
- Providing a static method that returns the same instance
- Storing the instance as a static class variable

## 🏗️ Implementation

### Basic Implementation
📁 **File:** [`basic.ts`](./basic.ts)
- Standard Singleton with lazy initialization
- Private constructor + static getInstance method
- Includes demo usage showing same instance returned

### Variants
📁 **File:** [`variants.ts`](./variants.ts)

#### 1. Thread-Safe Singleton
- Addresses concurrency issues in multi-threaded environments
- Uses double-checked locking pattern

#### 2. Testable Singleton
- Includes `resetInstance()` method for unit testing
- Allows clean state between test runs

#### 3. Eager Initialization
- Instance created at class loading time
- Thread-safe by default, but uses memory immediately

## 📋 Usage Examples
📁 **File:** [`examples.ts`](./examples.ts)

### Real-World Implementations:

#### Logger Service
- Centralized logging with different log levels
- Maintains log history accessible from anywhere
- Thread-safe log aggregation

#### Database Connection Manager
- Single connection pool across application
- Prevents connection leaks and resource waste
- Handles connection state management

#### Configuration Manager
- Global app configuration access
- Environment-based settings
- Runtime configuration updates

## ⚖️ Pros & Cons

### Advantages:
- **Single Instance**: Guarantees only one instance exists
- **Global Access**: Easy access from anywhere in the application
- **Lazy Initialization**: Instance created only when needed (in basic version)
- **Memory Efficient**: Prevents multiple instances of resource-heavy objects

### Disadvantages:
- **Global State**: Creates hidden dependencies and tight coupling
- **Testing Difficulties**: Hard to mock or isolate in unit tests
- **Thread Safety Issues**: Basic implementation not thread-safe
- **Violates Single Responsibility**: Class manages both its functionality and instance creation
- **Hidden Dependencies**: Makes dependencies between classes less obvious

### When to Avoid:
- When you need multiple instances in the future
- When testing is a high priority (consider dependency injection instead)
- When the class doesn't truly need to be a singleton
- When it creates tight coupling between components

## 🔗 Related Patterns
- **Factory Method**: Often implemented as Singleton
- **Abstract Factory**: Factory instances are often Singletons
- **Builder**: Builder instances can be Singletons
- **Facade**: Facade objects are often implemented as Singletons

## 🧪 Testing Strategy
📁 **File:** [`tests.ts`](./tests.ts)

### Testing Approaches:

#### Unit Testing
- Tests for instance consistency across multiple calls
- Reset functionality for clean test state
- Isolation between test cases

#### Integration Testing
- Dependency injection patterns for better testability
- Mock object usage instead of direct Singleton calls
- Service layer testing with injected dependencies

### Key Testing Challenges:
1. **Persistent State**: Instance persists between tests
2. **Hidden Dependencies**: Hard to see what depends on Singleton
3. **Mocking Difficulties**: Static methods are hard to mock

### Testing Solutions:
1. **Reset Methods**: Add methods to reset instance for testing
2. **Dependency Injection**: Pass Singleton as dependency rather than calling directly
3. **Test Isolation**: Ensure each test starts with clean state

## 🎯 Interview Preparation

### Common Questions & How to Answer:

**Q: "Explain Singleton pattern and when you'd use it."**
- Start with the problem it solves (exactly one instance needed)
- Give concrete example (database connection pool, logger)
- Mention both benefits AND drawbacks
- Show you understand alternatives (dependency injection)

**Q: "What are the problems with Singleton?"**
- Global state issues (hidden dependencies, tight coupling)
- Testing difficulties (hard to mock, persistent state)
- Thread safety concerns in concurrent environments
- Violates Single Responsibility Principle

**Q: "How would you make Singleton thread-safe?"**
- Explain double-checked locking approach
- Mention eager initialization as alternative
- Discuss trade-offs (performance vs memory usage)

**Q: "Is Singleton an anti-pattern?"**
- Acknowledge the debate in the community
- Explain when it's appropriate vs when to avoid
- Suggest alternatives (dependency injection, service locator)

### Code Challenge Scenarios:
- Implement thread-safe Singleton from scratch
- Add undo/redo functionality to existing Singleton
- Refactor Singleton to use dependency injection
- Debug issues in multi-threaded Singleton usage

## 🚀 Exploration Challenges

### Beginner Level:
1. **Implement Basic Singleton**: Create your own logger singleton
2. **Test the Pattern**: Write unit tests showing same instance behavior
3. **Compare Approaches**: Implement both lazy and eager initialization

### Intermediate Level:
1. **Thread Safety**: Implement and test thread-safe variant
2. **Generic Singleton**: Create a generic singleton base class
3. **Registry Pattern**: Build a singleton that manages multiple named instances
4. **Configuration System**: Build a hierarchical config manager using Singleton

### Advanced Level:
1. **Singleton with Reflection**: Implement using TypeScript decorators
2. **Dependency Injection**: Replace Singleton with DI container
3. **Distributed Singleton**: Design singleton pattern for microservices
4. **Memory Management**: Implement singleton with cleanup mechanisms

### Real-World Investigation:
- How does your favorite framework handle singletons? (React Context, Angular Services)
- Find singleton usage in popular libraries (Winston logger, Mongoose connection)
- Research: Why do some teams ban Singleton pattern entirely?
- Study: How does Node.js module system relate to Singleton pattern?

### Discussion Points:
- When is Singleton better than static class?
- How does Singleton pattern work in functional programming?
- What's the difference between Singleton and Monostate patterns?
- How do modern frameworks handle "singleton-like" behavior?

## 📚 Further Learning

### Next Patterns to Study:
- **Factory Method**: Often implemented as Singleton
- **Abstract Factory**: Factory instances are usually Singletons
- **Dependency Injection**: Modern alternative to Singleton
- **Service Locator**: Another approach to global access

### Recommended Reading:
- "Effective Java" by Joshua Bloch (Chapter on Singleton)
- "Clean Code" by Robert Martin (Dependency Injection chapters)
- Martin Fowler's articles on Dependency Injection vs Service Locator
