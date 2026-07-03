/**
 * highlight.js — v1.1.0
 * Description: Utility to disable drag, text selection, and right‑click context menu
 * Author: Stephan Pringle
 * Updated: 2026-07-20
 */

document.addEventListener('DOMContentLoaded', () => {
    const opts = { passive: false };

    document.addEventListener('dragstart', e => e.preventDefault(), opts);
    document.addEventListener('selectstart', e => e.preventDefault(), opts);
    document.addEventListener('contextmenu', e => e.preventDefault(), opts);
});
