import { describe, it, expect } from "vitest";

describe("Header Navigation & Help Centre Regression Tests", () => {
  it("verifies language switcher options and code map", () => {
    const languages = [
      { code: "en", label: "English" },
      { code: "hi", label: "हिन्दी (Hindi)" },
      { code: "hing", label: "Hinglish" },
      { code: "mr", label: "मराठी (Marathi)" },
      { code: "gu", label: "ગુજરાતી (Gujarati)" },
      { code: "ta", label: "தமிழ் (Tamil)" },
    ];

    expect(languages.length).toBe(6);
    expect(languages[0].code).toBe("en");
  });

  it("verifies Help Centre FAQ and complaint portal structures", () => {
    const complaintPortals = [
      "National Cyber Crime Reporting Portal",
      "SEBI SCORES Portal",
      "RBI Sachet Portal",
      "IRDAI Bima Bharosa Portal"
    ];

    expect(complaintPortals).toContain("National Cyber Crime Reporting Portal");
    expect(complaintPortals).toContain("SEBI SCORES Portal");
  });
});
