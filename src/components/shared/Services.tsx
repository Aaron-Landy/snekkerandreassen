const services = [
    "Tilbygg",
    "Platting",
    "Pergola / uteområde",
    "Garasje",
    "Tak",
    "Dører",
    "Vinduer",
    "Gulv",
    "Fasade",
    "Etterisolering"
];

const Services = () => {
    return (
        <section className="services">
            <h2 className="services-title">Hva jeg tilbyr</h2>
            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card" key={service}>
                        <span className="service-name">{service}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;