import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const newdata = { ...formData }
    newdata[e.target.id] = e.target.value
    setFormData(newdata);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost/telegram.php', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Помилка відправки запиту:', error);
    }
  };
  return (
    <motion.div className='form-container'
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}>
      <form className='log-form' onSubmit={handleSubmit}>
        <h2 className="title-1">Залиште заяву для отримання застосунку</h2>
        <label>
          <br />
          <strong>ПІБ:</strong>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          <strong>Телефон:</strong>
          <input type="number" id="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          <strong>Email:</strong>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit" className="btn">Відправити</button>
      </form>
    </motion.div>
  );
};

export default Form;