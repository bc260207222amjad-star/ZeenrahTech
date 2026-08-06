'use client';

import { useState } from 'react';

export default function ContactSection({ siteMeta = {}, faqs = [] }) {
  const meta = siteMeta;
  const targetEmail = meta.email || 'contact@zeenrahtechnologies.com';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Application Development (Next.js / React)',
    budget: '$25,000 - $50,000',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setModalDetails({
          to: targetEmail,
          subject: data.details?.subject || `🚀 New Estimation Request: ${formData.name} - ${formData.service}`,
          sender: `${formData.name} <${formData.email}>`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
        setShowModal(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Web Application Development (Next.js / React)',
      budget: '$25,000 - $50,000',
      message: ''
    });
  };

  return (
    <section style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#0b0f19', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.45rem 1.3rem',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              color: '#06b6d4',
              fontWeight: '800',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderRadius: '50px',
              marginBottom: '1rem',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            LET'S BUILD TOGETHER
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#ffffff',
              lineHeight: '1.2',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Request a Free <span className="text-gradient-cyan">Project Estimation</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#cbd5e1',
              lineHeight: '1.65',
              maxWidth: '720px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            Tell us about your project requirements, technology stack, and timeline. Our engineering leads will respond within 24 hours with a detailed technical roadmap.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'start' }}>
          {/* Form Card */}
          <div
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Wright"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0f172a',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0f172a',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0f172a',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Fintech Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0f172a',
                      fontSize: '0.95rem',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    CORE SERVICE NEEDED
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0f172a',
                      fontSize: '0.925rem',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option>Web Application Development (Next.js / React)</option>
                    <option>Mobile App Engineering (iOS / Android)</option>
                    <option>AI & Machine Learning Solutions</option>
                    <option>Cloud Computing & DevOps Infrastructure</option>
                    <option>Dedicated Developer Squads</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                    ESTIMATED BUDGET
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: '#0f172a',
                      fontSize: '0.925rem',
                      color: '#ffffff',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                  PROJECT OVERVIEW & REQUIREMENTS
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project goals, tech stack preferences, and target timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '1rem 1.1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: '#0f172a',
                    fontSize: '0.95rem',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2 a 10 10 0 0 1 10 10" />
                    </svg>
                    <span>SENDING EMAIL...</span>
                  </>
                ) : (
                  <span>SUBMIT ESTIMATE REQUEST →</span>
                )}
              </button>
            </form>
          </div>

          {/* Right Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: '4px solid #6366f1'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                📍 Global Headquarters
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {meta.address || 'Zeenrah Tech Hub Towers, Suite 400'}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: '4px solid #06b6d4'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                📧 Direct Engineering Email
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {targetEmail}
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderLeft: '4px solid #8b5cf6'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                📞 24/7 Client Helpline
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {meta.phone || '+1 (800) 555-ZEENRAH'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 STUNNING CUSTOM POP-UP SUCCESS MODAL */}
      {showModal && modalDetails && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(99, 102, 241, 0.2)',
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            {/* Close Cross Button */}
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#94a3b8',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              ✕
            </button>

            {/* Glowing Animated Checkmark Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                border: '2px solid #06b6d4',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Badge */}
            <div
              style={{
                display: 'inline-block',
                padding: '0.35rem 1rem',
                backgroundColor: 'rgba(6, 182, 212, 0.15)',
                color: '#06b6d4',
                fontWeight: '800',
                fontSize: '0.75rem',
                borderRadius: '50px',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}
            >
              EMAIL SENT SUCCESSFULLY
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', marginBottom: '0.75rem' }}>
              Project Estimate Received!
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              Your email has been dispatched with a custom project subject line to our engineering team. We will review your scope and get back to you within 24 hours.
            </p>

            {/* Email Details Summary Card */}
            <div
              style={{
                backgroundColor: 'rgba(11, 15, 25, 0.8)',
                borderRadius: '16px',
                padding: '1.25rem',
                textAlign: 'left',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '2rem',
                fontSize: '0.875rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#06b6d4', fontWeight: '800', width: '80px', flexShrink: 0 }}>SUBJECT:</span>
                <span style={{ color: '#ffffff', fontWeight: '700', wordBreak: 'break-word' }}>{modalDetails.subject}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#06b6d4', fontWeight: '800', width: '80px', flexShrink: 0 }}>SENT TO:</span>
                <span style={{ color: '#ffffff', fontWeight: '600' }}>{modalDetails.to}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: '#06b6d4', fontWeight: '800', width: '80px', flexShrink: 0 }}>SENDER:</span>
                <span style={{ color: '#cbd5e1' }}>{modalDetails.sender}</span>
              </div>
            </div>

            {/* Done Action Button */}
            <button
              onClick={handleCloseModal}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: '12px',
                fontWeight: '800',
                fontSize: '0.95rem'
              }}
            >
              GOT IT, THANK YOU ✨
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
