import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { Toggle } from "../../../ui/Toggle";

import { ReactComponent as EyeIcon } from "./GeneralTabAssets/Eye.svg";
import { ReactComponent as WarningIcon } from "./GeneralTabAssets/Warning.svg";
import { ReactComponent as CheckIcon } from "./GeneralTabAssets/Check.svg";
import { useState } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

type GeneralTabProps = {
  onSubmit: SubmitHandler<Inputs>;
};

export const GeneralTab = ({ onSubmit }: GeneralTabProps) => {
  // react-form hook for form validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
  } = useForm<Inputs>();

  // Show/Hide toggle state and handler
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      {/* Show/Hide toggle */}
      <div className="flex flow-row mt-8">
        <EyeIcon className="mr-2 self-center" />
        <text className="text-stone-100 text-[14px] font-normal mr-2">
          Show/Hide
        </text>
        <Toggle isToggled={isToggled} handleToggle={handleToggle} />
      </div>
      {/* Form */}
      {isToggled && (
        <AnimatePresence>
          <motion.form
            className="flex flex-col transition-transform duration-500 ease-in-out"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <fieldset disabled={isSubmitting}>
              {/* Username input */}
              <label className="text-slate-400 text-xs font-semibold pl-1 mt-8">
                Username
              </label>
              <input
                {...register("exampleRequired", {
                  required: true,
                  maxLength: 20,
                })}
                className={classNames(
                  "h-14 w-full p-4  bg-white bg-opacity-5 rounded-2xl border justify-start items-center gap-3 inline-flex grow shrink basis-0 text-slate-400 text-[16px] font-normal leading-tight disabled:opacity-50",
                  {
                    "border border-amber-500":
                      errors.exampleRequired?.type === "required",
                    "border border-[#8E93AC]/[0.1]":
                      !errors.exampleRequired?.type,
                  }
                )}
                placeholder="Type your username"
              />
            </fieldset>
            {/* Error message */}
            {errors.exampleRequired?.type === "required" &&
              !isSubmitSuccessful && (
                <motion.div
                  className="flex flow-row mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <WarningIcon className="mr-2 self-center" />
                  <p
                    role="alert"
                    className="text-[14px] text-amber-500 self-start"
                  >
                    There was an error saving your username, please try again
                  </p>
                </motion.div>
              )}
            {/* Success message */}
            {isSubmitSuccessful && !isSubmitting && (
              <motion.div
                className="flex flow-row mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckIcon className="mr-2 self-center" />
                <p
                  role="alert"
                  className="text-[14px] text-cyan-400 self-start"
                >
                  You have successfully saved your username
                </p>
              </motion.div>
            )}
            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-[103px] h-[52px] px-6 py-4 mt-8 bg-stone-100 rounded-xl shadow-inner justify-center items-center gap-3 inline-flex self-end hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <LoadingSvg />
              ) : (
                <text className="text-slate-900 text-[16px] font-semibold">
                  Submit
                </text>
              )}
            </motion.button>
          </motion.form>
        </AnimatePresence>
      )}
    </>
  );
};

const LoadingSvg = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="inline w-4 h-4 text-[#71398b] animate-spin"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#ae00ff"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    />
  </svg>
);
