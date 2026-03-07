# AGENTS.md Guidelines

These guidelines are designed to ensure the consistent, high-quality, and maintainable development of the AGENTS repository. Adherence to these principles is mandatory for all development activities.

**1. DRY (Don't Repeat Yourself)**

*   All code should be encapsulated in reusable functions, classes, and modules.
*   Avoid duplicate logic across different files.
*   Use interfaces and abstract classes to promote code reuse and abstraction.
*   When a feature is implemented, it should be easily extensible without modifying existing code.

**2. KISS (Keep It Simple, Stupid)**

*   Prioritize clarity and readability above all else.
*   Minimize complexity in code.
*   Avoid overly clever or obscure solutions.
*   Favor straightforward, easily understandable logic.

**3. SOLID Principles**

*   **Single Responsibility Principle:** Each class or module should have one, and only one, reason to change.
*   **Open/Closed Principle:**  The system should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to implement interfaces they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules; they should depend on abstractions.

**4. YAGNI (You Aren't Gonna Need It)**

*   Implement only the functionality necessary at a given point in time.
*   Avoid premature optimization; focus on essential requirements first.
*   Refactor code only when it’s demonstrably adding value or resolving a significant issue.

**5. Code Structure & File Size**

*   **Maximum Code Length:** 180 lines of code per file.
*   **File Organization:**  Each file should represent a distinct, well-defined function, class, or module.
*   **Modularization:** Break down large functions into smaller, logical sub-functions.
*   **Naming Conventions:** Follow consistent naming conventions (e.g., snake_case for functions and variables).
*   **Comments:**  Include clear and concise comments where necessary to explain complex logic or decisions.

**6. Testing & Assurance**

*   **Unit Tests:** All code must have at least 80% coverage.  All tests must be functional and verify the expected outcome.
*   **Test Cases:**  Write comprehensive test cases that exercise all critical functionality.
*   **Test Driven Development:**  Utilize testing frameworks appropriate for the domain.
*   **Test Data Management:**  Use controlled test data to prevent reliance on specific configurations.

**7. Development Process**

*   **Code Reviews:** All code must be reviewed by at least one other developer before merging.
*   **Version Control:**  Utilize Git for version control and follow established branching strategies.
*   **Documentation:**  Maintain clear and concise documentation for all functions, classes, and modules.  Include API documentation where appropriate.
*   **Bug Tracking:** Utilize a bug tracking system to report and manage issues.
*   **Progress Tracking:** Use a task management system to track project progress.

**8.  Specific File Requirements (Examples – Customize to your needs)**

*   **`core_utils.py`:**  Contains core utility functions (e.g., date formatting, string manipulation). All functions should be easily reusable.
*   **`data_processing.py`:**  Handles data transformation and preparation.  Avoid complex data structures.
*   **`agent_interface.py`:**  Defines the interface for communication with other services or systems.
*   **`model_management.py`:**  Handles model loading, saving, and retrieval.  Prioritize efficient data management.

**9.  No Mocking - Use Mocks ONLY for Tests**

*   All logic, data, and error handling should be tested directly, not through mocking.
*   Mocking should only be used to isolate specific scenarios for testing purposes.
*   Mocking should be used to test edge cases and boundary conditions, not to simulate real-world dependencies.

**10.  Code Style & Formatting**

*   Use a consistent code style (e.g., Google Style) across the codebase.
*   Format code consistently (e.g., indentation, spacing).
*   Employ linters and code formatters to ensure adherence to style guidelines.

These guidelines are intended to provide a baseline for the AGENTS repository's development.  Continuous improvement and adaptation are encouraged. Any deviations from these guidelines require discussion and approval.