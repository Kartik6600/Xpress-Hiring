import { candidates as defaultCandidates } from "./candidates.js";

const STORAGE_KEY = "xpress-registered-candidates";

export function getRegisteredCandidates() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

export function getAllCandidates() {
  return [...getRegisteredCandidates(), ...defaultCandidates];
}

export function saveRegisteredCandidate(candidate) {
  const registeredCandidates = getRegisteredCandidates();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([candidate, ...registeredCandidates]),
  );
}
