export interface ILocalDataContext {
  store: {
    data: any;
  };
  dispatch: any;
}

export interface IModal {
  open: boolean;
  content?: JSX.Element;
  title?: string;
}

export type BaseProps = React.AllHTMLAttributes<any>;

export interface IResult {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionArtistId: number;
  collectionArtistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  shortDescription: string;
  longDescription: string;
  hasITunesExtras: boolean;
}

export interface IResponse {
  results: IResult[];
  resultCount: number;
}
