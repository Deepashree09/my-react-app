import { useState } from "react";



const medicalRegSchema = {
  brand: { name: "•practo•", color: "#FF6B35" },
  progress: { current: 2, total: 6 },
  header: { support: "Support", saveExit: "Save & Exit" },
  page: { title: "Medical Registration" },
  infoBox: {
    icon: "💡",
    text: `This information helps us perform critical checks to ensure that only licensed and genuine medical practitioners are listed on Practo. Your profile will get a "Verified" badge on verification. Doctors with verified profiles get 95% more patient views on Practo.`,
  },
  fields: [
    {
      id: "registrationNumber",
      label: "Registration Number",
      type: "text",
      placeholder: "",
      required: true,
    },
    {
      id: "registrationCouncil",
      label: "Registration Council",
      type: "select",
      placeholder: "Select Council",
      required: true,
      options: [
        "Karnataka State Dental Council",
        "Maharashtra Medical Council",
        "Delhi Medical Council",
        "Tamil Nadu Medical Council",
        "Andhra Pradesh Medical Council",
        "Telangana State Medical Council",
        "Kerala State Medical Council",
        "West Bengal Medical Council",
        "Rajasthan Medical Council",
        "Gujarat Medical Council",
        "Medical Council of India",
        "Dental Council of India",
      ],
    },
    {
      id: "registrationYear",
      label: "Registration Year",
      type: "select",
      placeholder: "Select Year",
      required: true,
      options: Array.from({ length: 40 }, (_, i) => String(2025 - i)),
    },
  ],
  footer: { back: "← Back", next: "Next" },
};



function ProgressBar({ current, total }) {
  const pct = (current / total) * 100;
  return (
    <div style={{ width: "100%", height: 4, background: "#E2E8F0", position: "absolute", bottom: 0, left: 0 }}>
      <div style={{
        height: "100%", width: `${pct}%`,
        background: "linear-gradient(90deg, #FF6B35, #F7931E)",
        transition: "width 0.4s ease",
        borderRadius: "0 2px 2px 0",
      }} />
    </div>
  );
}



