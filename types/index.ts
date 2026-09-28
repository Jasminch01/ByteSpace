export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type AccessLevel = "Lifetime" | "1 Year" | "6 Months";

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Student {
  name: string;
  avatar: string;
}

export interface CourseInclude {
  icon: string;
  label: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  categoryId: string;
  creatorId: string;
  level: CourseLevel;
  price: number;
  currency: string;
  accessLevel: AccessLevel;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  totalLessons: number;
  /** Total duration in minutes */
  duration: number;
  /** A few enrolled students, for the avatar stack */
  enrolledStudents: Student[];
  /** Paragraphs */
  description: string[];
  /** Image paths */
  sneakPeek: string[];
  keyPoints: string[];
  includes: CourseInclude[];
}

export interface Lesson {
  id: string;
  courseId: string;
  order: number;
  title: string;
  /** Duration in minutes */
  duration: number;
  isPreview: boolean;
}

export interface Review {
  id: string;
  courseId: string;
  name: string;
  avatar: string;
  rating: number;
  /** ISO date, e.g. "2026-07-14" */
  date: string;
  comment: string;
}

export interface Creator {
  id: string;
  slug: string;
  name: string;
  avatar: string;
  title: string;
  details: string;
  productCount: number;
  followers: number;
  /** Course ids */
  courses: string[];
}
