
export default function Card({ img, name, description, isActive}) {

  // function handleCofirmRemoveItem(){
  //   if(
  //     window.confirm(`Are you sure you want to remove ${name}?`)
  //   ){
  //     onRemove(name);
  //   }
  // }
  return (
    <div className="relative bg-gray-800 border border-gray-600 rounded-2xl p-4 w-full max-w-xs shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4">
        {img && (
          <div className="shrink-0">
            <img
              src={img}
              alt={name || "Card icon"}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-white text-lg font-bold font-roboto mb-1">
            {name}
          </h2>
          <p className="text-neutral-300 text-xs font-roboto opacity-80">
            {description}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <button className="p-1 px-2 border border-neutral-200 text-neutral-300 rounded-3xl hover:text-white hover:bg-red-600 text-sm font-medium transition-colors">
          Remove
        </button>
        <p className="text-neutral-300 text-xs font-roboto opacity-80">{ isActive ? 'active': 'inactive'}</p>
      </div>
    </div>
  );
}