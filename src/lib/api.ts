import type { Workout } from "./types";

// the second URL is the alternative API from the assignment, used if the first one is down
const API_BASES = [
  "https://api.abcz.workers.dev/api/fitlog",
  "https://api.api-store.workers.dev/api/fitlog",
];

async function fetchFromApi<T>(path: string): Promise<T | null> {
  for (const base of API_BASES) {
    try {
      const res = await fetch(`${base}${path}`);
      if (res.status === 404) return null;
      if (res.ok) return (await res.json()) as T;
    } catch {
      // network error: try the next base URL
    }
  }
  throw new Error("Could not reach the FitLog API");
}

export async function getWorkouts(): Promise<Workout[]> {
  return (await fetchFromApi<Workout[]>("")) ?? [];
}

export async function getWorkout(id: string): Promise<Workout | null> {
  if (!/^\d+$/.test(id)) return null;
  return fetchFromApi<Workout>(`/${id}`);
}
