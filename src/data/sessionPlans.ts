export interface SessionPlan {
  id: number;
  title: string;
  date: string;
  published: boolean;
}

export const sessionPlans: SessionPlan[] = [
  { id: 1, title: "Introducció a C++", date: "Divendres 9 d'octubre de 2026", published: true },
  { id: 2, title: "Iteracions", date: "Divendres 16 d'octubre de 2026", published: true },
];

export function getSessionPlan(id: number): SessionPlan | undefined {
  return sessionPlans.find(plan => plan.id === id);
}
