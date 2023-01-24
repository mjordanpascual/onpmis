import './Login.css';

export const Login = () => {
    return (
        <div>
            <form className="form-container">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button>Submit</button>
            </form>
        </div>
    )
}