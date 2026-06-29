export interface AppSpec {
  title: string;
  description: string;
  pages: Page[];
}

export interface Page {
  name: string;
  route: string;
  components: Component[];
}

export interface Component {
  type: string;
  label?: string;
  placeholder?: string;
  children?: Component[];
}