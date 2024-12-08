export default function Home() {
    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            lineHeight: "1.6",
            textAlign: "center"
        }}>
            <h1 style={{ color: "#4CAF50" }}>Benvenuto nella Home Page!</h1>
            <p style={{ fontSize: "18px", color: "#555" }}>
                Esplora il nostro sito e scopri funzionalità incredibili. Siamo qui per offrirti la migliore esperienza possibile.
            </p>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "20px"
            }}>
                <button style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    Scopri di più
                </button>
                <button style={{
                    padding: "10px 20px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    Contattaci
                </button>
            </div>

            <div style={{
                marginTop: "40px",
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px"
            }}>
                <h2 style={{ color: "#333" }}>Novità recenti</h2>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>✔ Lancio del nuovo prodotto</li>
                    <li style={{ marginBottom: "10px" }}>✔ Offerte speciali per il mese</li>
                    <li>✔ Miglioramenti alla piattaforma</li>
                </ul>
            </div>
        </div>
    );
}
