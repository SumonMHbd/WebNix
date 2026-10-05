export interface SuccessItem {
  id: string;
  filename: string;
  width: number;
  height: number;
  client?: string;
  amount?: string;
  category?: 'upwork' | 'fiverr' | 'direct' | 'retainer';
}

export interface BabaQA {
  id: number;
  question: string;
  answer: string;
  rotation: string;
}

export interface VideoChapter {
  id: number;
  timestamp: string;
  title: string;
  description: string;
}

export interface SpiritItem {
  title: string;
  subtitle: string;
  prime?: boolean;
}

export interface GiveawayItem {
  id: string;
  title: string;
  specs: string;
  stage: string;
  imgUrl: string;
}
