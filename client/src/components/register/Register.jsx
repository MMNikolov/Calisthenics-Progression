import { GoogleLogin } from "@react-oauth/google"
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"

export default function Register() {
    return (
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />

                    <input className="btn submit" type="submit" value="Register" />
                    
                    <GoogleLogin className = 'google'
                        onSuccess={(credentialResponse) => {
                            const credentialResponseDecoded = jwt_decode(credentialResponse.credential)
                            console.log(credentialResponseDecoded);
                        }}
                        onError = {() => {
                            console.log("Login Failed");
                        }}
                    />

                    <p className="field">
                        <span><Link to="/login">Already have a profile?</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}