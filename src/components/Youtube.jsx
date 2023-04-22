import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import useWindowDimensions from "./hooks/useWindowDimensions";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

const spreadsheetId = "1-Z1LqnxJeQBkvHWZ95QXziY2GbndRH5HI5qV1oS887M";
const parser = new PublicGoogleSheetsParser(spreadsheetId);

const Youtube = () => {
  const [videoIds, setVideoIds] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    parser
      .parse()
      .then((items) => setVideoIds(items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-4 flex flex-col items-center bg-green-800">
      <h1 className="mt-8 text-3xl border-b-2 border-black text-white">
        My Youtube Videos
      </h1>
      <div>
        {videoIds.length >= 0 &&
          videoIds.map((v) => {
            return (
              <ReactPlayer
                key={v.id}
                url={`https://www.youtube.com/watch?v=${v.id}`}
                controls
                width={width < 800 ? width - 10 : width / 2}
                style={{ marginTop: "8px" }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Youtube;
