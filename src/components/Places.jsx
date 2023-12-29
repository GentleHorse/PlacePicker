export default function Places({ title, fallbackText, places, onSelectPlace }) {
  return (
    <section className="max-w-[85rem] my-8 mx-auto p-4 border-solid border-2 border-[#0d373e] rounded-lg">
      <h2 className="font-raleway text-2xl mt-0 mx-0 mb-4 p-0 text-[#8feeff] text-center">
        {title}
      </h2>
      {places.length === 0 && <p className="text-center">{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="max-w-[80rem] grid grid-cols-auto-fill gap-8 my-8 mx-auto p-0 list-none">
          {places.map((place) => (
            <li
              key={place.id}
              id="place-item"
              className="relative flex flex-col rounded-lg bg-[#1f1c2c] shadow-custom"
            >
              <button
                className="bg-transparent border-none p-0 hover:shadow-custom-yellow focus:shadow-custom-yellow rounded-lg"
                onClick={() => onSelectPlace(place.id)}
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={place.image.src}
                  alt={place.image.alt}
                />
                <h3 className="font-raleway font-normal text-[0.9rem] absolute bottom-0 right-[1rem] my-4 mx-auto py-[0.15rem] px-[0.35rem] bg-[#433c12] text-[#85ecec] rounded">
                  {place.title}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
