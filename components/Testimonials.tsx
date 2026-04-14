const testimonials = [
  {
    text: '"Vesica has transformed how our frontline teams work. We eliminated paper entirely and our quality metrics improved by over 35% within the first six months."',
    initials: 'JR',
    avatarClass: 'av-1',
    name: 'James Rodriguez',
    role: 'VP Operations · Global Beverage Co.',
  },
  {
    text: '"The speed at which we could digitize our SOPs was remarkable. Our safety incident rate dropped to zero within the first quarter of deployment."',
    initials: 'SK',
    avatarClass: 'av-2',
    name: 'Sarah Kim',
    role: 'Director of EHS · Chemical Manufacturer',
  },
  {
    text: '"Our new workers are fully productive in half the time compared to before Vesica. The guided instructions make onboarding incredibly efficient."',
    initials: 'MT',
    avatarClass: 'av-3',
    name: 'Marco Torres',
    role: 'Plant Manager · Food Processing Corp.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-tag">Customer Stories</div>
      <h2 className="section-title">What Our Customers Say</h2>
      <p className="section-sub">
        Leading industrial companies trust Vesica to run their most critical operations.
      </p>
      <div className="testi-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className={`testi-avatar ${t.avatarClass}`}>{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
