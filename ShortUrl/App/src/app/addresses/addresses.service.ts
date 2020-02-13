import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressUpdateDto, AddressViewDto, AddressCreateDto } from './addresses.model';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private addressesUrl = 'address';
  constructor(private httpClient: HttpClient) { }

  get(): Observable<AddressViewDto[]> {
    return this.httpClient.get<AddressViewDto[]>(this.addressesUrl);
  }

  getById(id: number): Observable<string> {
    return this.httpClient.get<string>(`${this.addressesUrl}/${id}`);
  }
  create(data: AddressCreateDto): Observable<void> {
    return this.httpClient.post<void>(this.addressesUrl, data);
  }

  update(data: AddressUpdateDto): Observable<void> {
    return this.httpClient.put<void>(this.addressesUrl, data);
  }
  updateFollowCount(id: number): Observable<void> {
    return this.httpClient.put<void>(`${this.addressesUrl}/${id}/FollowCount`, null);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.addressesUrl}/${id}`);
  }
}
