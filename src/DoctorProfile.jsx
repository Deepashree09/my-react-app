import { useState } from "react";

const profileSchema = {
  brand: { name: "practo", logo: "🩺" },
  greeting: { prefix: "Hello", suffix: "! Lets build your dedicated profile." },
  section: "Section A: Profile details",
  fields: [
    {
      id: "title",
      label: "Name",
      type: "select-inline",
      options: ["Dr.", "Mr.", "Ms."],
      pairedWith: "name",
    },
    {
      id: "name",
      label: null,
      type: "text",
      placeholder: "Please enter your Name",
    },
    {
      id: "specialization",
      label: "Specialization",
      type: "select",
      placeholder: "Select Specialization",
      options: [
        "General Physician", "Dentist", "Cardiologist", "Dermatologist",
        "Gynecologist", "Neurologist", "Orthopedic", "Pediatrician",
        "Psychiatrist", "ENT Specialist", "Ophthalmologist", "Urologist",
      ],
    },
    {
      id: "gender",
      label: "Gender",
      type: "radio",
      options: ["Male", "Female", "Other"],
    },
    {
      id: "city",
      label: "City",
      type: "select",
      placeholder: "Select City",
      options: [
        "Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad",
        "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
      ],
    },
  ],
  submitButton: "Continue",
  footerText: "If you are not a doctor and owns an establishment",
  footerLink: "Click here",
};

const sidebarNav = [
  { icon: "👤", label: "Profile",      active: true  },
  { icon: "📅", label: "Calendar",     active: false },
  { icon: "📋", label: "Records",      active: false },
  { icon: "🏆", label: "Awards",       active: false },
  { icon: "📊", label: "Analytics",    active: false },
  { icon: "⚙️", label: "Settings",     active: false },
  { icon: "👥", label: "Patients",     active: false },
  { icon: "🎯", label: "Goals",        active: false },
  { icon: "📢", label: "Marketing",    active: false },
  { icon: "💬", label: "Messages",     active: false },
  { icon: "📝", label: "Notes",        active: false },
];

// ─── Mock Doctor Preview Card ───────────────────────────────────────────────

