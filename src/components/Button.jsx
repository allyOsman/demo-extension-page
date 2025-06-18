export default function Button({ children }) {
  return (
    <button className="text-sm text-white font-roboto bg-slate-700 hover:bg-red-600 py-2 px-5 rounded-3xl transition-colors">
      {children}
    </button>
  );
}
