import { dataFile } from "../utility/data.js";
import Card from "./Card.jsx";

export default function Section() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {dataFile.map((item, index) => (
          <Card
            key={index}
            img={item.image}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}