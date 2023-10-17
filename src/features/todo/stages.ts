export const stages = {
  DOING: "DOING",
  TODO: "TODO",
  DONE: "DONE",
} as const;

export const stagesLabels = {
  DOING: "Doing",
  TODO: "To do",
  DONE: "Done",
} as const;

export type Stage = keyof typeof stages;
