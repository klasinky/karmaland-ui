const data = [
    {
        question: "Which streams do I need to watch to get drops?",
        answer: "However, streamer-specific drops will require you to watch a specific streamer in order to get their drop. All participating streamers are listed above and all active campaigns and their conditions can always be seen on"
    }
]

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
                            <div className="faq-question">
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faqs;