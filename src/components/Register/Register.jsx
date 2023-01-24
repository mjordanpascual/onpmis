import './register.css';

export const Register = () => {
    return (
        <div>
            <form className="form-container">
                <label htmlFor="name">First name:</label>
                <input type="text" placeholder="Enter your First name" id="firstname" name="firstname" />
                <label htmlFor="middlename">Middle name:</label>
                <input type="text" placeholder="Enter your Middle name" id="middlename" name="middlename" />
                <label htmlFor="lastname">Last name:</label>
                <input type="lastname" placeholder="Enter your Last name" id="lastname" name="lastname" />
                <label htmlFor="lastname">Contact No.</label>
                <input type="contact" placeholder="Contact #" id="contact" name="contact" />
                <button>Submit</button>
            </form>
        </div>
    )
}