function DoctorPreviewCard({ formData }) {
  const name = formData.name ? `Dr. ${formData.name}` : "Dr. Your Name";
  const spec = formData.specialization || "Specialization";
  const city = formData.city || "Your City";

  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
      overflow: "hidden",
      width: "100%",
      maxWidth: 480,
    }}>
      {/* Practo header bar */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}>
        <span style={{ color: "#2DBDBD", fontWeight: 800, fontSize: 16 }}>●practo</span>
        <div style={{
          flex: 1, background: "#f5f5f5", borderRadius: 6,
          padding: "5px 10px", fontSize: 11, color: "#aaa"
        }}>Search doctors, clinics, hospitals...</div>
      </div>

      {/* Profile section */}
      <div style={{ padding: "16px 20px", borderBottom: "1px solid #f5f5f5" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          {/* Avatar */}
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: "linear-gradient(135deg, #06B6D4, #0284C7)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, flexShrink: 0,
          }}>👨‍⚕️</div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e" }}>{name}</span>
              {formData.name && (
                <span style={{
                  background: "#e8f5e9", color: "#2e7d32",
                  fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 10
                }}>✓ Verified</span>
              )}
            </div>
            <div style={{ color: "#555", fontSize: 12, marginTop: 2 }}>{spec}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: "#f59e0b", fontSize: 11 }}>★</span>
              ))}
              <span style={{ fontSize: 11, color: "#888" }}>(0 ratings)</span>
            </div>
            {formData.name && (
              <p style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.4 }}>
                {name} is a professional {spec.toLowerCase()} based in {city}.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", borderBottom: "1px solid #f0f0f0",
        padding: "0 16px", gap: 20,
      }}>
        {["Info", "Feedback", "Consult Q&A", "HealthFeed"].map((tab, i) => (
          <span key={tab} style={{
            fontSize: 12, padding: "10px 0",
            borderBottom: i === 0 ? "2px solid #2DBDBD" : "2px solid transparent",
            color: i === 0 ? "#2DBDBD" : "#888",
            cursor: "pointer", fontWeight: i === 0 ? 600 : 400,
          }}>{tab}</span>
        ))}
      </div>

      {/* Clinic info */}
      <div style={{ padding: "14px 20px" }}>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>
          📍 {city}{city === "Your City" ? "" : ", India"}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, color: "#333", fontWeight: 500 }}>MON – FRI</div>
            <div style={{ fontSize: 11, color: "#888" }}>9:00 AM – 7:00 PM</div>
          </div>
          <button style={{
            background: "#2DBDBD", color: "#fff",
            border: "none", borderRadius: 6,
            padding: "7px 16px", fontSize: 12,
            fontWeight: 600, cursor: "pointer",
          }}>Book Appointment</button>
        </div>
      </div>

      {/* Mobile preview strip */}
      <div style={{
        background: "#f8f9fa", borderTop: "1px solid #eee",
        padding: "10px 20px", display: "flex", alignItems: "center", gap: 10
      }}>
        <div style={{
          background: "#fff", borderRadius: 10, padding: "8px 12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)", flex: 1,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            background: "linear-gradient(135deg, #06B6D4, #0284C7)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
          }}>👨‍⚕️</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e" }}>{name}</div>
            <div style={{ fontSize: 10, color: "#888" }}>{spec}</div>
          </div>
          <div style={{
            marginLeft: "auto", background: "#e8f5e9", color: "#2e7d32",
            fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 8
          }}>91%</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function DoctorProfile() {
  const [formData, setFormData] = useState({
    title: "Dr.",
    name: "",
    specialization: "",
    gender: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())        e.name           = "Name is required";
    if (!formData.specialization)     e.specialization = "Please select a specialization";
    if (!formData.gender)             e.gender         = "Please select a gender";
    if (!formData.city)               e.city           = "Please select a city";
    return e;
  };

  const handleChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: undefined }));
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", background: "#f7f9fc",
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        <div style={{
          background: "#fff", borderRadius: 20, padding: "60px 48px",
          textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
          maxWidth: 420,
        }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <h2 style={{ color: "#1a1a2e", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
            Profile Created!
          </h2>
          <p style={{ color: "#64748B", fontSize: 14, marginBottom: 24 }}>
            Welcome, {formData.title} {formData.name}! Your Practo doctor profile is ready.
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ title: "Dr.", name: "", specialization: "", gender: "", city: "" }); }}
            style={{
              background: "#F59E0B", color: "#fff", border: "none",
              borderRadius: 8, padding: "12px 32px", fontSize: 15,
              fontWeight: 700, cursor: "pointer",
            }}
          >Go to Dashboard</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex",
      background: "#f7f9fc",
    }}>
      {/* ── Sidebar ── */}
      <div style={{
        width: 72,
        background: "#fff",
        borderRight: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 16,
        gap: 4,
        flexShrink: 0,
      }}>
        {/* Brand */}
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: "linear-gradient(135deg, #2DBDBD, #0284C7)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, marginBottom: 12,
        }}>🩺</div>

        {sidebarNav.map((item) => (
          <div key={item.label} title={item.label} style={{
            width: 44, height: 44, borderRadius: 10,
            background: item.active ? "#e0f7f7" : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, cursor: "pointer",
            transition: "background 0.2s",
          }}>{item.icon}</div>
        ))}

        {/* Bottom brand */}
        <div style={{ marginTop: "auto", paddingBottom: 16, fontSize: 9, color: "#aaa", textAlign: "center" }}>
          practo<br/>
          <span style={{ color: "#2DBDBD" }}>.com</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <div style={{
          background: "#fff", borderBottom: "1px solid #eee",
          padding: "14px 32px", display: "flex",
          alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontWeight: 700, fontSize: 20, color: "#1a1a2e" }}>Profile</span>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#f0f0f0", display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer",
          }}>👤</div>
        </div>

        {/* Body */}
        <div style={{
          flex: 1, display: "flex", gap: 40,
          padding: "40px 48px", alignItems: "flex-start",
          flexWrap: "wrap",
        }}>
          {/* ── Form ── */}
          <div style={{ flex: "1 1 340px", maxWidth: 480 }}>
            <h2 style={{
              fontSize: 26, fontWeight: 700, color: "#1a1a2e",
              lineHeight: 1.3, marginBottom: 6,
            }}>
              Hello{formData.name ? ` ${formData.title} ${formData.name}` : ""}!{" "}
              <span style={{ fontWeight: 400 }}>Lets build your dedicated profile.</span>
            </h2>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 28 }}>
              {profileSchema.section}
            </p>

            {/* Name row (inline title + text) */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                Name
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  value={formData.title}
                  onChange={e => handleChange("title", e.target.value)}
                  style={{
                    width: 90, height: 44,
                    border: "1.5px solid #E2E8F0", borderRadius: 8,
                    padding: "0 10px", fontSize: 13, fontWeight: 600,
                    color: "#374151", background: "#F8FAFC", cursor: "pointer",
                    outline: "none",
                  }}
                >
                  {["Dr.", "Mr.", "Ms."].map(o => <option key={o}>{o}</option>)}
                </select>
                <input
                  type="text"
                  placeholder="Please enter your Name"
                  value={formData.name}
                  onChange={e => handleChange("name", e.target.value)}
                  style={{
                    flex: 1, height: 44, padding: "0 14px",
                    border: `1.5px solid ${errors.name ? "#EF4444" : "#E2E8F0"}`,
                    borderRadius: 8, fontSize: 14, color: "#1E293B",
                    outline: "none", transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "#2DBDBD"}
                  onBlur={e => e.target.style.borderColor = errors.name ? "#EF4444" : "#E2E8F0"}
                />
              </div>
              {errors.name && <p style={{ color: "#EF4444", fontSize: 11.5, marginTop: 4 }}>{errors.name}</p>}
            </div>

            {/* Specialization */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                Specialization
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={formData.specialization}
                  onChange={e => handleChange("specialization", e.target.value)}
                  style={{
                    width: "100%", height: 44, padding: "0 14px",
                    border: `1.5px solid ${errors.specialization ? "#EF4444" : "#E2E8F0"}`,
                    borderRadius: 8, fontSize: 14,
                    color: formData.specialization ? "#1E293B" : "#9CA3AF",
                    background: "#fff", appearance: "none", cursor: "pointer", outline: "none",
                  }}
                >
                  <option value="">Select Specialization</option>
                  {profileSchema.fields.find(f => f.id === "specialization").options.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#888" }}>▾</span>
              </div>
              {errors.specialization && <p style={{ color: "#EF4444", fontSize: 11.5, marginTop: 4 }}>{errors.specialization}</p>}
            </div>

            {/* Gender */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 10 }}>
                Gender
              </label>
              <div style={{ display: "flex", gap: 28 }}>
                {["Male", "Female", "Other"].map(g => (
                  <label key={g} style={{ display: "flex", alignItems: "center", gap: 7, cursor: "pointer", fontSize: 14, color: "#374151" }}>
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={() => handleChange("gender", g)}
                      style={{ accentColor: "#2DBDBD", width: 16, height: 16 }}
                    />
                    {g}
                  </label>
                ))}
              </div>
              {errors.gender && <p style={{ color: "#EF4444", fontSize: 11.5, marginTop: 4 }}>{errors.gender}</p>}
            </div>

            {/* City */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>
                City
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={formData.city}
                  onChange={e => handleChange("city", e.target.value)}
                  style={{
                    width: "100%", height: 44, padding: "0 14px",
                    border: `1.5px solid ${errors.city ? "#EF4444" : "#E2E8F0"}`,
                    borderRadius: 8, fontSize: 14,
                    color: formData.city ? "#1E293B" : "#9CA3AF",
                    background: "#fff", appearance: "none", cursor: "pointer", outline: "none",
                  }}
                >
                  <option value="">Select City</option>
                  {profileSchema.fields.find(f => f.id === "city").options.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#888" }}>▾</span>
              </div>
              {errors.city && <p style={{ color: "#EF4444", fontSize: 11.5, marginTop: 4 }}>{errors.city}</p>}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              style={{
                width: "100%", padding: "13px",
                background: "#F59E0B", color: "#fff",
                border: "none", borderRadius: 10,
                fontSize: 16, fontWeight: 700,
                cursor: "pointer", letterSpacing: 0.3,
                boxShadow: "0 4px 14px rgba(245,158,11,0.35)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 6px 20px rgba(245,158,11,0.45)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)";    e.target.style.boxShadow = "0 4px 14px rgba(245,158,11,0.35)"; }}
            >
              {profileSchema.submitButton}
            </button>

            <p style={{ fontSize: 12.5, color: "#888", marginTop: 16, textAlign: "center" }}>
              {profileSchema.footerText}{" "}
              <span style={{ color: "#2563EB", cursor: "pointer", fontWeight: 600 }}>
                {profileSchema.footerLink}
              </span>
            </p>
          </div>

          {/* ── Live Preview Card ── */}
          <div style={{ flex: "1 1 340px", maxWidth: 500 }}>
            <p style={{ fontSize: 12, color: "#aaa", fontWeight: 600, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>
              Live Preview
            </p>
            <DoctorPreviewCard formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}
