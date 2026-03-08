'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Note: Form submission requires backend integration
    // Options: Formspree, Netlify Forms, or custom backend endpoint
    // For now, this logs the data and shows a message
    console.log('Form data:', formData);

    // Placeholder for actual submission logic
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <main style={{ backgroundColor: 'var(--p5-bg-deep)', color: 'var(--p5-text)' }}>
      {/* Hero Section */}
      <section
        style={{
          padding: '80px 24px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(226, 232, 240, 0.1)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p
            className="p5-kicker"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--p5-accent)',
              marginBottom: '16px',
            }}
          >
            Contact Us
          </p>
          <h1
            className="p5-h1"
            style={{
              fontSize: '48px',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '24px',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Let's Talk About Your Pipeline
          </h1>
          <p
            className="p5-subtitle"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'var(--p5-text-dim)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Whether you're ready to book a demo or just want to learn more about how IntentID, VisitorID, and InboxID work, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: 'var(--p5-bg-surface)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Phone Card */}
          <div
            className="p5-card"
            style={{
              padding: '32px',
              backgroundColor: 'var(--p5-bg-deep)',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              borderRadius: 'var(--p5-radius)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--p5-accent)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 199, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'var(--p5-accent)',
              }}
            >
              Phone
            </h3>
            <p style={{ marginBottom: '12px' }}>
              <span style={{ color: 'var(--p5-text-dim)', fontSize: '14px' }}>Cell:</span>
              <br />
              <a
                href="tel:+17604973986"
                style={{
                  color: 'var(--p5-text)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                (760) 497-3986
              </a>
            </p>
            <p>
              <span style={{ color: 'var(--p5-text-dim)', fontSize: '14px' }}>Office:</span>
              <br />
              <a
                href="tel:+17604443078"
                style={{
                  color: 'var(--p5-text)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                (760) 444-3078
              </a>
            </p>
          </div>

          {/* Email Card */}
          <div
            className="p5-card"
            style={{
              padding: '32px',
              backgroundColor: 'var(--p5-bg-deep)',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              borderRadius: 'var(--p5-radius)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--p5-accent)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 199, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'var(--p5-accent)',
              }}
            >
              Email
            </h3>
            <p>
              <a
                href="mailto:robert@p5marketing.com"
                style={{
                  color: 'var(--p5-text)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  wordBreak: 'break-all',
                }}
              >
                robert@p5marketing.com
              </a>
            </p>
          </div>

          {/* Hours Card */}
          <div
            className="p5-card"
            style={{
              padding: '32px',
              backgroundColor: 'var(--p5-bg-deep)',
              border: '1px solid rgba(226, 232, 240, 0.1)',
              borderRadius: 'var(--p5-radius)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--p5-accent)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 199, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'var(--p5-accent)',
              }}
            >
              Hours
            </h3>
            <p style={{ fontSize: '16px', fontWeight: '500' }}>
              Monday through Friday
            </p>
            <p style={{ color: 'var(--p5-text-dim)' }}>9:00 AM to 5:00 PM PST</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: 'var(--p5-bg-deep)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Name Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="name"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--p5-text)',
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                style={{
                  padding: '12px 16px',
                  fontSize: '16px',
                  backgroundColor: 'var(--p5-bg-surface)',
                  border: '1px solid rgba(226, 232, 240, 0.2)',
                  borderRadius: 'calc(var(--p5-radius) / 2)',
                  color: 'var(--p5-text)',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--p5-accent)';
                  e.target.style.boxShadow = '0 0 12px rgba(0, 229, 199, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--p5-text)',
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={{
                  padding: '12px 16px',
                  fontSize: '16px',
                  backgroundColor: 'var(--p5-bg-surface)',
                  border: '1px solid rgba(226, 232, 240, 0.2)',
                  borderRadius: 'calc(var(--p5-radius) / 2)',
                  color: 'var(--p5-text)',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--p5-accent)';
                  e.target.style.boxShadow = '0 0 12px rgba(0, 229, 199, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Phone Field (Optional) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="phone"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--p5-text)',
                }}
              >
                Phone <span style={{ color: 'var(--p5-text-dim)', fontWeight: '400' }}>(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                style={{
                  padding: '12px 16px',
                  fontSize: '16px',
                  backgroundColor: 'var(--p5-bg-surface)',
                  border: '1px solid rgba(226, 232, 240, 0.2)',
                  borderRadius: 'calc(var(--p5-radius) / 2)',
                  color: 'var(--p5-text)',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--p5-accent)';
                  e.target.style.boxShadow = '0 0 12px rgba(0, 229, 199, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Company Field (Optional) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="company"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--p5-text)',
                }}
              >
                Company <span style={{ color: 'var(--p5-text-dim)', fontWeight: '400' }}>(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                style={{
                  padding: '12px 16px',
                  fontSize: '16px',
                  backgroundColor: 'var(--p5-bg-surface)',
                  border: '1px solid rgba(226, 232, 240, 0.2)',
                  borderRadius: 'calc(var(--p5-radius) / 2)',
                  color: 'var(--p5-text)',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--p5-accent)';
                  e.target.style.boxShadow = '0 0 12px rgba(0, 229, 199, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Message Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--p5-text)',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your pipeline and how we can help..."
                rows="5"
                style={{
                  padding: '12px 16px',
                  fontSize: '16px',
                  backgroundColor: 'var(--p5-bg-surface)',
                  border: '1px solid rgba(226, 232, 240, 0.2)',
                  borderRadius: 'calc(var(--p5-radius) / 2)',
                  color: 'var(--p5-text)',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--p5-accent)';
                  e.target.style.boxShadow = '0 0 12px rgba(0, 229, 199, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(226, 232, 240, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: 'var(--p5-accent)',
                color: 'var(--p5-bg-deep)',
                border: 'none',
                borderRadius: 'calc(var(--p5-radius) / 2)',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '8px',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = 'var(--p5-accent-alt)';
                  e.target.style.boxShadow = '0 8px 24px rgba(123, 97, 255, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = 'var(--p5-accent)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <p
            style={{
              marginTop: '32px',
              fontSize: '13px',
              color: 'var(--p5-text-dim)',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            Note: This form requires backend integration. Connect to Formspree, Netlify Forms, or your own API endpoint to handle submissions.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: 'var(--p5-bg-surface)',
          textAlign: 'center',
          borderTop: '1px solid rgba(226, 232, 240, 0.1)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: '700',
              marginBottom: '24px',
            }}
          >
            Prefer to schedule directly?
          </h2>
          <a
            href="#calendar"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              fontSize: '16px',
              fontWeight: '600',
              backgroundColor: 'var(--p5-accent-alt)',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: 'calc(var(--p5-radius) / 2)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--p5-accent)';
              e.target.style.boxShadow = '0 8px 24px rgba(0, 229, 199, 0.3)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--p5-accent-alt)';
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Book a Demo Call
          </a>
        </div>
      </section>
    </main>
  );
}
