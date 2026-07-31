import { Mail } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { FIRM_CONTACT } from "./types";

export default function ResultStep({ wantsWhatsapp }: { wantsWhatsapp: boolean }) {
  console.log("ResultStep rendered, wantsWhatsapp:", wantsWhatsapp);
  return (
    <div className="flex flex-col gap-3 pt-1">
      <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800 md:px-5 md:py-3 md:text-base">
        Thanks for sharing your situation — we&apos;ll be in touch soon.
      </div>

      <div className="rounded-lg border border-gray-100 bg-gray-50 p-3 md:p-4">
        <p className="text-xs text-gray-500 md:text-sm">You can also reach us directly:</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
          <a
            href={FIRM_CONTACT.emailHref}
            className="inline-flex items-center gap-1.5 text-xs text-gray-700 transition-colors hover:text-gray-900 md:text-sm"
          >
            <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
            {FIRM_CONTACT.email}
          </a>
          {wantsWhatsapp && (
            <a
              href={FIRM_CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-700 transition-colors hover:text-gray-900 md:text-sm"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-green-600 md:h-4 md:w-4" />
              WhatsApp
            </a>
          )}
        </div>
      </div>

      {wantsWhatsapp && (
        <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800 md:px-5 md:py-3 md:text-base">
          <div className="flex items-center gap-2">
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-green-600 md:h-5 md:w-5" />
            <span>We&apos;ll also reach out on WhatsApp shortly</span>
          </div>
        </div>
      )}
    </div>
  );
}
