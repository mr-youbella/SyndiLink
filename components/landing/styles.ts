export const container = "mx-auto max-w-400 px-5 sm:px-9 xl:px-14";
export const eyebrow = "inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#245f51] rtl:tracking-normal";
export const heading = "text-3xl leading-snug font-extrabold tracking-tight lg:text-4xl rtl:tracking-normal";

export const sections = ["features", "how-it-works", "community", "faq"];
export type DialogMode = "start" | "signin";
export type OpenDialog = (mode: DialogMode) => void;
