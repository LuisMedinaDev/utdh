import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <button className={styles.Hamburger}>
                        <img src="hamburguer.svg" alt="" />
                    </button>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}