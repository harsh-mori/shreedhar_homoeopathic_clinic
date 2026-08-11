import { ArrowRight } from "lucide-react";
import { aboutDoctor, hero, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
};

/**
 * Full-width dark-green call-to-action band used to close out pages.
 */
export function CtaBand({
  eyebrow = "Consultation",
  title = aboutDoctor.cta.title,
  description = `${aboutDoctor.cta.subtitle} Consult ${site.doctor.name} at ${site.name}, ${site.address.line2}.`,
  buttonLabel = aboutDoctor.cta.buttonLabel,
}: CtaBandProps) {
  return (
    <section className="bg-secondary-700">
      <Container className="py-16 text-center lg:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} dark />
        <div className="mt-8 flex justify-center">
          <ButtonLink href={hero.primaryCta.href} size="lg" variant="secondary">
            {buttonLabel}
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
