import { Resource } from './resource';
import { Post } from './post';

export class Category {
  id: number;
  type: string;
  resources: Resource[];
  posts: Post[];
name: any;

  constructor() {
    this.id = 0;
    this.type = '';
    this.resources = [];
    this.posts = [];
  }
}
