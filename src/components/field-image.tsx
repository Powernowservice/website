import Image from "next/image";

export function FieldImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 760px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
    />
  );
}
