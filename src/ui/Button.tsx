import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  to?: string;
  type: "primary" | "small" | "secondary";
};

const Button: FC<ButtonProps> = ({ children, disabled, to, type }) => {
  const base =
    "inline-block rounded-full text-sm bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full text-sm border-2 border-stone-300 px-4 py-3 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;