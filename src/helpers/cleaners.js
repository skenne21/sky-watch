export const cleanVideos = async (videoInfo) => {
  const videos = videoInfo.map(video => ({
    id: video.id.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
    date: video.snippet.publishedAt,
    image: video.snippet.thumbnails.high
  }));
  return videos;
}

export const cleanBios = async (info) => {
  return {
    name: info.name,
    founder: info.founder,
    founded: info.founded,
    summary: info.summary,
    headquarters: info.headquarters
  }
}