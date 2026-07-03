const MainFooter = () => {
    return (
        <footer className="footer mt-auto">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">Kevin Andreassen</span>
                    <p>Building things that work, one project at a time.</p>
                </div>

                <div className="footer-contact">
                    <h4>Kontakt</h4>
                    <a href="tel:+4791914482">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        +47 91914482
                    </a>
                    <a href="mailto:kevinandreassen03@gmail.com">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        kevinandreassen03@gmail.com
                    </a>
                </div>

                <div className="footer-social">
                    <h4>Følg meg</h4>
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/snekkerandreassen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kevin Andreassen. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MainFooter;