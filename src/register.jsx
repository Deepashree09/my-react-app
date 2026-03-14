import { useState } from "react";

const countryCodes = [
  { code: "+91", country: "IND", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "GBR", flag: "🇬🇧" },
  { code: "+61", country: "AUS", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "SGP", flag: "🇸🇬" },
];

const formSchema = {
  title: "Join Practo",
  subtitle: "Are you a doctor?",
  subtitleLink: "Register Here",
  fields: [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      id: "mobile",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Mobile Number",
      required: true,
      hasCountryCode: true,
    },
    {
      id: "password",
      label: "Create Password",
      type: "password",
      placeholder: "Create a strong password",
      required: true,
    },
  ],
  checkbox: {
    id: "promotions",
    label: "Receive relevant offers and promotional communication from Practo",
    defaultChecked: true,
  },
  terms: {
    prefix: "By signing up, I agree to",
    linkText: "terms",
  },
  submitButton: "Send OTP",
  tabs: ["Login", "Register"],
};

const navSchema = {
  links: [
    {
      label: "Find Doctors",
      dropdown: ["General Physician", "Dentist", "Dermatologist", "Cardiologist", "Gynecologist", "Pediatrician"],
    },
    {
      label: "Video Consult",
      dropdown: ["Consult Now", "Schedule Consult", "Mental Wellness", "Ayurveda", "Homeopathy"],
    },
    {
      label: "Medicines",
      dropdown: ["Order Medicines", "Upload Prescription", "Health Products", "Vitamins & Nutrition"],
    },
    {
      label: "Lab Tests",
      dropdown: ["Book Test", "Health Packages", "Home Collection", "View Reports"],
    },
    {
      label: "Surgeries",
      dropdown: ["Cataract", "Knee Replacement", "Hair Transplant", "Lasik", "Bariatric Surgery"],
    },
  ],
  rightLinks: [
    { label: "For Corporates", dropdown: ["Corporate Health Plans", "Employee Wellness", "Health Checkups"] },
    { label: "For Providers", dropdown: ["Doctor Login", "Hospital Login", "List Your Practice"] },
    { label: "Security & help", dropdown: ["Help Center", "Privacy Policy", "Terms of Service", "Contact Us"] },
  ],
};

