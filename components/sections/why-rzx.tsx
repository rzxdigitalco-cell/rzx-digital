import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { whyUsCards } from "@/data/content";

export function WhyRZX() {
  return (
    <IconCardGrid
      eyebrow="Why RZX Digital"
      title="Why Businesses Choose RZX Digital"
      cards={whyUsCards}
      iconColor="secondary"
    />
  );
}
