export type SocialLink = {
  platform: string;
  label: string;
  url: string;
  visible: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/defr0sch",
    visible: true,
  },
  {
    platform: "github",
    label: "GitHub",
    url: "https://github.com/garquiza",
    visible: true,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/nicole-arquiza-380a29344",
    visible: true,
  },
];

export const visibleSocialLinks = socialLinks.filter((link) => link.visible);
