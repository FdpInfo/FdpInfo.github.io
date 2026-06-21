"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const METHODS: { label: string; discount?: string }[] = [
  { label: "Crypto", discount: "-10%" },
  { label: "Card", discount: "-10%" },
  { label: "VBucks" },
  { label: "Paypal" },
  { label: "More" },
  { label: "Alts" },
];

/**
 * Port of the product modal that lives at the bottom of the original index.html.
 * Faithful to the inline script: any anchor/button whose text contains "Buy"
 * opens it; clicking the overlay or pressing Escape closes it.
 */
export function BuyModal() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openModal = (event: Event) => {
      event.preventDefault();
      setOpen(true);
    };
    const triggers: Element[] = [];
    document.querySelectorAll("a, button").forEach((el) => {
      if (el.textContent?.includes("Buy")) {
        el.addEventListener("click", openModal);
        triggers.push(el);
      }
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      triggers.forEach((el) => el.removeEventListener("click", openModal));
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div
        className={`overlay${open ? " active" : ""}`}
        id="overlay"
        onClick={() => setOpen(false)}
      ></div>
      <div className={`modal${open ? " active" : ""}`} id="modal">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-xl dark:bg-gray-900">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12 dark:text-gray-100">
                FDP
              </h2>
              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  {t.buyModal.informationHeading}
                </h3>
                <p className="text-2xl text-gray-900 dark:text-gray-200">
                  {t.buyModal.price}
                </p>
                <div className="mt-6">
                  <h4 className="sr-only">{t.buyModal.tagsHeading}</h4>
                  <div className="flex items-center align-middle">
                    <div className="flex items-center align-middle">
                      <button className="rounded-full bg-indigo-600 text-white text-sm pb-0.5 px-2 mr-0.5">
                        {t.buyModal.tag}
                      </button>
                    </div>
                    <p className="sr-only">{t.buyModal.tagsCount}</p>
                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-200">
                      {t.buyModal.tagsCount}{" "}
                    </p>
                  </div>
                </div>
              </section>
              <section aria-labelledby="options-heading" className="mt-5">
                <h3 id="options-heading" className="sr-only">
                  {t.buyModal.optionsHeading}
                </h3>
                <div>
                  <div className="mb-5">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {t.buyModal.descriptionHeading}
                    </h4>
                    <p className="mt-1 space-y-6 text-sm text-gray-700 dark:text-gray-300">
                      {t.buyModal.description}{" "}
                      https://www.youtube.com/watch?v=5AGQH1--4iY
                    </p>
                  </div>
                  <div className="mb-5">
                    <div
                      id="headlessui-radiogroup-:r4:"
                      role="radiogroup"
                      aria-labelledby="headlessui-label-:r5:"
                    >
                      <label
                        className="sr-only"
                        id="headlessui-label-:r5:"
                        role="none"
                      >
                        {t.buyModal.choosePaymentMethod}
                      </label>
                      <div className="mt-1 grid grid-cols-4 gap-2" role="none">
                        {METHODS.map((m) => (
                          <div
                            key={m.label}
                            className="cursor-pointer bg-white text-gray-900 shadow-sm dark:text-gray-300 dark:bg-gray-700 dark:border-0 dark:hover:bg-gray-600 group relative flex items-center justify-center rounded-md border p-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                          >
                            <a
                              href="https://lucas-lima.xyz"
                              className="w-full h-full flex justify-center items-center"
                              id="headlessui-label-:r7:"
                            >
                              {m.label}
                            </a>
                            {m.discount ? (
                              <span className="discount-tag">{m.discount}</span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      <div className="mb-5">
                        <p className="mt-1 space-y-6 text-sm text-gray-700 dark:text-gray-300">
                          {t.buyModal.resellerBefore}{" "}
                          <a href=" falta">
                            <b>Spezz </b>
                          </a>{" "}
                          {t.buyModal.resellerAfter}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
