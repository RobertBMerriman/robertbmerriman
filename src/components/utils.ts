export const cx = (...classes: (string | false | null | undefined)[]) => classes.filter((c) => !!c).join(" ");
