import { useState } from "react";


import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import styles from "./video-uploader.module.scss";

const VideoUploader = ({uploadedMedia}) => {
  let [currentVideo, setCurrentVideo] = useState("");
  let [videoSource, setVideoSource] = useState("");
  let [showVideo, setShowVideo] = useState(false);

  const getCurrentVideo = (link, source) => {
    setCurrentVideo(link);
    setVideoSource(source);
  };

  const extractYouTubeId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const extractVKId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?vkvideo\.ru\/video[-]?(\d+_\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const transformYandexLink = (url) => {
    const regex = /(?:https?:\/\/)?(?:disk\.yandex\.ru\/i\/)([a-zA-Z0-9]+)/;
    const match = url.match(regex);
    if (match) {
      const videoContentId = match[1];
      return `https://frontend.vh.yandex.ru/player/${videoContentId}?from=partner&autoplay=1&mute=1`;
    }
    return null; // Возвращаем null, если ссылка не соответствует формату
  };
  const extractGoogleDriveId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleInputChange = (event) => {
    const link = event.target.value;
    let videoId = null;
    let source = "";

    if (link.includes("youtube.com") || link.includes("youtu.be")) {
      videoId = extractYouTubeId(link);
      source = "youtube";
    } else if (link.includes("vkvideo.ru")) {
      videoId = extractVKId(link);
      source = "vkvideo";
    } else if (link.includes("disk.yandex.ru")) {
      const transformedLink = transformYandexLink(link);
      if (transformedLink) {
        videoId = transformedLink.split("/").pop().split("?")[0]; // Извлекаем video_content_id
        source = "yandex";
      }
    } else if (link.includes("drive.google.com")) {
      videoId = extractGoogleDriveId(link);
      source = "google";
    }

    if (videoId) {
      getCurrentVideo(videoId, source);
    } else {
      setCurrentVideo("");
      setVideoSource("");
    }
  };
  const handlePreviewClick = () => {
    setShowVideo(!showVideo); // Устанавливаем состояние для отображения видео
  };
  const renderIframe = () => {
    switch (videoSource) {
      case "youtube":
        return (
          <iframe
            width="730"
            height="443"
            src={`https://www.youtube.com/embed/${currentVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.frame}
          ></iframe>
        );
      case "vkvideo":
        return (
          <iframe
            width="300"
            height="200"
            src={`https://vkvideo.ru/video${currentVideo}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      case "yandex":
        return (
          <iframe
            width="300"
            height="200"
            src={`https://disk.yandex.ru/embed/${currentVideo}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      case "google":
        return (
          <iframe
            width="300"
            height="200"
            src={`https://drive.google.com/file/d/${currentVideo}/preview`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Input
        inputClass="video__input"
        inputPlaceholder="Ссылка на видео"
        onChange={handleInputChange}
      />
      {currentVideo !== "" ? (
        <Button
          buttonText="Предпросмотр"
          buttonClass="preview__btn"
          onClick={handlePreviewClick} 
          top={uploadedMedia.length === 0 ? 222 : 321.5}
        />
      ) : (
        <></>
        
      )}
      {showVideo && (
        <div className={styles.frame__popup}>
          {renderIframe()} <Button buttonClass='close__preview' onClick={handlePreviewClick} />
        </div>
      )}{" "}

    </>
  );
};

export default VideoUploader;
