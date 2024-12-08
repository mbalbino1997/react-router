import Navbar from "../navbar/Navbar";

export default function Header() {
    return (
        <header style={{
            backgroundColor: "#f0f0f0",
            padding: "10px 20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "1200px",
                margin: "0 auto"
            }}>
                <h1 style={{ margin: 0, fontSize: "1.5rem", color: "#333" }}>
                    My Website
                </h1>
                <Navbar />
            </div>
        </header>
    );
}
