import { Button } from "@/components/ui/button";
import { CoffeeCup } from "@/components/svgs";

export function BrandNarrative() {
  return (
    <div className="my-20 flex flex-col md:items-center px-6 py-10 md:py-20 bg-neutral-50 md:grid md:grid-cols-[70%_30%]">
      <div>
        <div className="block md:hidden max-md:pb-5">
          <CoffeeCup />
        </div>

        <h2 className="text-2xl sm:text-4xl font-medium text-neutral-900 mb-6 font-instrument-sans">
          Gray Cup Narrative
        </h2>

        <p className="text-md sm:text-lg mb-10 text-neutral-700 my-4 max-w-2xl leading-relaxed">
          <span className="mb-4">
            Gray Cup creates sustainable, high-quality essentials for
            everything that belongs in your cup.
          </span>
          Built on the idea of a{" "}
          <span className="font-medium">neutral cup</span>, sustainable,
          balanced, and uncompromising in quality, Gray Cup focuses on
          what truly matters.
          <br />
          <br />
          From coffee and matcha to tea and future essentials, we do not
          chase categories or trends.
          <br />
          <br />
          <span className="font-medium text-neutral-900">
            The best is what belongs in your cup.
          </span>
        </p>
      </div>

      <div className="hidden md:block">
        <CoffeeCup />
      </div>

      <a href="https://discord.gg/gpRxmW63JW" target="_blank">
        <Button variant="gray">Join Our Discord</Button>
      </a>
    </div>
  );
}
