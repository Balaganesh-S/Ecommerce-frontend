import styles from "./LoginPage.module.css";
import animation from "../assets/animation.webm";
export default function LoginPage() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.poster}>
          <h1>Login</h1>
          <p>Login to access your cart, orders, etc..</p>
          <div className={styles.video}>
            <video autoPlay loop muted playsInline width="200" height="200">
              <source src={animation} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <div className={styles.register}>
            <p>Don't have an account?</p> <a href=""> Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}
