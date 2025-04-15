import useFetch from "../hooks/useFech";
import DataHandler from "../utils/DataHandler";
import BestCard from "./BestCard";
export default function BestList() {
  const {
    data: bestcards,
    loading,
    error,
  } = useFetch(
    "https://gist.githubusercontent.com/InaSG/297e8ae78ab516c1af472e99b0d5deab/raw/c9525c6d995c894b098afd4144f6f799c88c0712/BestTags.json",
    "best",
    "fileName"
  );
  console.log(bestcards);
  return (
    <div className="best-list">
      <DataHandler loading={loading} error={error}>
        {bestcards.map((card) => (
          <BestCard key={card.id} imgSrc={card.imgSrc} title={card.title} />
        ))}
      </DataHandler>
    </div>
  );
}