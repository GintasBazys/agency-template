import { PRICING_PLANS } from "@/constants/pricingPlans";
import PricingCard from "./PricingCard";

const PricingCardsComponent = () => {
    return (
        <section>
            <div className="py-8 mx-auto max-w-7xl lg:py-16 px-0">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h3 className="mb-4 text-4xl tracking-tight font-bold text-primary">
                        Tailored for dynamic business teams
                    </h3>
                    <p className="mb-5 sm:text-xl">
                        We target markets where technology, innovation, and
                        investment create sustainable value and foster economic
                        development.
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {PRICING_PLANS.map((plan) => (
                        <PricingCard key={plan.title} plan={plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingCardsComponent;