export default function MedicalRegistration({ onBack, onNext }) {
  const { brand, progress, header, page, infoBox, fields, footer } = medicalRegSchema;

  const [formData, setFormData] = useState({ registrationNumber: "015823", registrationCouncil: "Karnataka State Dental Council", registrationYear: "2025" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (id, val) => {
    setFormData(p => ({ ...p, [id]: val }));
    if (errors[id]) setErrors(p => ({ ...p, [id]: undefined }));
  };

  const validate = () => {
    const e = {};
    fields.forEach(f => {
      if (f.required && !formData[f.id]?.trim()) e[f.id] = `${f.label} is required`;
    });
    return e;
  };

  const handleNext = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
      onNext && onNext(formData);
    }
  };

  const inputBase = (hasErr) => ({
    width: "100%", height: 50, padding: "0 16px", boxSizing: "border-box",
    border: `1.5px solid ${hasErr ? "#EF4444" : "#D1D5DB"}`,
    borderRadius: 6, fontSize: 15, color: "#1E293B", outline: "none",
    background: "#fff", fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  const selectBase = (hasErr) => ({
    ...inputBase(hasErr),
    appearance: "none", cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath fill='%2394A3B8' d='M7 9L2 4h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "calc(100% - 14px) center",
    paddingRight: 40,
  });

  if (submitted) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFC", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1E293B", marginBottom: 8 }}>Registration Verified!</h2>
        <p style={{ color: "#64748B", marginBottom: 24 }}>Your medical registration details have been saved.</p>
        <button onClick={() => setSubmitted(false)} style={{
          padding: "11px 28px", background: "linear-gradient(135deg,#FF6B35,#F7931E)",
          color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>Edit Details</button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Top Navbar */}
      <div style={{
        position: "relative", background: "#fff",
        borderBottom: "1px solid #E8ECF0",
        padding: "0 32px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6B35", display: "inline-block" }} />
            <span style={{ fontSize: 20, fontWeight: 800, color: "#1E293B", letterSpacing: -0.5 }}>practo</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35", display: "inline-block", marginLeft: 2 }} />
          </div>
          <div style={{ width: 1, height: 28, background: "#E2E8F0" }} />
          <span style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>
            Step {progress.current}/{progress.total}
          </span>
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "8px 18px", border: "1.5px solid #E2E8F0",
            borderRadius: 8, background: "#fff", cursor: "pointer",
            fontSize: 13, fontWeight: 600, color: "#374151",
          }}>
            💬 {header.support}
          </button>
          <button style={{
            padding: "8px 18px", border: "none",
            borderRadius: 8, background: "transparent", cursor: "pointer",
            fontSize: 13, fontWeight: 700, color: "#FF6B35",
          }}>
            {header.saveExit}
          </button>
        </div>

        {/* Progress bar */}
        <ProgressBar current={progress.current} total={progress.total} />
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 40px", display: "flex", gap: 60, alignItems: "flex-start" }}>

        {/* Form */}
        <div style={{ flex: 1, maxWidth: 480 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#1E293B", marginBottom: 36 }}>
            {page.title}
          </h2>

          {fields.map(field => (
            <div key={field.id} style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#374151", marginBottom: 8 }}>
                {field.label}
              </label>

              {field.type === "text" && (
                <input
                  type="text"
                  value={formData[field.id]}
                  onChange={e => set(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  style={inputBase(errors[field.id])}
                  onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = errors[field.id] ? "#EF4444" : "#D1D5DB"; e.target.style.boxShadow = "none"; }}
                />
              )}

              {field.type === "select" && (
                <select
                  value={formData[field.id]}
                  onChange={e => set(field.id, e.target.value)}
                  style={selectBase(errors[field.id])}
                  onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; }}
                  onBlur={e => { e.target.style.borderColor = errors[field.id] ? "#EF4444" : "#D1D5DB"; e.target.style.boxShadow = "none"; }}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              )}

              {errors[field.id] && (
                <p style={{ color: "#EF4444", fontSize: 12, marginTop: 5 }}>{errors[field.id]}</p>
              )}
            </div>
          ))}

          {/* Divider */}
          <div style={{ height: 1, background: "#E8ECF0", margin: "40px 0 28px" }} />

          {/* Footer nav */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              onClick={() => onBack && onBack()}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 600, color: "#64748B",
                display: "flex", alignItems: "center", gap: 6,
                padding: "10px 0", transition: "color 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#FF6B35"}
              onMouseLeave={e => e.currentTarget.style.color = "#64748B"}
            >
              {footer.back}
            </button>

            <button
              onClick={handleNext}
              style={{
                padding: "13px 64px",
                background: "linear-gradient(135deg, #FF6B35, #F7931E)",
                color: "#fff", border: "none", borderRadius: 8,
                fontSize: 15, fontWeight: 700, cursor: "pointer",
                boxShadow: "0 4px 14px rgba(255,107,53,0.35)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,107,53,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 4px 14px rgba(255,107,53,0.35)"; }}
            >
              {footer.next}
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div style={{ width: 340, flexShrink: 0, marginTop: 72 }}>
          <div style={{
            border: "1.5px solid #99F6E4",
            borderRadius: 10,
            padding: "20px 22px",
            background: "linear-gradient(135deg, #F0FDFA, #ECFDF5)",
            position: "relative",
          }}>
            <div style={{ fontSize: 22, marginBottom: 10 }}>{infoBox.icon}</div>
            <p style={{
              fontSize: 14, color: "#0F766E", lineHeight: 1.65,
              margin: 0, fontWeight: 500,
            }}>
              {infoBox.text}
            </p>
            {/* Accent bar */}
            <div style={{
              position: "absolute", left: 0, top: 16, bottom: 16,
              width: 4, background: "linear-gradient(180deg, #14B8A6, #06B6D4)",
              borderRadius: "0 2px 2px 0",
            }} />
          </div>

          {/* Verified badge preview */}
          <div style={{
            marginTop: 20, padding: "14px 18px",
            background: "#fff", border: "1px solid #E2E8F0",
            borderRadius: 10, display: "flex", alignItems: "center", gap: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "linear-gradient(135deg, #DCFCE7, #BBF7D0)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>✅</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#15803D" }}>Verified Badge</div>
              <div style={{ fontSize: 11, color: "#64748B" }}>95% more patient views</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
