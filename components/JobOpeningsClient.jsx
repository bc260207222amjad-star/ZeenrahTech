'use client';

import { useState } from 'react';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import siteData from '@/data/siteData.json';

export default function JobOpeningsClient() {
  const jobs = siteData.jobs || [];
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', portfolio: '', resumeNote: '' });

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-base)', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '3rem 2.5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {jobs.map((job) => (
            <div
              key={job.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '2.25rem',
                borderRadius: '20px',
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ padding: '0.3rem 0.75rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', borderRadius: '50px', border: '1px solid var(--primary-border)' }}>
                    {job.type}
                  </span>
                  <span style={{ padding: '0.3rem 0.75rem', backgroundColor: 'var(--border-subtle)', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.75rem', borderRadius: '50px', border: '1px solid var(--border-subtle)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={12} color="var(--primary)" />
                    <span>{job.location}</span>
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
                  {job.title}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  {job.desc}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job);
                  setApplied(false);
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                APPLY FOR THIS ROLE →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'var(--bg-overlay)', backdropFilter: 'blur(12px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--bg-input)', borderRadius: '24px', padding: '2.5rem', maxWidth: '540px', width: '100%', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-card)', borderTop: '4px solid var(--primary)' }}>
            {applied ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{applicant.name}</strong>. Our engineering recruitment team will review your profile for <strong>{selectedJob.title}</strong> and respond within 3 business days.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="btn btn-primary"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '900', color: 'var(--text-heading)', margin: 0 }}>
                    Apply for {selectedJob.title}
                  </h3>
                  <button type="button" onClick={() => setSelectedJob(null)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--text-muted)' }}>✕</button>
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>FULL NAME *</label>
                  <input type="text" required placeholder="Alex Johnson" value={applicant.name} onChange={(e) => setApplicant({ ...applicant, name: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-base)', color: 'var(--text-heading)', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>EMAIL ADDRESS *</label>
                  <input type="email" required placeholder="alex@domain.com" value={applicant.email} onChange={(e) => setApplicant({ ...applicant, email: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-base)', color: 'var(--text-heading)', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>GITHUB / PORTFOLIO LINK *</label>
                  <input type="url" required placeholder="https://github.com/username" value={applicant.portfolio} onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-base)', color: 'var(--text-heading)', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>WHY ARE YOU A GREAT FIT?</label>
                  <textarea rows={3} placeholder="Briefly describe your Next.js, React or engineering background..." value={applicant.resumeNote} onChange={(e) => setApplicant({ ...applicant, resumeNote: e.target.value })} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-base)', color: 'var(--text-heading)', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  SUBMIT APPLICATION →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
