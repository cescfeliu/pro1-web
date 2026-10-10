export interface SessionPlan {
  id: number;
  title: string;
  published: boolean;
}

export const sessionPlans: SessionPlan[] = [
  { id: 1, title: "Introducció a C++", published: true },
];

export function getSessionPlan(id: number): SessionPlan | undefined {
  return sessionPlans.find(plan => plan.id === id);
}
