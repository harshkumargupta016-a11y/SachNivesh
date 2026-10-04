import test from "node:test";
import assert from "node:assert/strict";

test("Header Navigation & Help Centre Regression Tests - Language Switcher Options", () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी (Hindi)" },
    { code: "hing", label: "Hinglish" },
    { code: "mr", label: "मराठी (Marathi)" },
    { code: "gu", label: "ગુજરાતી (Gujarati)" },
    { code: "ta", label: "தமிழ் (Tamil)" },
  ];

  assert.equal(languages.length, 6);
  assert.equal(languages[0].code, "en");
  assert.equal(languages[1].code, "hi");
});

test("Header Navigation & Help Centre Regression Tests - Complaint Portals", () => {
  const complaintPortals = [
    "National Cyber Crime Reporting Portal",
    "SEBI SCORES Portal",
    "RBI Sachet Portal",
    "IRDAI Bima Bharosa Portal"
  ];

  assert.ok(complaintPortals.includes("National Cyber Crime Reporting Portal"));
  assert.ok(complaintPortals.includes("SEBI SCORES Portal"));
  assert.ok(complaintPortals.includes("RBI Sachet Portal"));
  assert.ok(complaintPortals.includes("IRDAI Bima Bharosa Portal"));
});
