export interface AddressViewDto {
    id: number;
    longUrl: string;
    shortUrl: string;
    created: Date;
    followCount: number;
}

export class AddressCreateDto {
    longUrl: string;
}

export class AddressUpdateDto {
    id: number;
    longUrl: string;
}