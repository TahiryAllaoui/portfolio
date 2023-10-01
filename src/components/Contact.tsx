import '../style/Contact.scss';
import {SlSocialFacebook, SlSocialGithub, SlSocialGoogle} from 'react-icons/sl';


function Contact({className}:{className : string}) {
  return (
    <div className={`Contact ${className}`} id='contact'>
        <h2>Contact:</h2>
        <div className="contact-container">
            <div className="contact-links">
                <p>Some comments or advice? Feel free to text me at: </p>
                <div className="logos">
                    <a href="#"><SlSocialGithub /></a> 
                    <a href="#"><SlSocialGoogle /></a>
                    <a href='#'><SlSocialFacebook /></a>
                </div>
            </div>
            <form>
                <div className="user">
                    <div className="user-info">
                        <label htmlFor="">Name:</label>
                        <input type="text" />
                    </div>
                    <div className="user-info">
                       <label htmlFor="">Email:</label>
                        <input type="email" />
                    </div>
                </div>
                <div className="comment">
                        <label htmlFor="">Write here:</label>
                        <textarea cols={30} rows={10} placeholder='Aa'></textarea>
                </div>
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;