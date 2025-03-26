import { faqItems } from "@/constants/faq-items";

const column1Items = faqItems.filter((item) => [1, 4, 8].includes(item.order));
const column2Items = faqItems.filter((item) => [2, 5, 7].includes(item.order));
const column3Items = faqItems.filter((item) => [3, 6, 9].includes(item.order));

export default function LandingPageFAQ() {
  return (
    <div className="bg-black py-24 sm:py-32 max-w-[90rem] mx-auto">
      <div className="container flex flex-col gap-6 md:gap-14 mx-auto px-6">
        <h2 className="text-5xl font-semibold -tracking-4 mb-8 text-center text-white">
          Have Questions? We Have Answers.
        </h2>

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
          <div className="contents flex-col gap-4 lg:flex [&>div:last-child]:flex-1">
            {column1Items.map((faq, index) => (
              <div
                key={`col1-${index}`}
                className="flex h-full flex-col gap-4 border border-neutral-800 bg-neutral-950 p-6 rounded-2xl"
                style={{ order: faq.order }}
              >
                <dt className="text-2xl font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="font-mono text-sm leading-relaxed text-zinc-400">
                  {faq.answer}

                  {faq.order === 9 && (
                    <div className="mt-6 flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-black/40 px-6 py-3 text-sm font-medium text-white hover:bg-black/60 transition-all duration-300"
                      >
                        OUR FORUM
                      </a>
                      <a
                        href="mailto:nuemergingcoders@gmail.com"
                        className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-black/40 px-6 py-3 text-sm font-medium text-white hover:bg-black/60 transition-all duration-300"
                      >
                        CONTACT US
                      </a>
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </div>
          <div className="contents flex-col gap-4 lg:flex [&>div:first-child]:flex-1">
            {column2Items.map((faq, index) => (
              <div
                key={`col2-${index}`}
                className="flex h-full flex-col gap-4 border border-neutral-800 bg-neutral-950 p-6 rounded-2xl"
                style={{ order: faq.order }}
              >
                <dt className="text-2xl font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="font-mono text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </div>
          <div className="contents flex-col gap-4 lg:flex [&>div:last-child]:flex-1">
            {column3Items.map((faq, index) => (
              <div
                key={`col3-${index}`}
                className="flex h-full flex-col gap-4 border border-neutral-800 bg-neutral-950 p-6 rounded-2xl"
                style={{ order: faq.order }}
              >
                <dt className="text-2xl font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="font-mono text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
