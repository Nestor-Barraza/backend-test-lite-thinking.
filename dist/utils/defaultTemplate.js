"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const DefaultTemplate = PORT => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <style>
      body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        background: linear-gradient(to right, #2c3e50, #3498db);
        background-size: 400% 400%;
        color: #fff;
        font-size: 16px;
        line-height: 1.5;
        animation: gradientBackground 15s ease infinite;
      }

      @keyframes gradientBackground {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }

      h1 {
        font-size: 3rem;
        font-weight: bold;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #fff;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }

      p {
        font-size: 1.2rem;
        margin-top: 1rem;
        text-align: center;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }

      .btn {
        display: inline-block;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #fff;
        background-color: #333;
        border: none;
        border-radius: 50px;
        margin-top: 2rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }

      .btn:hover {
        background-color: #555;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to server response</h1>
      <p>Your server is up and running in port: ${PORT}</p>
      <button class="btn">Go to dashboard</button>
    </div>
  </body>
</html>
`;
var _default = DefaultTemplate;
exports.default = _default;