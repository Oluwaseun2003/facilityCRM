'use client';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BaseButton } from "./Button";
import { type ReactNode } from "react";
import Logo from "./Logo";


interface AuthLayoutProps {
  title?: string;
  subtext: string;
  children: ReactNode;
  footer?: ReactNode;
  handleSubmit: (callback: () => void) => (e?: React.BaseSyntheticEvent) => Promise<void>;
//   onSubmit: () => void;
  loading: boolean;
  backButton?: boolean;
}

export default function AuthLayout({
  title,
  children,
  handleSubmit,
//   onSubmit,
  loading,
  subtext,
  footer,
  backButton,
}: AuthLayoutProps): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-gradient-to-br from-cyan-500 to-blue-500 p-4">
      <motion.form
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        // onSubmit={handleSubmit(onSubmit)}
        className="flex max-h-[85%] w-full max-w-md flex-col rounded-lg bg-white 2xl:max-h-[66.67%] 2xl:max-w-2xl"
      >
        <Logo className="mx-4 my-8 block sm:mx-12 [&>img]:mx-auto" />
        <h1 className="mx-6 text-xl font-semibold text-blue-500 sm:mx-12 sm:text-2xl">
          {title ?? "Welcome to Oneflare"}
        </h1>
        <p className="mx-6 text-sm sm:mx-12 sm:text-base">{subtext}</p>
        <div
          style={{ scrollbarGutter: "stable both-edges" }}
          className="mt-4 flex-1 space-y-6 overflow-y-auto border-y px-4 py-8 sm:px-12"
        >
          {children}
        </div>
        <fieldset className="flex gap-4 px-6 py-8 sm:px-12">
          {backButton && (
            <BaseButton
              text="Back"
              type="button"
              className="w-full"
              color="white"
              onClick={() => {
                router.back();
              }}
            />
          )}
          <BaseButton
            text="Submit"
            type="submit"
            className="w-full"
            loading={loading}
          />
        </fieldset>
      </motion.form>
      {footer}
    </div>
  );
}
