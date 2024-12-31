import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyCard = ({ artifact, onDelete }) => {
  //console.log(artifact?._id);

  const handleDelete = () => {
    axios
      .delete(
        `https://artifacts-server.vercel.app/allArtifacts/${artifact?._id}`
      )
      .then((result) => {
        //console.log(result.data);
        if (result.data.deletedCount > 0) {
          toast.success("Artifact deleted successfully");
          onDelete(artifact._id);
        }
      });
  };

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
        <div className="flex gap-4">
          <Link to={`/updateMyArtifact/${artifact._id}`}>
            <button className="btn bg-blue-500 text-white font-semibold">
              Update
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="btn bg-blue-500 text-white font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
