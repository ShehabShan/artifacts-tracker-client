import { Link } from "react-router-dom";

const Card = ({ artifact }) => {
  //console.log(artifact?._id);

  return (
    <div className="card bg-base-100  shadow-xl border">
      <figure className="px-6 pt-10">
        <img
          src={artifact?.ArtifactImage}
          alt="Shoes"
          className="rounded-xl h-[230px] w-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          {artifact?.ArtifactName}
        </h1>
        <div className="flex gap-2 font-medium">
          <p>CreatedAt:{artifact?.CreatedAt}</p>
          <p>DiscoveredAt:{artifact?.DiscoveredAt}</p>
        </div>
        <div>{artifact?.HistoricalContext}</div>
        <Link to={`/allArtifacts/${artifact._id}`}>
          <button className="btn bg-blue-500 text-white font-semibold">
            view Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
