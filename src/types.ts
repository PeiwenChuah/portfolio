export type ProjectCategory = 'data_science' | 'computer_science';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  /** One-sentence overview shown on the outside of the card */
  description: string;
  /** First item = the one language shown on the card. Full list shown inside the modal. */
  technologies: string[];
  /** Key bullet points shown inside the modal */
  highlights: string[];
  /**
   * Optional external link (e.g. a live dashboard or deployed demo).
   * Rendered as a "Click HERE to open the dashboard" link between the
   * key points and the media gallery inside the modal.
   */
  link?: string;
  /**
   * Paths to screenshots/video clips shown inside the modal, e.g.
   * ['/src/media/my-project-1.png', '/src/media/my-project-2.mp4'].
   * Files ending in .mp4/.webm/.mov/.ogg render as a video player;
   * everything else renders as an image. Leave undefined/empty if you
   * don't have media for a project yet.
   */
  media?: string[];
}
