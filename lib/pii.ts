export function maskSensitiveContent(input: string): string {
  let text = input;

  text = text.replace(/\b[A-Z]{5}[0-9]{4}[A-Z]{1}\b/g, "[PAN REDACTED]");
  text = text.replace(/\b\d{12}\b/g, "[AADHAAR REDACTED]");
  text = text.replace(/\b\d{9,18}\b/g, "[ACCOUNT REDACTED]");
  text = text.replace(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g, "[EMAIL REDACTED]");
  text = text.replace(/\b(?:\+?91[-\s]?)?(?:\d{10})\b/g, "[PHONE REDACTED]");
  text = text.replace(/\b[a-zA-Z0-9._-]+@upi\b/g, "[UPI REDACTED]");
  text = text.replace(/https?:\/\/[^\s]+/gi, "[URL REDACTED]");

  return text;
}
