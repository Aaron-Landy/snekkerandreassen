

const ContactPage = () => {

    return (
        <div className="contact-page">
            <section className="contact-intro">
                <h1>Kontakt oss</h1>
                <p>
                    Har du et prosjekt du vil diskutere? Ta kontakt for en
                    uforpliktende prat, så finner vi ut av det sammen.
                </p>
            </section>

            <div className="contact-content">
                <div className="contact-info-row">
                    <div className="contact-details">
                        <div className="contact-detail-card">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <div>
                                <h3>Telefon</h3>
                                <a href="tel:+4791914482">+47 91914482</a>
                            </div>
                        </div>

                        <div className="contact-detail-card">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <div>
                                <h3>E-post</h3>
                                <a href="mailto:kevinandreassen03@gmail.com">kevinandreassen03@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-detail-card">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <h3>Adresse</h3>
                                <p>3440 Røyken</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map">
    <iframe
        title="Kart over 3440 Røyken"
        src="https://www.google.com/maps?q=3440+R%C3%B8yken&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />
</div>
                </div>

            </div>
        </div>
    )
}

export default ContactPage;