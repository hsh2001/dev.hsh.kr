import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html,
body,
p {
  display: block;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

img,
canvas,
iframe {
  width: 100%;
  display: block;
}

a {
  color: skyblue !important;
  text-decoration: none;
}

code {
  background-color: #333;
  color: #fff;
  padding: 0 .5rem;
  border-radius: .5rem;

  &.block {
    display: block;
    padding: 16px;
  }
}
`;
