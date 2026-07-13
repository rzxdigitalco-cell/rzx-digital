import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export function ContactInfoCard() {
  const waMessage = encodeURIComponent("Hi RZX Digital! I'd like to talk about a website project.");

  return (
    <Card>
      <CardTitle>Contact Information</CardTitle>

      <ul className="mt-5 space-y-4">
        <li className="flex items-start gap-3">
          <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </div>
        </li>
        {siteConfig.phones.map((p) => (
          <li key={p.number} className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">{p.label}</p>
              <a
                href={`tel:${p.number.replace(/\s/g, "")}`}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                {p.number}
              </a>
            </div>
          </li>
        ))}
        <li className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm text-foreground">{siteConfig.location}</p>
          </div>
        </li>
      </ul>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-button border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary"
        >
          <MessageCircle size={16} className="text-[#25D366]" />
          WhatsApp Us
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-button border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary"
        >
          <Mail size={16} className="text-primary" />
          Email Us
        </a>
      </div>
    </Card>
  );
}
