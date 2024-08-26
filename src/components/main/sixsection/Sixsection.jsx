import React, { useState } from 'react';
import './Sixsection.css';

// Erkek ve kadın avatarlarını tanımla
const maleAvatar = 'https://randomuser.me/api/portraits/men/44.jpg'; // Erkek resmi
const femaleAvatar = 'https://randomuser.me/api/portraits/women/44.jpg'; // Kadın resmi

const CommentSection = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: 'Bu şirkət həqiqətən əladır! Onların peşəkarlığı və müştəri diqqəti əladır.',
      author: 'Farhad Sultan, Frontend Developer',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
    {
      text: 'Xidmət keyfiyyəti gözləntilərimizdən xeyli yüksək idi. Mən tövsiyə edirəm!',
      author: 'Asad Aliyev, Director',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
    {
      text: 'Şirkətin dəstəyi və müştəri xidməti çox yaxşıdır. Məmnun qaldım.',
      author: 'Leyla Abbasova, Designer',
      date: new Date().toLocaleString(),
      gender: 'female',
    },
    {
      text: 'Mükəmməl bir təcrübə yaşadım, xidmət çox peşəkardır!',
      author: 'Ramil Məmmədov, Software Engineer',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
    {
      text: 'İlk dəfə istifadə etdim və çox məmnun qaldım. Şiddətlə tövsiyə edirəm!',
      author: 'Gülnar Əliyeva, Marketing Specialist',
      date: new Date().toLocaleString(),
      gender: 'female',
    },
    {
      text: 'Dəstək və müştəri xidmətləri çox yaxşı. Yenidən istifadə edəcəyəm.',
      author: 'Elvin Cəfərov, Business Analyst',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({ text: '', author: '', gender: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'author') {
      if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
        const formattedValue = value
          .toLowerCase()
          .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
        setNewTestimonial((prev) => ({ ...prev, [name]: formattedValue }));
      }
    } else if (name === 'gender') {
      setNewTestimonial((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewTestimonial((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.text && newTestimonial.author && newTestimonial.gender) {
      setTestimonials((prev) => [
        ...prev,
        { ...newTestimonial, date: new Date().toLocaleString() },
      ]);
      setNewTestimonial({ text: '', author: '', gender: '' });
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonial-form">
        <h3>Fikrinizi bizimlə bölüşün</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            value={newTestimonial.text}
            onChange={handleChange}
            placeholder="Şərhinizi bura yazın..."
            required
          ></textarea>
          <input
            type="text"
            name="author"
            value={newTestimonial.author}
            onChange={handleChange}
            placeholder="Adınız və Sahəniz"
            required
            pattern="[A-Za-z\s]*"
            title="Zəhmət olmasa yalnız hərf və boşluq daxil edin."
          />
          <select
            name="gender"
            value={newTestimonial.gender}
            onChange={handleChange}
            required
          >
            <option value="">Cinsiyyətinizi seçin</option>
            <option value="male">Kişi</option>
            <option value="female">Qadın</option>
          </select>
          <button type="submit">Şərh Yaz</button>
        </form>
      </div>
      <h2>Müştəri Şərhləri</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="testimonial-avatar">
              <img
                src={testimonial.gender === 'female' ? femaleAvatar : maleAvatar}
                alt={testimonial.gender}
              />
            </div>
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
              <span>- {testimonial.author}</span>
              <span className="testimonial-date">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
