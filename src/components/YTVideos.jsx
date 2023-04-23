import React, { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import PublicGoogleSheetsParser from "public-google-sheets-parser";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";

const spreadsheetId = "1-Z1LqnxJeQBkvHWZ95QXziY2GbndRH5HI5qV1oS887M";
const parser = new PublicGoogleSheetsParser(spreadsheetId);

export default function YTVideos() {
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
        <Carousel className="flex justify-center" controls={false}>
          {videoIds.length >= 0 &&
            videoIds.map((v) => (
              <Carousel.Item key={v.id}>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${v.id}`}
                  controls
                  width={width < 800 ? width - 25 : width / 2}
                  style={{ marginTop: "8px" }}
                />
              </Carousel.Item>
            ))}
        </Carousel>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.youtube.com/@dreslandscaping170"
            target="__blank"
          >
            <button
              aria-label="subscribe"
              className="bg-red-600 text-white px-20 py-2 rounded-md border-2"
            >
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
