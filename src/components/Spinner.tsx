export default function Spinner({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-muted">
      <span className="loading loading-bars loading-lg text-primary" />
      <p className="text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
}
