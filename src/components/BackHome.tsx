import Link from "next/link";

export function BackHome({ label = "Back to home" }: { label?: string }) {
  return (
    <Link
      className="button-secondary zywl-relativo text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out bg-linear-gradient-gray-padding before-content-pointer-none before-content-absolute before-content-inset-0 before-content-border-radius-9999px before-content-bg-opacity-0-3 hover-text-white paredes"
      href="/"
    >
      <span className="zywl-relativo exibir-inline-flex alinhar-itens-centro">
        <span className="margem-direita-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
          &lt;-
        </span>
        {label}
      </span>
    </Link>
  );
}
