import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footerPage}>
            <div className={styles.footer}>
                <a href="https://www.themealdb.com/api.php" target="_blank" rel="noreferrer"><h2>Created using TheMealDB API</h2></a>
                <a href="https://github.com/vcow10kar" target="_blank" rel="noreferrer"><h3>Developed by Vaishnavi Kawthankar</h3></a>
            </div>
        </div>

    )
}

export default Footer;