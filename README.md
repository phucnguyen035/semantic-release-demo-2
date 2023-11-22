# Semantic Release Demo

This repository demonstrates the use of semantic release to automate versioning and package publishing based on commit messages.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/phucnguyen035/semantic-release-demo.git
   cd semantic-release-demo
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Commit Messages

   - Follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for your commit messages. Here's an example:

     ```
     feat: add new feature
     fix: resolve issue with...
     chore: update dependencies
     ```

4. Release Process

   - Semantic release will automatically handle versioning and publishing based on commit messages. Ensure your CI/CD pipeline is configured to trigger semantic release on new commits.

## Usage

To manually trigger a release locally (for testing purposes):

```bash
bunx semantic-release
```

## Additional Resources

- [Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release/)
- [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
Feel free to adjust the content and placeholders as needed for your specific repository's setup and requirements.
