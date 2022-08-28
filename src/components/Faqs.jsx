const data = [
    {
        question: "¿Por qué no se muestra ningún canal?",
        answer: "Si no se muestra ningún canal, es porque no se encuentran en directo, vuelve a intentarlo más tarde.",
    },
    {
        question: "¿Cómo hago para ver el canal en directo?",
        answer: "Tan solo debes hacer click en el canal que deseas ver en directo y se abrirá en una nueva pestaña.",
    },
];

const Faqs = () => {
    return (
        <>
            <section className="section is-large">
                <div className="container">
                    <div className="section-header">
                        <h1>Faqs</h1>
                    </div>

                    <div className="section-body">
                        {data.map(({ question, answer }) => (
                            <div key={question} className="faq-question">
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </div>
                        ))}
                        <div className="faq-question">
                            <h2>¡Síguenos!</h2>
                            <p>
                                Puedes encontrar más información acerca de nosotros en nuestras
                                páginas web <a href="https://zclut.github.io/portfolio/" target={"_blank"} rel="noreferrer">zClut</a> y{" "}
                                <a href="https://www.klasinky.com/" target={"_blank"} rel="noreferrer">Klasinky</a>
                                .
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faqs;
