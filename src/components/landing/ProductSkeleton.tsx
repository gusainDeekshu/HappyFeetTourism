export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden bg-white/5 border border-white/10">
      {/* Image */}
      <div className="h-48 bg-white/10" />

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="h-5 w-3/4 bg-white/10 rounded" />
        <div className="h-4 w-full bg-white/10 rounded" />
        <div className="h-4 w-2/3 bg-white/10 rounded" />
      </div>
    </div>
  );
}
