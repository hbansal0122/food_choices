export interface Meta {
    code: number;
    requestId: string;
}

export interface Filter {
    name: string;
    key: string;
}

export interface SuggestedFilters {
    header: string;
    filters: Filter[];
}

export interface Center {
    lat: number;
    lng: number;
}

export interface Ne {
    lat: number;
    lng: number;
}

export interface Sw {
    lat: number;
    lng: number;
}

export interface Bounds {
    ne: Ne;
    sw: Sw;
}

export interface Geometry {
    bounds: Bounds;
}

export interface Geocode {
    what: string;
    where: string;
    center: Center;
    displayString: string;
    cc: string;
    geometry: Geometry;
    slug: string;
    longId: string;
}

export interface Warning {
    text: string;
}

export interface Ne2 {
    lat: number;
    lng: number;
}

export interface Sw2 {
    lat: number;
    lng: number;
}

export interface SuggestedBounds {
    ne: Ne2;
    sw: Sw2;
}

export interface Item2 {
    summary: string;
    type: string;
    reasonName: string;
}

export interface Reasons {
    count: number;
    items: Item2[];
}

export interface LabeledLatLng {
    label: string;
    lat: number;
    lng: number;
}

export interface Location {
    address: string;
    crossStreet: string;
    lat: number;
    lng: number;
    labeledLatLngs: LabeledLatLng[];
    postalCode: string;
    cc: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: string[];
}

export interface Icon {
    prefix: string;
    suffix: string;
}

export interface Category {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
}

export interface Photos {
    count: number;
    groups: any[];
}

export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories: Category[];
    photos: Photos;
}

export interface IItem {
    reasons: Reasons;
    venue: Venue;
    referralId: string;
}

export interface Group {
    type: string;
    name: string;
    items: IItem[];
}

export interface Response {
    suggestedFilters: SuggestedFilters;
    geocode: Geocode;
    warning: Warning;
    headerLocation: string;
    headerFullLocation: string;
    headerLocationGranularity: string;
    query: string;
    totalResults: number;
    suggestedBounds: SuggestedBounds;
    groups: Group[];
}

export interface IOverviewData {
    meta: Meta;
    response: Response;
}