import { Switch } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ isGPT, setIsGPT }: any) {
  return (
    <div className="flex items-center">
      <label
        className="mr-3 text-sm flex justify-center gap-2 items-center cursor-pointer"
      >
        <Image
          src="/open-ai-logo.png"
          width={85}
          height={85}
          alt="Open AI logo"
          className={`${isGPT ? "opacity-50" : ""}`}
        />
      </label>
      <Switch
        checked={isGPT}
        onChange={(newIsGPT) => {
          console.log('Toggle changed to:', newIsGPT);  // Log the new state
          setIsGPT(newIsGPT);  // Update the state
        }}
        className={classNames(
          isGPT ? "bg-black" : "bg-gray-200",
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            isGPT ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
      <label
        className="ml-3 text-sm flex justify-center gap-2 items-center cursor-pointer"
      >
        <span
          className={`font-medium ${!isGPT ? "text-gray-400" : "text-gray-900"}`}
        >
         Plus Pirate Talk
        </span>
        <Image
          src="/pirate-logo.png"
          width={40}
          height={40}
          alt="Pirate logo"
          className={`${!isGPT ? "opacity-50" : ""}`}
        />
      </label>
    </div>
  );
}
