declare namespace news {
  interface SourceMetadata {
    name: string;
    author?: { name: string; url?: string };
    source?: { type: string; url: string };
  }

  type Source = SourceMetadata & (
    | { url: string; textReference?: never }
    | { textReference: string; url?: never }
  );

  type GraveyardSource = Source & { reason?: string };
}

declare const news: {
  sources: { name: string; items: news.Source[] }[];
  graveyard: { name: string; items: news.GraveyardSource[] }[];
};

export = news;
