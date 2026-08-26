"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { springMove, springSheet } from "@/lib/motion/springs";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type Copy = Dictionary["contact"];
type Field = "name" | "email" | "company" | "budget" | "message";
type Errors = Partial<Record<Field, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validation is inline and runs on blur, not on submit — telling someone their
 * email is wrong after they have filled in five more fields is a worse
 * experience than telling them the moment they leave the field.
 */
export function ContactForm({ copy }: { copy: Copy }) {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function validate(field: Field, value: string): string | undefined {
    if (field === "name" && value.trim().length < 2) {
      return copy.validation.nameRequired;
    }
    if (field === "email") {
      if (!value.trim()) return copy.validation.emailRequired;
      if (!emailPattern.test(value)) return copy.validation.emailInvalid;
    }
    if (field === "message") {
      if (!value.trim()) return copy.validation.messageRequired;
      if (value.trim().length < 10) return copy.validation.messageShort;
    }
    return undefined;
  }

  function set(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear an existing error as soon as the input becomes valid; do not add
    // new ones mid-typing.
    if (errors[field] && !validate(field, value)) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function blur(field: Field) {
    const error = validate(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Errors = {};
    (["name", "email", "message"] as Field[]).forEach((field) => {
      const error = validate(field, values[field]);
      if (error) next[field] = error;
    });
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(`field-${Object.keys(next)[0]}`);
      first?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={springSheet}
        className="rounded-[var(--radius-lg)] border border-line bg-bg-elevated p-8 md:p-10"
      >
        <span
          aria-hidden
          className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent"
        >
          <svg viewBox="0 0 16 16" className="size-4" fill="none">
            <path
              d="M3 8.5 6.5 12 13 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-5 type-h3">{copy.form.successTitle}</h3>
        <p className="mt-3 type-body text-fg-muted">{copy.form.successBody}</p>
        <Button
          variant="secondary"
          className="mt-7"
          onClick={() => {
            setValues({ name: "", email: "", company: "", budget: "", message: "" });
            setStatus("idle");
          }}
        >
          {copy.form.sendAnother}
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[var(--radius-lg)] border border-line bg-bg-elevated p-6 md:p-10"
    >
      <h2 className="type-eyebrow text-fg-muted">{copy.formTitle}</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <TextField
          field="name"
          label={copy.form.name}
          placeholder={copy.form.namePlaceholder}
          value={values.name}
          error={errors.name}
          onChange={set}
          onBlur={blur}
          required
          autoComplete="name"
        />
        <TextField
          field="email"
          label={copy.form.email}
          placeholder={copy.form.emailPlaceholder}
          value={values.email}
          error={errors.email}
          onChange={set}
          onBlur={blur}
          required
          type="email"
          autoComplete="email"
        />
        <TextField
          field="company"
          label={copy.form.company}
          placeholder={copy.form.companyPlaceholder}
          value={values.company}
          onChange={set}
          onBlur={blur}
          hint={copy.form.optional}
          autoComplete="organization"
        />

        <Field
          field="budget"
          label={copy.form.budget}
          hint={copy.form.optional}
        >
          <select
            id="field-budget"
            value={values.budget}
            onChange={(event) => set("budget", event.target.value)}
            className="h-11 w-full rounded-[var(--radius-sm)] border border-line bg-transparent px-3 type-body text-fg outline-none transition-colors focus:border-accent"
          >
            <option value="">{copy.form.budgetPlaceholder}</option>
            {copy.budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field field="message" label={copy.form.message} error={errors.message} required>
          <textarea
            id="field-message"
            rows={5}
            value={values.message}
            placeholder={copy.form.messagePlaceholder}
            onChange={(event) => set("message", event.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "error-message" : undefined}
            className={`w-full resize-y rounded-[var(--radius-sm)] border bg-transparent p-3 type-body text-fg outline-none transition-colors placeholder:text-fg-muted focus:border-accent ${
              errors.message ? "border-[#ff453a]" : "border-line"
            }`}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? copy.form.sending : copy.form.submit}
        </Button>
        <p className="type-caption text-fg-muted">{copy.responseNote}</p>
      </div>

      <AnimatePresence>
        {status === "error" ? (
          <motion.p
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={springMove}
            className="mt-5 type-caption text-[#ff453a]"
          >
            <strong className="font-semibold">{copy.form.errorTitle}.</strong>{" "}
            {copy.form.errorBody}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

function Field({
  field,
  label,
  hint,
  error,
  required,
  children,
}: {
  field: Field;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={`field-${field}`}
        className="flex items-baseline justify-between gap-2 type-caption font-medium text-fg-secondary"
      >
        <span>
          {label}
          {required ? <span className="text-accent"> *</span> : null}
        </span>
        {hint ? <span className="text-fg-muted">{hint}</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error ? (
          <motion.p
            id={`error-${field}`}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={springMove}
            className="pt-2 type-caption text-[#ff453a]"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function TextField({
  field,
  label,
  placeholder,
  value,
  error,
  hint,
  required,
  type = "text",
  autoComplete,
  onChange,
  onBlur,
}: {
  field: Field;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  hint?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  onChange: (field: Field, value: string) => void;
  onBlur: (field: Field) => void;
}) {
  return (
    <Field field={field} label={label} hint={hint} error={error} required={required}>
      <input
        id={`field-${field}`}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(field, event.target.value)}
        onBlur={() => onBlur(field)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `error-${field}` : undefined}
        className={`h-11 w-full rounded-[var(--radius-sm)] border bg-transparent px-3 type-body text-fg outline-none transition-colors placeholder:text-fg-muted focus:border-accent ${
          error ? "border-[#ff453a]" : "border-line"
        }`}
      />
    </Field>
  );
}
