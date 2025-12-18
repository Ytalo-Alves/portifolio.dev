export interface ProjectData {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  imageUrl: string;
  screenshots?: string[];
  githubUrl: string;
  techs: string[];
  features?: string[];
  liveUrl?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  features: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconUrl: string;
  color: string;
}

export interface SkillData {
  id: string;
  name: string;
  iconUrl: string;
}
