type ImagePlaceholderProps = {
  label: string;
  title: string;
  variant?: "portrait" | "book" | "wide";
};

const aspect = {
  portrait: "aspect-[4/5]",
  book: "aspect-[3/4]",
  wide: "aspect-[4/3]",
};

export function ImagePlaceholder({
  label,
  title,
  variant = "wide",
}: ImagePlaceholderProps) {
  return (
    <div className={`relative ${aspect[variant]}`}>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black">
          {label}
        </span>
        <p className="font-heading mt-4 max-w-48 text-2xl font-bold leading-snug text-black">
          {title}
        </p>
      </div>
    </div>
  );
}
