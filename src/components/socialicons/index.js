import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitch: FaTwitch,
  youtube: FaYoutube
};

// Only show whitelisted platforms; exclude removed ones and non-social like resume
const ALLOWED_PLATFORMS = new Set([
  "github",
  "linkedin",
  "instagram",
  "snapchat",
  "tiktok",
  "twitch",
  "youtube",
]);

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils)
          .filter(([platform, url]) => ALLOWED_PLATFORMS.has(platform) && Boolean(url))
          .map(([platform, url]) => {
            const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
            return (
              <li key={platform}>
                <a href={url}>
                  <IconComponent />
                </a>
              </li>
            );
          })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
