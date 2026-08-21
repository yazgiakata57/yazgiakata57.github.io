export default function Footer() {
  return (
    <footer className="py-10">
      <p
        className="text-center text-sm tracking-wide"
        style={{ color: "var(--color-muted)" }}
      >
        © {new Date().getFullYear()} Yazgı Akata. All rights reserved.
      </p>
    </footer>
  );
}