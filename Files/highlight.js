/**
 * highlight.js — v1.0.0
 * Description: Utility to disable drag, text selection, and right‑click context menu
 * Author: Stephan Pringle
 * Updated: 2026-07-20
 */

document.ondragstart = function() { return false; }
document.onselectstart = function() { return false; }
document.oncontextmenu   = function() { return false; }
