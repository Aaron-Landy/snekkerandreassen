import { Link } from "react-router-dom";

const Inspection = () => {
    return (
        <section className="inspection">
            <h1 className="inspection-title">Snekker Andreassen</h1>
            <p className="inspection-subtitle">Building things that work, one project at a time.</p>
            <Link to="/contact" className="inspection-cta">Be om gratis befaring!</Link>
        </section>
    )
}

export default Inspection;