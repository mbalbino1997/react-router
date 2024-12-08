export default function PostsList() {
    const posts = [
        {
            id: 1,
            title: "Introduzione a JavaScript",
            content: "JavaScript è un linguaggio di programmazione versatile usato per lo sviluppo web.",
            author: "Mario Rossi",
            date: "2024-12-01",
        },
        {
            id: 2,
            title: "Guida a React",
            content: "React è una libreria JavaScript per creare interfacce utente dinamiche e reattive.",
            author: "Luisa Verdi",
            date: "2024-12-05",
        },
        {
            id: 3,
            title: "CSS avanzato: Flexbox e Grid",
            content: "Impara come utilizzare Flexbox e Grid per creare layout complessi e responsivi.",
            author: "Giulia Bianchi",
            date: "2024-12-07",
        },
        {
            id: 4,
            title: "Introduzione agli API REST",
            content: "Scopri come funzionano le API REST e come utilizzarle nei tuoi progetti.",
            author: "Luca Neri",
            date: "2024-12-08",
        }
    ];

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ color: "#4CAF50", textAlign: "center" }}>Lista dei Post</h1>
            {posts.map((el, i) => (
                <div key={el.id} style={{
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "15px",
                    marginBottom: "20px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}>
                    <h2 style={{ color: "#333" }}>{el.title}</h2>
                    <p style={{ color: "#555", fontSize: "16px" }}>{el.content}</p>
                    <div style={{ marginTop: "15px", fontSize: "14px", color: "#777" }}>
                        <p><strong>Autore:</strong> {el.author}</p>
                        <p><strong>Data:</strong> {el.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
