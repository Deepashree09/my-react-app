import { useState } from "react";
import PractoRegister from "./register";
import DoctorProfile from "./DoctorProfile";
import MedicalRegistration from "./MedicalRegistration";

export default function App() {
  const [page, setPage] = useState("register"); // "register" | "profile" | "medical"

  if (page === "medical") {
    return (
      <MedicalRegistration
        onBack={() => setPage("profile")}
        onNext={(data) => { console.log("Medical data:", data); alert("Step 2 complete! Step 3 coming next."); }}
      />
    );
  }

  if (page === "profile") {
    return (
      <div>
        <DoctorProfile onNext={() => setPage("medical")} />
        <button
          onClick={() => setPage("medical")}
          style={{
            position: "fixed", bottom: 20, right: 20,
            background: "#FF6B35", color: "#fff", border: "none",
            borderRadius: 8, padding: "10px 18px", fontSize: 13,
            fontWeight: 700, cursor: "pointer", zIndex: 9999,
            boxShadow: "0 4px 12px rgba(255,107,53,0.4)",
          }}
        >
          → Medical Registration 
        </button>
      </div>
    );
  }

  return (
    <div>
      <PractoRegister />
      <button
        onClick={() => setPage("profile")}
        style={{
          position: "fixed", bottom: 20, right: 20,
          background: "#FF6B35", color: "#fff", border: "none",
          borderRadius: 8, padding: "10px 18px", fontSize: 13,
          fontWeight: 700, cursor: "pointer", zIndex: 9999,
          boxShadow: "0 4px 12px rgba(255,107,53,0.4)",
        }}
      >
        → Doctor Onboarding 
      </button>
    </div>
  );
}
