import Card from "./Card.jsx";

export default function Section({ items}) {

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      { items.lenght === 0 ? (<p>No extension is selected</p>) :
      (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            img={item.logo}
            {...item}
            // onRemove={onRemove}
          />
        ))}
      </div>)
      }
    </section>
  );
}