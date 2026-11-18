export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & System Design' | 'Flagship Platform';
  description: string;
  flagship?: boolean;
  status: 'In Active Development' | 'System Architecture' | 'Research Prototype';
  statusColor: string;
  gridTiedRequirement?: string; // Critical for MRS SOLAR: Grid-tied directly to TNEB, no battery
  features: string[];
  modules?: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  highlights: string[];
  architectureOverview?: string;
}

export interface SkillItem {
  name: string;
  iconName: string;
  practicalContext: string;
  isKey?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationLink?: string;
  certificateFile?: string;
  skillsLearned: string[];
  credentialId?: string;
}

export interface EducationItem {
  degree: string;
  department: string;
  institution: string;
  location: string;
  description: string;
  coreSubjects: string[];
  academicFocus: string[];
}

export interface HackathonItem {
  id: string;
  title: string;
  event: string;
  role: string;
  tagline: string;
  problemStatement: string;
  solutionSummary: string;
  technologies: string[];
  status: string;
  verified: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

export interface CareerOpportunity {
  role: string;
  type: string;
  focus: string;
  description: string;
  icon: string;
}
