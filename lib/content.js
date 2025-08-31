// lib/content.js — sin fs; import directo del JSON
import catalog from "../data/catalog.json";

export function getAllWorks() {
  return Array.isArray(catalog?.works) ? catalog.works : [];
}

export function getWorksByType(type) {
  const t = String(type || "").toLowerCase();
  return getAllWorks().filter(
    (w) => String(w.type || "").toLowerCase() === t
  );
}

export function getWorkBySlug(slug) {
  return getAllWorks().find((w) => w.slug === slug) || null;
}
