import { Link } from "react-router-dom";

export default function Login() {
    return(
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span><Link to="/register">Don't have a profile?</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}