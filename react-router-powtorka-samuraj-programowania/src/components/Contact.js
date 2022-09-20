import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [textareaValue, setTextareaValue] = useState('');

    const handleChange = (e) => {
        setTextareaValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ZPISANE: ', textareaValue);
        setTextareaValue('');
    }

    return (
        <div className='contact'>
            <h1>KONTAKT</h1>
            <form onSubmit={handleSubmit}>
                <h3>Napisz do nas!</h3>
                <textarea
                    value={textareaValue}
                    onChange={handleChange}
                    placeholder="Wpisz wiadomość..."
                ></textarea>
                <button>WYŚLIJ</button>
            </form>
        </div>
    );
}

export default Contact;