function Globe() {
  return (
    <div style={{ position: "relative", width: 340, height: 340 }}>
      <svg viewBox="0 0 340 340" width="340" height="340" style={{ overflow: "visible" }}>
        {/* Main planet */}
        <ellipse cx="170" cy="185" rx="115" ry="115" fill="url(#planetGrad)" />
        {/* Ring */}
        <ellipse cx="170" cy="200" rx="155" ry="38" fill="none" stroke="#7C3AED" strokeWidth="22" opacity="0.85" />
        <ellipse cx="170" cy="200" rx="155" ry="38" fill="none" stroke="#A78BFA" strokeWidth="8" opacity="0.5" />

        {/* Medical icons on globe */}
        {/* Pill */}
        <g transform="translate(195, 115) rotate(-35)">
          <rect x="-18" y="-8" width="36" height="16" rx="8" fill="#F97316" />
          <rect x="0" y="-8" width="18" height="16" rx="0" fill="#FB923C" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="white" strokeWidth="1.5" />
        </g>
        {/* Heart rate / ECG icon */}
        <g transform="translate(115, 105)">
          <rect x="-22" y="-18" width="44" height="36" rx="7" fill="#7C3AED" />
          <polyline points="-14,0 -6,0 -2,-12 4,12 8,0 14,0" fill="none" stroke="white" strokeWidth="2" />
        </g>
        {/* Stethoscope icon */}
        <g transform="translate(240, 160)">
          <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#0EA5E9" />
          <circle cx="0" cy="-4" r="7" fill="none" stroke="white" strokeWidth="2" />
          <path d="M-7,3 Q-7,14 0,14 Q7,14 7,3" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="0" cy="14" r="3" fill="white" />
        </g>
        {/* Document icon */}
        <g transform="translate(105, 175)">
          <rect x="-18" y="-22" width="36" height="44" rx="5" fill="#10B981" />
          <rect x="-10" y="-14" width="20" height="3" rx="1.5" fill="white" />
          <rect x="-10" y="-7" width="20" height="3" rx="1.5" fill="white" />
          <rect x="-10" y="0" width="12" height="3" rx="1.5" fill="white" />
        </g>
        {/* Pie chart icon */}
        <g transform="translate(200, 235)">
          <circle cx="0" cy="0" r="16" fill="#F59E0B" />
          <path d="M0,0 L0,-16 A16,16 0 0,1 16,0 Z" fill="#FBBF24" />
          <path d="M0,0 L16,0 A16,16 0 0,1 -8,13.8 Z" fill="#F97316" />
        </g>
        {/* User/profile icon */}
        <g transform="translate(148, 255)">
          <rect x="-18" y="-20" width="36" height="40" rx="7" fill="#6366F1" />
          <circle cx="0" cy="-6" r="7" fill="white" opacity="0.85" />
          <path d="M-12,14 Q-12,4 0,4 Q12,4 12,14" fill="white" opacity="0.85" />
        </g>
        {/* Small floating dots */}
        <circle cx="270" cy="120" r="6" fill="#7C3AED" opacity="0.7" />
        <circle cx="290" cy="145" r="4" fill="#F97316" opacity="0.8" />
        <circle cx="80" cy="145" r="5" fill="#0EA5E9" opacity="0.7" />
        <circle cx="60" cy="200" r="4" fill="#10B981" opacity="0.7" />
        <circle cx="285" cy="220" r="5" fill="#F59E0B" opacity="0.7" />

        <defs>
          <radialGradient id="planetGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#0369A1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function PasswordStrength({ password }) {
  const getStrength = (pwd) => {
    if (!pwd) return { level: 0, label: "", color: "" };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return { level: 1, label: "Weak", color: "#EF4444" };
    if (score === 2) return { level: 2, label: "Fair", color: "#F97316" };
    if (score === 3) return { level: 3, label: "Good", color: "#EAB308" };
    return { level: 4, label: "Strong", color: "#22C55E" };
  };
  const s = getStrength(password);
  if (!password) return null;
  return (
    <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 8 }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 4,
            borderRadius: 2,
            background: i <= s.level ? s.color : "#E5E7EB",
            transition: "background 0.3s",
          }}
        />
      ))}
      <span style={{ fontSize: 11, color: s.color, fontWeight: 600, minWidth: 40 }}>{s.label}</span>
    </div>
  );
}

