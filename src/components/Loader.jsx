import { FcGlobe } from "react-icons/fc";

function Loader() {
  return (
    <div style={styles.container}>
      <FcGlobe style={styles.icon} />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#0f172a", 
  },
  icon: {
    fontSize: "40px",
    animation: "spin 2s linear infinite",
  },
};

export default Loader;