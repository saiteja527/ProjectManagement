import React, { forwardRef } from "react";

const Input = forwardRef(({ textarea, label, ...props }, ref) => {
  const styles =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-50 text-stone-600 focus:outline-none focus:border-stone-600 shadow-md";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={styles} />
      ) : (
        <input ref={ref} {...props} className={styles} />
      )}
    </p>
  );
});

export default Input;
