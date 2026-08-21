// GM-08: hiệu ứng âm thanh bằng Web Audio API (không dùng file audio), có
// công tắc bật/tắt. Browser-only side effect, so this lives outside core/
// (Mục 16.2's "không phụ thuộc React" is about purity; this additionally
// can't run headless in Vitest/jsdom, which has no Web Audio implementation
// — feature-detected and silently no-ops where unavailable).

import { progressStore } from "@/data-access";

let sharedContext: AudioContext | undefined;

function getContext(): AudioContext | undefined {
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return undefined;
  if (!sharedContext) sharedContext = new Ctor();
  return sharedContext;
}

function beep(frequency: number, durationMs: number, gain = 0.15): void {
  if (!progressStore.getSoundEnabled()) return;
  const ctx = getContext();
  if (!ctx) return;
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gainNode.gain.value = gain;
  oscillator.connect(gainNode).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + durationMs / 1000);
}

export function playCorrectSound(): void {
  beep(880, 120);
}

// Deliberately trầm và ngắn (low-pitched, short) per GM-08 — not jarring.
export function playIncorrectSound(): void {
  beep(220, 150);
}

export function playCoinSound(): void {
  beep(660, 90);
}
