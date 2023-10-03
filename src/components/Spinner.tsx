export const Spinner = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-900 mb-2"></div>
      <span>Loading...</span>
    </div>
  );
};
