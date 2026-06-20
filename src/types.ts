/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  level: number; // 0 - 100
  iconName: string;
  color: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  result: string;
  details: string[];
  iconType: "college" | "school" | "highschool";
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  tags?: string[];
  credentialUrl?: string;
  type: "certification" | "competition" | "badge";
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
