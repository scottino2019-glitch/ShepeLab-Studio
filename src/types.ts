export interface Template {
  id: string;
  name: string;
  description: string;
  code: string;
  category: 'cards' | 'backgrounds' | 'artistic' | 'office';
}

export interface AppState {
  currentCode: string;
  selectedTemplateId: string;
}
