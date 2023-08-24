import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={styles.container}>
      <div style={styles.content}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. Page not found...</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2", // Add a subtle background color if you prefer
  },
  content: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", // Optional shadow for a "card" effect
  },
};
