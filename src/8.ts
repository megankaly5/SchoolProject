import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SchoolProjectService {
  constructor(private http: HttpClient) {}

  getSchoolProjects(): Promise<any[]> {
    return this.http.get('/api/schoolprojects').toPromise();
  }
}
