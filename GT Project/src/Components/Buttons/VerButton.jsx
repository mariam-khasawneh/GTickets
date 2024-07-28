import styled from "styled-components";

const StyledVerButton = styled.button`
  border: solid 2px #cabffd;
  border-radius: 8px;
  color: #cabffd;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

// eslint-disable-next-line react/prop-types
function GoogleBtn({ onClick, children, className }) {
  return (
    <StyledVerButton onClick={onClick} className={className}>
      <GoogleSVG />
      {children}
    </StyledVerButton>
  );
}

// eslint-disable-next-line react/prop-types

function GoogleSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.04 12.2613C23.04 11.4459 22.9668 10.6618 22.8309 9.90906H12V14.3575H18.1891C17.9225 15.795 17.1123 17.0129 15.8943 17.8284V20.7138H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2613Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 23.4998C15.1049 23.4998 17.7081 22.47 19.6108 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 11.9999 18.9259C9.00471 18.9259 6.46948 16.903 5.56516 14.1848H1.72311V17.1644C3.61539 20.9228 7.50448 23.4998 11.9999 23.4998Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.7581 5.20455 12.0001C5.20455 11.2422 5.33523 10.5051 5.56523 9.81512V6.83557H1.72318C0.944318 8.38807 0.5 10.1444 0.5 12.0001C0.5 13.8558 0.944318 15.6122 1.72318 17.1647L5.56523 14.1851Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 5.07386C13.6883 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 11.9999 0.5C7.50448 0.5 3.61539 3.07705 1.72311 6.83545L5.56516 9.815C6.46948 7.09682 9.00471 5.07386 11.9999 5.07386Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export { GoogleBtn };
