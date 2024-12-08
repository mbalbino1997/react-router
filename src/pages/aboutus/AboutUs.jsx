export default function AboutUs() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6", color: "#333" }}>
            <section style={{ textAlign: "center", marginBottom: "30px" }}>
                <h1 style={{ color: "#4CAF50", fontSize: "2.5rem" }}>Chi Siamo</h1>
                <p style={{ fontSize: "18px", marginTop: "10px", color: "#555" }}>
                    Siamo un'azienda dedicata a fornire soluzioni innovative e a migliorare la vita dei nostri clienti. La nostra missione è creare un impatto positivo attraverso i nostri prodotti e servizi.
                </p>
            </section>

            <section style={{ marginTop: "40px" }}>
                <h2 style={{ fontSize: "2rem", color: "#333", borderBottom: "2px solid #4CAF50", display: "inline-block" }}>
                    Il nostro team
                </h2>
                <p style={{ marginTop: "10px" }}>
                    Un gruppo di professionisti appassionati e motivati, con competenze in diversi settori, lavoriamo insieme per offrire soluzioni uniche. Il nostro team è il cuore pulsante della nostra azienda.
                </p>
            </section>

            <section style={{ marginTop: "40px" }}>
                <h2 style={{ fontSize: "2rem", color: "#333", borderBottom: "2px solid #4CAF50", display: "inline-block" }}>
                    Cosa dicono di noi
                </h2>
                <div style={{ marginTop: "20px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    <blockquote style={{ flex: "1 1 calc(33.333% - 20px)", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                        "Un servizio eccezionale! La qualità del prodotto è oltre le aspettative."
                        <footer style={{ marginTop: "10px", fontSize: "14px", color: "#777" }}>- Mario Rossi</footer>
                    </blockquote>
                    <blockquote style={{ flex: "1 1 calc(33.333% - 20px)", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                        "Il team è fantastico, sempre disponibile e professionale."
                        <footer style={{ marginTop: "10px", fontSize: "14px", color: "#777" }}>- Laura Verdi</footer>
                    </blockquote>
                    <blockquote style={{ flex: "1 1 calc(33.333% - 20px)", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                        "Non potrei essere più soddisfatto del risultato finale."
                        <footer style={{ marginTop: "10px", fontSize: "14px", color: "#777" }}>- Luca Bianchi</footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
}
