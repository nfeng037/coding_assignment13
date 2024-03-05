# React Component Library

## Overview

This document provides instructions to set up and run the React Component Library developed as part of the coding assignment. This library includes various UI components and is Dockerized for easy setup and deployment.

## Prerequisites

- Docker installed on your system.

## Setup and Running the Application

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/nfeng037/react-component
cd react-component
```

### Building the Docker Image

To build the Docker image for the application, run the following command in the root directory of the project:

```bash
docker build -t feng_na_coding_assignment13 .
```

### Running the Docker Container

Once the image is built, you can run the container using:

```bash
docker run -dp 8018:8018 --name feng_na_coding_assignment13 feng_na_coding_assignment13

```

### Accessing the Component Library

After the container starts, you can access the component library by navigating to [http://localhost:8018](http://localhost:8018)
in your web browser.

## Components

The library includes the following components:

- Button
- Label
- Text
- Table (with Table Header, Table Row, Table Cell, and Table Footer)
- Dropdown
- Radio Button
- Image
- Hero Image
- Card
  Each component is responsive and includes a default state and a disabled state.

## Continuous Integration and Deployment

This project uses GitHub Actions for Continuous Integration (CI) to automate the process of code quality checks, and testing. Our CI workflow includes the following steps:

- **Code Quality Checks**: Automatically runs ESLint and Prettier to ensure that all code changes meet our coding standards.
- **Automated Testing**: Runs all unit and integration tests using Jest to ensure that all features work as expected.


### Workflow Triggers

- The CI workflow is triggered on every push and pull request to the `main` branch.
- Contributors are encouraged to run ESLint, Prettier, and Jest tests locally before pushing their code. This can be done using the following commands:

```bash
npm run lint
npm run format
npm test
```

## Storybook

This project uses Storybook to showcase components. You can view the components and their different states in the Storybook interface.
