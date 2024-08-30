// 'use client'

import { type ForwardedRef, Fragment, forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { ClipLoader } from "react-spinners";
import { Popover, Transition } from "@headlessui/react";
import Link, { type LinkProps } from "next/link";

type Type = "button" | "submit" | "reset" | "link";
type Color = "primary" | "secondary" | "white" | "outline" | "danger";
type BaseButtonTypeProps = HTMLMotionProps<"button">;
type BaseLinkTypeProps = LinkProps;

type BaseButtonProps = {
  icon?: ReactNode;
  type?: Type;
  text: string;
  loading?: boolean;
  hideText?: boolean;
  color?: Color;
  className?: string;
  badgeNumber?: number;
  position?: "icon-first" | "icon-last";
} & (BaseButtonTypeProps | BaseLinkTypeProps);

const motionProps = {
  initial: {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
  whileHover: { scale: 1.01, boxShadow: "0 12px 18px -3px rgb(0 0 0 / 0.1)" },
  whileTap: { scale: 0.99, boxShadow: "0 8px 12px -2px rgb(0 0 0 / 0.1)" },
};

export const BaseButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  BaseButtonProps
>(function BaseButton(
  {
    icon,
    type,
    text,
    className,
    loading,
    badgeNumber,
    color = "primary",
    position = "icon-last",
    hideText = false,
    ...props
  },
  ref
) {
  const classes = clsx(
    "relative flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-3 py-2 text-sm font-semibold xs:text-base sm:h-12 sm:px-5 sm:py-3 disabled:bg-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed [&>span]:hover:opacity-100",
    {
      "border-bg-white text-white": color === "outline",
      "border-sky-600 bg-blue-500 text-white": color === "primary",
      "border-red-500 bg-red-500 text-white": color === "danger",
      "border-black bg-black text-white": color === "secondary",
      "border-sky-600 bg-white text-sky-600": color === "white",
    },
    { "flex-row-reverse": position === "icon-first" },
    className
  );
  if (type === "link") {
    return (
      <Link
        {...(props as BaseLinkTypeProps)}
        {...motionProps}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={classes}>
        {!hideText && text}
        {icon}
        {hideText && (
          <span className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300">
            {text}
          </span>
        )}
      </Link>
    );
  }

  return (
    <motion.button
      {...(!(props as BaseButtonTypeProps).disabled && motionProps)}
      {...(props as BaseButtonTypeProps)}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={type}
      className={classes}>
      {!loading && (
        <>
          {!hideText && text}
          {badgeNumber && (
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
              {badgeNumber}
            </span>
          )}
          {icon}
        </>
      )}
      {loading && <ClipLoader size={12} color="#ffffff" />}
      {hideText && (
        <span className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-300">
          {text}
        </span>
      )}
    </motion.button>
  );
});

// SaveButton Component
export function SaveButton({
  text = "Save",
  loading,
  onClick,
}: {
  text?: string;
  loading?: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <BaseButton
      text={text}
      color="primary"
      onClick={onClick}
      loading={loading}
      type="button"
    />
  );
}

// AddNewItemButton Component
export function AddNewItemButton({
  text = "Add New Item",
  loading,
  onClick,
}: {
  text?: string;
  loading?: boolean;
  onClick: () => void;
}): JSX.Element {
  return (
    <BaseButton
      text={text}
      color="secondary"
      onClick={onClick}
      loading={loading}
      type="button"
    />
  );
}
