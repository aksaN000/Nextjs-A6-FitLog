"use client";

import { useSyncExternalStore } from "react";

export const PLAN_CAP = 5;

export type ListName = "plan" | "saved";

export type PlanEntry = { id: number; done: boolean };

export type PlanState = {
  plan: PlanEntry[];
  saved: PlanEntry[];
};

const STORAGE_KEY = "fitlog-plan";
const EMPTY: PlanState = { plan: [], saved: [] };

let state: PlanState = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    state = EMPTY;
  }
}

function setState(next: PlanState) {
  state = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked: keep the in-memory state
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  load();
  return state;
}

// the server has no localStorage, so it always renders the empty plan
function getServerSnapshot() {
  return EMPTY;
}

export function usePlanStore() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function addToList(list: ListName, id: number) {
  const current = getSnapshot();
  if (current[list].some((entry) => entry.id === id)) return;
  setState({ ...current, [list]: [...current[list], { id, done: false }] });
}

export function removeFromList(list: ListName, id: number) {
  const current = getSnapshot();
  setState({
    ...current,
    [list]: current[list].filter((entry) => entry.id !== id),
  });
}

export function markDone(list: ListName, id: number) {
  const current = getSnapshot();
  setState({
    ...current,
    [list]: current[list].map((entry) =>
      entry.id === id ? { ...entry, done: true } : entry,
    ),
  });
}
