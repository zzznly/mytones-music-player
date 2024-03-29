import "./style.scss";
import { convertDurationTime } from "@utils/convert";
import usePlaying from "@store/playing/usePlaying";

interface Props {
  idx?: number;
  id: number;
  imgUrl: string;
  name: string;
  artist: string;
  album?: string;
  durationTime: string;
  uri: string;
}
export default function SongListItem({
  id,
  imgUrl,
  name,
  artist,
  album,
  durationTime,
  uri,
}: Props): JSX.Element {
  const { setPlayingURL } = usePlaying();
  return (
    <li className={"songlist-item"} onClick={() => setPlayingURL(uri)}>
      <div className={"songlist-item__title"}>
        <img
          className="songlist-item__title-albumimage"
          src={imgUrl}
          alt="album"
        />
        <div className={"songlist-item__title-info"}>
          <p className="songlist-item__title-name">{name}</p>
          <p className={"songlist-item__title-artist"}>{artist}</p>
        </div>
      </div>
      {album && <p className={"songlist-item__albumname"}>{album}</p>}
      <div className={"songlist-item__runtime"}>
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          fill="#b3b3b3"
        >
          <path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
        </svg>
        <p className="songlist-item__duration">
          {convertDurationTime(Number(durationTime))}
        </p>
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          viewBox="0 0 16 16"
          data-encore-id="icon"
          fill="#24242e"
        >
          <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
        </svg>
      </div>
    </li>
  );
}
