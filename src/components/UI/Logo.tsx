import Link from "next/link";
import clsx from "clsx";
import LogoImage from "@/public/svgs/logo.svg";
import LogoMiniImage from "@/public/svgs/logo-mini.svg";

interface Props {
  className?: string;
  size?: "full" | "mini";
}

export default function Logo({ className, size = "full" }: Props): JSX.Element {
  return (
    <Link href="/" className={clsx(className)}>
          {size === "full" ? <LogoImage /> : <LogoMiniImage />}

    </Link>
  );
}
