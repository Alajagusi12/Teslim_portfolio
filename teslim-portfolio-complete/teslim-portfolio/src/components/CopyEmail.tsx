"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard can be blocked; the mailto button still works
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-mint/40 px-5 text-[15px] font-semibold text-[#ecfdf5] hover:border-mint"
    >
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