export default function PractoRegister() {
  const [activeTab, setActiveTab] = useState("Register");
  const [formData, setFormData] = useState({ fullName: "", mobile: "", password: "", promotions: true });
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const validate = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = "Full name is required";
    if (!formData.mobile.trim() || !/^\d{7,15}$/.test(formData.mobile)) e.mobile = "Enter a valid mobile number";
    if (!formData.password || formData.password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: 64, borderBottom: "1px solid #F1F5F9",
        background: "#fff", position: "sticky", top: 0, zIndex: 200,
      }} onClick={(e) => { if (e.target === e.currentTarget) setOpenDropdown(null); }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }} onClick={() => setOpenDropdown(null)}>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#2563EB", letterSpacing: -1 }}>·practo</span>
          <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500, marginTop: 6 }}>·</span>
        </div>

        {/* Nav links with dropdowns */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {navSchema.links.map((item) => (
            <div key={item.label} style={{ position: "relative" }}>
              <button
                onClick={() => { setActiveNav(item.label); setOpenDropdown(prev => prev === item.label ? null : item.label); }}
                style={{
                  padding: "8px 12px", background: "none", border: "none",
                  fontSize: 14, cursor: "pointer", fontWeight: 500,
                  color: activeNav === item.label ? "#2563EB" : "#374151",
                  borderBottom: activeNav === item.label ? "2px solid #2563EB" : "2px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "#2563EB"; }}
                onMouseLeave={e => { e.currentTarget.style.color = activeNav === item.label ? "#2563EB" : "#374151"; }}
              >
                {item.label}
              </button>
              {openDropdown === item.label && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, minWidth: 200,
                  background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)", zIndex: 300, padding: "6px 0",
                }}>
                  {item.dropdown.map(opt => (
                    <div key={opt} onClick={() => { setOpenDropdown(null); }}
                      style={{
                        padding: "10px 18px", fontSize: 13, color: "#374151",
                        cursor: "pointer", fontWeight: 500,
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.color = "#2563EB"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                    >{opt}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side with dropdowns */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 12, background: "#EEF2FF", color: "#4F46E5", padding: "3px 8px", borderRadius: 20, fontWeight: 700 }}>NEW</span>
          {navSchema.rightLinks.map((item) => (
            <div key={item.label} style={{ position: "relative" }}>
              <button
                onClick={() => setOpenDropdown(prev => prev === item.label ? null : item.label)}
                style={{
                  padding: "6px 10px", background: "none", border: "none",
                  fontSize: 13, cursor: "pointer", fontWeight: 500,
                  color: openDropdown === item.label ? "#2563EB" : "#374151",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#2563EB"}
                onMouseLeave={e => e.currentTarget.style.color = openDropdown === item.label ? "#2563EB" : "#374151"}
              >{item.label} ▾</button>
              {openDropdown === item.label && (
                <div style={{
                  position: "absolute", top: "100%", right: 0, minWidth: 190,
                  background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)", zIndex: 300, padding: "6px 0",
                }}>
                  {item.dropdown.map(opt => (
                    <div key={opt} onClick={() => setOpenDropdown(null)}
                      style={{ padding: "10px 18px", fontSize: 13, color: "#374151", cursor: "pointer", fontWeight: 500 }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.color = "#2563EB"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                    >{opt}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button style={{
            padding: "7px 18px", border: "1.5px solid #CBD5E1",
            borderRadius: 6, background: "#fff", color: "#374151",
            fontWeight: 600, fontSize: 13, cursor: "pointer",
          }}>Login / Signup</button>
        </div>
      </nav>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 48, borderBottom: "1px solid #F1F5F9", background: "#fff" }}>
        {formSchema.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "14px 4px",
              background: "none",
              border: "none",
              borderBottom: activeTab === tab ? "2.5px solid #06B6D4" : "2.5px solid transparent",
              color: activeTab === tab ? "#06B6D4" : "#64748B",
              fontWeight: activeTab === tab ? 700 : 500,
              fontSize: 15,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >{tab}</button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
        padding: "48px 40px",
      }}>
        {/* Globe illustration */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Globe />
        </div>

        {/* Form Card */}
        <div style={{
          background: "#fff",
          border: "1px solid #E2E8F0",
          borderRadius: 16,
          padding: "36px 36px 32px",
          width: 380,
          boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
              <h2 style={{ color: "#10B981", fontWeight: 800, fontSize: 22, marginBottom: 8 }}>OTP Sent!</h2>
              <p style={{ color: "#64748B", fontSize: 14 }}>
                We've sent a verification code to<br />
                <strong>{countryCode.code} {formData.mobile}</strong>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ marginTop: 20, color: "#06B6D4", background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14 }}
              >← Back to registration</button>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1E293B", margin: 0 }}>{formSchema.title}</h2>
                <p style={{ fontSize: 12.5, color: "#94A3B8", margin: 0, textAlign: "right", lineHeight: 1.5 }}>
                  {formSchema.subtitle}{" "}
                  <span style={{ color: "#2563EB", cursor: "pointer", fontWeight: 600 }}>{formSchema.subtitleLink}</span>
                </p>
              </div>

              {formSchema.fields.map((field) => (
                <div key={field.id} style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                    {field.label}
                  </label>
                  {field.hasCountryCode ? (
                    <div style={{ display: "flex", gap: 8 }}>
                      {/* Country code selector */}
                      <div style={{ position: "relative" }}>
                        <button
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          style={{
                            height: 42,
                            padding: "0 10px",
                            border: "1.5px solid #E2E8F0",
                            borderRadius: 8,
                            background: "#F8FAFC",
                            cursor: "pointer",
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#374151",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {countryCode.flag} {countryCode.code}({countryCode.country}) ▾
                        </button>
                        {showCountryDropdown && (
                          <div style={{
                            position: "absolute",
                            top: 46,
                            left: 0,
                            background: "#fff",
                            border: "1px solid #E2E8F0",
                            borderRadius: 8,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                            zIndex: 50,
                            minWidth: 180,
                          }}>
                            {countryCodes.map((c) => (
                              <div
                                key={c.code}
                                onClick={() => { setCountryCode(c); setShowCountryDropdown(false); }}
                                style={{
                                  padding: "9px 14px",
                                  cursor: "pointer",
                                  fontSize: 13,
                                  color: "#374151",
                                  display: "flex",
                                  gap: 8,
                                  alignItems: "center",
                                  background: countryCode.code === c.code ? "#EFF6FF" : "transparent",
                                  fontWeight: countryCode.code === c.code ? 600 : 400,
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = "#F8FAFC"}
                                onMouseLeave={e => e.currentTarget.style.background = countryCode.code === c.code ? "#EFF6FF" : "transparent"}
                              >
                                <span>{c.flag}</span>
                                <span>{c.code} ({c.country})</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        style={{
                          flex: 1,
                          height: 42,
                          padding: "0 14px",
                          border: `1.5px solid ${errors[field.id] ? "#EF4444" : "#E2E8F0"}`,
                          borderRadius: 8,
                          fontSize: 14,
                          color: "#1E293B",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "#06B6D4"}
                        onBlur={e => e.target.style.borderColor = errors[field.id] ? "#EF4444" : "#E2E8F0"}
                      />
                    </div>
                  ) : (
                    <div style={{ position: "relative" }}>
                      <input
                        type={field.type === "password" ? (showPassword ? "text" : "password") : field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        style={{
                          width: "100%",
                          height: 42,
                          padding: "0 40px 0 14px",
                          border: `1.5px solid ${errors[field.id] ? "#EF4444" : "#E2E8F0"}`,
                          borderRadius: 8,
                          fontSize: 14,
                          color: "#1E293B",
                          outline: "none",
                          boxSizing: "border-box",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "#06B6D4"}
                        onBlur={e => e.target.style.borderColor = errors[field.id] ? "#EF4444" : "#E2E8F0"}
                      />
                      {field.type === "password" && (
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#94A3B8",
                            fontSize: 16,
                            padding: 0,
                          }}
                        >{showPassword ? "🙈" : "👁"}</button>
                      )}
                    </div>
                  )}
                  {field.id === "password" && <PasswordStrength password={formData.password} />}
                  {errors[field.id] && (
                    <p style={{ color: "#EF4444", fontSize: 11.5, marginTop: 4, margin: "4px 0 0" }}>{errors[field.id]}</p>
                  )}
                </div>
              ))}

              {/* Checkbox */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
                <input
                  type="checkbox"
                  id={formSchema.checkbox.id}
                  checked={formData.promotions}
                  onChange={(e) => handleChange("promotions", e.target.checked)}
                  style={{ marginTop: 2, accentColor: "#06B6D4", width: 16, height: 16, cursor: "pointer" }}
                />
                <label htmlFor={formSchema.checkbox.id} style={{ fontSize: 12.5, color: "#64748B", lineHeight: 1.5, cursor: "pointer" }}>
                  {formSchema.checkbox.label}
                </label>
              </div>

              {/* Terms */}
              <p style={{ fontSize: 12, color: "#94A3B8", marginBottom: 20 }}>
                {formSchema.terms.prefix}{" "}
                <span style={{ color: "#2563EB", cursor: "pointer", fontWeight: 600 }}>{formSchema.terms.linkText}</span>
              </p>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "linear-gradient(135deg, #06B6D4, #0284C7)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: 0.3,
                  boxShadow: "0 4px 14px rgba(6,182,212,0.35)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 20px rgba(6,182,212,0.45)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 14px rgba(6,182,212,0.35)"; }}
              >
                {formSchema.submitButton}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
