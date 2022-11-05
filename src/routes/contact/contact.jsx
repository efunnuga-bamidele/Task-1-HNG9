//styles
import './contact.styles.css';

const Contact = () => {
    const name = "ebamidele"
    return(
        <div className='contact__form'>
            <form className='row g-3'>
                <h2>Contact Me</h2>
                <p className='mt-2 mb-2'>Hi there, contact me to ask about anything you have in mind.</p>
                
                <div className="col-md-6">
                    <label className='form-label'>First name</label>
                    <input className='form-control' type="text" id='first_name' placeholder='Enter your first name' required />
                </div>  
                <div className="col-md-6">
                    <label className='form-label'>Last name</label>
                    <input className='form-control' type="text" id='last_name' placeholder='Enter your last name' required /> 
                </div>
            

                <div className="col-md-12">
                    <label className='form-label'>Email</label>
                    <input className='form-control' type="email" id='email' placeholder='yourname@email.com' required />
                    
                </div>
                <div className="form-group">
                    <label className='form-label'>Message</label>
                    <textarea className='form-control' id="message" cols="30" rows="6" placeholder="Send me a message and I'll reply you as soon as possible" required ></textarea>
                    
                </div>
                <div className="row mb-3 mt-3">
                    <div className="col-sm-10 ">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="check_box" />
                        <label className="form-check-label" >
                            You agree to provide your data to {name} who may contact you
                        </label>
                    </div>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button class="btn btn-primary" type='submit' id="btn__submit">Send Message</button>
                </div>
            </form>

        </div>
    )
}

export default Contact;