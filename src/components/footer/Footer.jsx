export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#f8f9fa",
            color: "#333",
            textAlign: "center",
            padding: "10px 0",
            borderTop: "1px solid #ddd"
        }}>
            <p>&copy; {new Date().getFullYear()} - My Website. All rights reserved.</p>
        </footer>
    );
}
