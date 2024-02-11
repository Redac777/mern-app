# MERN App Dockerized

This repository contains a MERN (MongoDB, Express.js, React.js, Node.js) application dockerized for easy deployment and development.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

This MERN stack application allows users to register and login. It provides a simple and secure platform for user authentication and data management.

## Features

- User registration with email and password
- User login with email and password
- Secure authentication using JSON Web Tokens (JWT)
- MongoDB Atlas integration for database storage
- Dockerized for easy deployment and development

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Docker

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Docker
- Docker Compose

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Redac777/mern-app.git`
2. Navigate to the project directory: `cd mern-app`
4. Run Docker Compose: `docker-compose up --build`

## Usage

Once the project is running, you can access the application at `http://localhost:3000` in your web browser. From there, you can register a new user account at `http://localhost:3000/register` or login with an existing one at `http://localhost:3000/login`.
