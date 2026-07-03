const serviceAreas = [
    "Moss", "Sarpsborg", "Fredrikstad", "Drammen", "Indre Østfold",
    "Skiptvet", "Vestby", "Nordre Follo", "Nesodden", "Bærum",
    "Asker", "Nesbyen", "Lier"
];

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="about-intro">
                <h1>Om Tømrerjuvet</h1>
                <p>
                    Vi er et tømrerfirma med base Røyken,
                    og påtar oss oppdrag i store deler av Viken. Fra mindre
                    reparasjoner til større byggeprosjekter — ingen jobb er
                    for liten, ingen jobb er for stor.
                </p>
            </section>

            <section className="about-rating">
                <div className="rating-score">4.3</div>
                <div className="rating-details">
                    <div className="rating-stars">★★★★☆</div>
                    <p>Basert på 3 evalueringer på Mittanbud</p>
                </div>
            </section>

            <section className="about-reviews">
                <h2>Hva kundene sier</h2>
                <div className="review-cards">
                    <div className="review-card">
                        <div className="review-score">5.0</div>
                        <h3>Fuge benkeplater</h3>
                        <p>
                            Kunden fremhevet god kommunikasjon gjennom hele
                            prosjektet, og var svært fornøyd med sluttresultatet.
                        </p>
                    </div>
                    <div className="review-card">
                        <div className="review-score">4.0</div>
                        <h3>Bygge kattegård</h3>
                        <p>
                            Jobben ble beskrevet som rask og effektivt utført.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-areas">
                <h2>Områder vi opererer i</h2>
                <div className="area-chips">
                    {serviceAreas.map((area) => (
                        <span className="area-chip" key={area}>{area}</span>
                    ))}
                </div>
            </section>

            <section className="about-info">
                <h2>Bedriftsinformasjon</h2>
                <ul>
                    <li><strong>Adresse:</strong> 3440 Røyken</li>
                    <li><strong>Org. nr:</strong> 935 746 388</li>
                    <li><strong>Status:</strong> Verifisert bedrift på Mittanbud</li>
                </ul>
            </section>
        </div>
    )
}

export default AboutPage;