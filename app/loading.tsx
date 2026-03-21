export default function Loading() {
  return (
    <div className="flex justify-center">
      <div
        className="mt-5 h-20 w-20 animate-spin rounded-full border-8 border-blue-500 border-b-transparent"
        aria-label="Now Loading..."
      ></div>
    </div>
  );
}
