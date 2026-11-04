import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router";
import { Database, LayoutGrid, Users } from "lucide-react";
import Stepper from "../components/Stepper";
import StepCard from "../components/StepCard";
import "./Onboarding.css";

const steps = [
    {
        id: "connect",
        label: "Connect data source",
        title: "Connect data source",
        description: "Your google Analytics account has been successfully connected.",
        action: "Connect source",
        doneAction: "View connection",
        icon: Database,
    },
    {
        id: "dashboard",
        label: "Set up dashboard",
        title: "Set up your dashboard",
        description: "Choose your key metrics and customize your overview dashboard.",
        action: "Continue setup",
        doneAction: "Edit dashboard",
        icon: LayoutGrid,
   },
    {
        id: "team",
        label: "Invite team",
        title: "Invite your team",
        description: "Add team members to collaborate on your analytics workspace.",
        action: "Invite members",
        doneAction: "Manage team",
        icon: Users,
    },
    { id: "live", label: "Go live" },
];

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useLocalStorage("pulse-onboarding-step", 1);

    function getStatus(index) {
        if (index < currentStep) return "completed";
        if (index === currentStep) return "in-progress";
        return "not-started";
    }

    const cardSteps = steps.filter((step) => step.title);
    const readyToLaunch = currentStep === steps.length - 1;
    const isLive = currentStep === steps.length;

    return (
        <>
            <section className="onboarding-hero">
                <p className="onboarding-hero__label">Getting started</p>
                <h1 className="onboarding-hero__title">
                    {isLive ? "You're all set, Pedro!" : "Welcome to Pulse, Pedro"}
                </h1>
                <p className="onboarding-hero__text">
                    {isLive
                        ? "Your analytics workspace is live."
                        : "Let's get your workspace set up. It only takes a few minutes."
                    }
                </p>
                {isLive && (
                    <Link to="/" className="btn btn--light">Go to dashboard</Link>
                )}
            </section>

            <Stepper steps={steps} getStatus={getStatus} />

            <div className="onboarding-cards">
                {cardSteps.map((step, index) => (
                    <StepCard
                        key={step.id}
                        step={step}
                        status={getStatus(index)}
                        onAction={() => setCurrentStep(index + 1)}
                    />
                ))}
            </div>

            {readyToLaunch && (
                <div className="onboarding-launch">
                    <p>Everything's ready. Launch your workspace when you are.</p>
                    <button type="button" className="btn btn--primary" onClick={() => setCurrentStep(steps.length)}>
                        Go live
                    </button>
                </div>
            )}

            <div className="onboarding-help">
                <div>
                    <strong>Need help getting started?</strong>
                    <p>Check our documentation or contact support.</p>
                </div>
                <div className="onboarding-help__actions">
                    <button type="button" className="btn btn--outline">Documentation</button> <button type="button" className="btn btn--soft">Contact support</button>
                </div>
            </div>
        </>
    );
}