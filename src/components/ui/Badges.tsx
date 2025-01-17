export const TechBadge = ({ data }: { data: string }) => {
  return (
    <span className="px-3 py-1 text-sm rounded-full border border-gray-600 text-zinc-300 transition-colors hover:bg-zinc-500">
      {data}
    </span>
  );
};
