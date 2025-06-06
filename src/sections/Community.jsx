import React from "react";

const partners = [
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    url: "https://www.spotify.com",
  },
  {
    name: "Gaana",
    logo: "https://static-asset.inc42.com/logo/gaana.png",
    url: "https://gaana.com",
  },
  {
    name: "SoundCloud",
    logo: "https://i1.sndcdn.com/avatars-wQ2we7uDPoXzUVzW-qdr1Yg-t240x240.jpg",
    url: "https://soundcloud.com",
  },
  {
    name: "Apple Music",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlb6MfVAp3HLwiUN7EvPbG-j1L1zOjgq26g&s",
    url: "https://music.apple.com",
  },
  {
    name: "YouTube Music",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_l-6FQr2F5viYuELhfXHiUU46MqDNZkXPwUqbdZagQMt9A=s900-c-k-c0x00ffffff-no-rj",
    url: "https://music.youtube.com",
  },
];

const Community = () => (
  <section className="px-6 py-20 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">
      Trusted by Music Leaders
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-12">
      {partners.map(({ name, logo, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-[#1C1F2E] rounded-xl shadow-lg hover:shadow-purple-600 transition-shadow duration-300"
          style={{ width: 140, height: 70 }}
          aria-label={name}
          title={name}
        >
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-12 max-w-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
          />
        </a>
      ))}
    </div>
  </section>
);

export default Community;
