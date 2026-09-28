import categoriesData from "@/data/categories.json";
import coursesData from "@/data/courses.json";
import creatorsData from "@/data/creators.json";
import lessonsData from "@/data/lessons.json";
import reviewsData from "@/data/reviews.json";
import type { Category, Course, Creator, Lesson, Review } from "@/types";

export const categories = categoriesData as Category[];
export const courses = coursesData as Course[];
export const creators = creatorsData as Creator[];
export const lessons = lessonsData as Lesson[];
export const reviews = reviewsData as Review[];

export const getCourseBySlug = (slug: string) =>
  courses.find((course) => course.slug === slug);

export const getCoursesByCategory = (categoryId: string) =>
  courses.filter((course) => course.categoryId === categoryId);

export const getCreatorById = (id: string) =>
  creators.find((creator) => creator.id === id);

export const getCreatorBySlug = (slug: string) =>
  creators.find((creator) => creator.slug === slug);

export const getCoursesByCreator = (creatorId: string) =>
  courses.filter((course) => course.creatorId === creatorId);

export const getLessonsByCourse = (courseId: string) =>
  lessons
    .filter((lesson) => lesson.courseId === courseId)
    .sort((a, b) => a.order - b.order);

export const getReviewsByCourse = (courseId: string) =>
  reviews.filter((review) => review.courseId === courseId);
