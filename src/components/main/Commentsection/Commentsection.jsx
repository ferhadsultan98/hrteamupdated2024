import React, { useState } from 'react';
import './Commentsection.css';
import { useTranslation } from 'react-i18next';

const maleAvatar = 'https://randomuser.me/api/portraits/men/44.jpg';
const femaleAvatar = 'https://randomuser.me/api/portraits/women/44.jpg';

const CommentSection = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([
    {
      text: 'Bu şirkət həqiqətən əladır! Onların peşəkarlığı və müştəri diqqəti əladır.',
      author: 'Farhad, Frontend Developer',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
    {
      text: 'Xidmət keyfiyyəti gözləntilərimizdən xeyli yüksək idi. Mən tövsiyə edirəm!',
      author: 'Asad, Direktor',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
    {
      text: 'Şirkətin dəstəyi və müştəri xidməti çox yaxşıdır. Məmnun qaldım.',
      author: 'Leyla, UI/UX dizayner',
      date: new Date().toLocaleString(),
      gender: 'female',
    },
    {
      text: 'Mükəmməl bir təcrübə yaşadım, xidmət çox peşəkardır!',
      author: 'Ramil , Proqramlaşdırma Mühəndisi',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
    {
      text: 'İlk dəfə istifadə etdim və çox məmnun qaldım. Şiddətlə tövsiyə edirəm!',
      author: 'Gülnar, Marketinq Mütəxəssisi',
      date: new Date().toLocaleString(),
      gender: 'female',
    },
    {
      text: 'Dəstək və müştəri xidmətləri çox yaxşı. Yenidən istifadə edəcəyəm.',
      author: 'Əli, Satınalma Mütəxəssisi',
      date: new Date().toLocaleString(),
      gender: 'male',
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({ text: '', author: '', gender: '' });
  const [animationClass, setAnimationClass] = useState('');

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
      setAnimationClass('slide-in'); // Trigger animation
      setTestimonials((prev) => [
        { ...newTestimonial, date: new Date().toLocaleString(), animation: 'slide-in' },
        ...prev,
      ]);
      setNewTestimonial({ text: '', author: '', gender: '' });
    }
  };

  return (
    <div className="testimonials">
      <div className="testimonial-form">
        <h3>{t('main.commentsectionopinions')}</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            value={newTestimonial.text}
            onChange={handleChange}
            placeholder={t('main.commentsectionplaceholderone')}
            required
          ></textarea>
          <input
            type="text"
            name="author"
            value={newTestimonial.author}
            onChange={handleChange}
            placeholder={t('main.commentsectionplaceholdertwo')}
            required
            pattern="[A-Za-z\s]*"
          />
          <select
            name="gender"
            value={newTestimonial.gender}
            onChange={handleChange}
            required
          >
            <option value="">{t('main.commentsectiongendersection')}</option>
            <option value="male">{t('main.commentsectiongendermale')}</option>
            <option value="female">{t('main.commentsectiongenderfemale')}</option>
          </select>
          <button type="submit">{t('main.commentsectionwritecomment')}</button>
        </form>
      </div>
      <h2>{t('main.commentsectionclientcomments')}</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-item ${testimonial.animation || ''}`}
            onAnimationEnd={() => {
              // Remove the animation class after animation ends
              setTestimonials((prev) =>
                prev.map((item, i) =>
                  i === index ? { ...item, animation: '' } : item
                )
              );
              setAnimationClass(''); // Reset the animation class
            }}
          >
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
